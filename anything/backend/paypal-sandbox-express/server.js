const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const fetch = (...args) => import("node-fetch").then(({ default: fetchFn }) => fetchFn(...args));

const app = express();
const PORT = Number(process.env.PORT || 5001);

const PAYPAL_BASE_URL = "https://api-m.sandbox.paypal.com";
const ORDER_AMOUNT = "49.00";
const ORDER_CURRENCY = "USD";

app.use(cors());
app.use(express.json());

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

async function getPayPalAccessToken() {
  const clientId = getRequiredEnv("PAYPAL_CLIENT_ID");
  const secret = getRequiredEnv("PAYPAL_SECRET");
  const auth = Buffer.from(`${clientId}:${secret}`).toString("base64");

  const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(data.error_description || "Failed to generate PayPal access token");
  }

  return data.access_token;
}

async function createPayPalOrder(accessToken) {
  const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: ORDER_CURRENCY,
            value: ORDER_AMOUNT,
          },
        },
      ],
    }),
  });

  const data = await response.json();
  if (!response.ok || !data.id) {
    throw new Error(data.message || "Failed to create PayPal order");
  }

  return data;
}

async function capturePayPalOrder(accessToken, orderId) {
  const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to capture PayPal payment");
  }

  return data;
}

function createTransporter() {
  const host = getRequiredEnv("SMTP_HOST");
  const port = Number(getRequiredEnv("SMTP_PORT"));
  const user = getRequiredEnv("SMTP_USER");
  const pass = getRequiredEnv("SMTP_PASS");
  const secure = process.env.SMTP_SECURE === "true";

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

async function sendReceiptEmail({ toEmail, orderId, paymentStatus }) {
  const transporter = createTransporter();
  const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;

  await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    subject: "Payment Successful",
    text: [
      "Your payment was successful.",
      `Amount: $${ORDER_AMOUNT}`,
      `Order ID: ${orderId}`,
      `Payment status: ${paymentStatus}`,
    ].join("\n"),
  });
}

app.post("/api/create-order", async (_req, res) => {
  try {
    const accessToken = await getPayPalAccessToken();
    const order = await createPayPalOrder(accessToken);

    res.status(200).json({
      orderID: order.id,
    });
  } catch (error) {
    res.status(500).json({
      error: "Unable to create PayPal order",
      details: error.message,
    });
  }
});

app.post("/api/capture-order", async (req, res) => {
  const { orderID, email } = req.body || {};

  if (!orderID || !email) {
    return res.status(400).json({
      error: "orderID and email are required",
    });
  }

  try {
    const accessToken = await getPayPalAccessToken();
    const capture = await capturePayPalOrder(accessToken, orderID);

    if (capture.status !== "COMPLETED") {
      return res.status(400).json({
        error: "Payment not completed",
        status: capture.status,
      });
    }

    await sendReceiptEmail({
      toEmail: email,
      orderId: orderID,
      paymentStatus: capture.status,
    });

    return res.status(200).json({
      success: true,
      orderID,
      status: capture.status,
      amount: `$${ORDER_AMOUNT}`,
      currency: ORDER_CURRENCY,
      message: "Payment captured and receipt email sent",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Unable to capture PayPal order",
      details: error.message,
    });
  }
});

app.use((err, _req, res, _next) => {
  res.status(500).json({
    error: "Server error",
    details: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`PayPal sandbox backend running on http://localhost:${PORT}`);
});
