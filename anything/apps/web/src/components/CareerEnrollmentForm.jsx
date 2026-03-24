"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const env = import.meta.env || {};

const PAYPAL_CLIENT_ID =
  env.VITE_PAYPAL_CLIENT_ID || env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
const PAYPAL_CURRENCY =
  env.VITE_PAYPAL_CURRENCY || env.NEXT_PUBLIC_PAYPAL_CURRENCY || process.env.NEXT_PUBLIC_PAYPAL_CURRENCY || "USD";
const ENROLLMENT_FEE =
  env.VITE_ENROLLMENT_FEE || env.NEXT_PUBLIC_ENROLLMENT_FEE || process.env.NEXT_PUBLIC_ENROLLMENT_FEE || "49.00";
const COMPANY_NAME =
  env.VITE_COMPANY_NAME || env.NEXT_PUBLIC_COMPANY_NAME || process.env.NEXT_PUBLIC_COMPANY_NAME || "TelivAI Solutions";
const ITEM_NAME =
  env.VITE_ENROLLMENT_ITEM_NAME ||
  env.NEXT_PUBLIC_ENROLLMENT_ITEM_NAME ||
  process.env.NEXT_PUBLIC_ENROLLMENT_ITEM_NAME ||
  "Career Enrollment Fee";
const PAYPAL_BACKEND_URL =
  env.VITE_PAYPAL_BACKEND_URL ||
  env.NEXT_PUBLIC_PAYPAL_BACKEND_URL ||
  process.env.NEXT_PUBLIC_PAYPAL_BACKEND_URL ||
  "https://srinivas-consultancy.onrender.com";
const PAYPAL_LOCALE = env.VITE_PAYPAL_LOCALE || env.NEXT_PUBLIC_PAYPAL_LOCALE || process.env.NEXT_PUBLIC_PAYPAL_LOCALE || "";
const PAYPAL_ENABLE_FUNDING =
  env.VITE_PAYPAL_ENABLE_FUNDING ||
  env.NEXT_PUBLIC_PAYPAL_ENABLE_FUNDING ||
  process.env.NEXT_PUBLIC_PAYPAL_ENABLE_FUNDING ||
  "";
const ENROLLMENT_STORAGE_KEY = "careerEnrollmentRecords";

let paypalSdkPromise;

function loadPayPalSdk(clientId, currency) {
  if (!clientId) {
    return Promise.reject(new Error("PayPal client ID is missing."));
  }

  if (window.paypal?.Buttons) {
    return Promise.resolve(window.paypal);
  }

  if (!paypalSdkPromise) {
    paypalSdkPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector('script[data-paypal-sdk="true"]');
      if (existingScript) {
        existingScript.addEventListener("load", () => resolve(window.paypal));
        existingScript.addEventListener("error", () => reject(new Error("Failed to load PayPal SDK.")));
        return;
      }

      const script = document.createElement("script");
      const fundingQuery = PAYPAL_ENABLE_FUNDING
        ? `&enable-funding=${encodeURIComponent(PAYPAL_ENABLE_FUNDING)}`
        : "";
      const localeQuery = PAYPAL_LOCALE ? `&locale=${encodeURIComponent(PAYPAL_LOCALE)}` : "";
      script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=${encodeURIComponent(
        currency
      )}&intent=capture${fundingQuery}${localeQuery}`;
      script.async = true;
      script.setAttribute("data-paypal-sdk", "true");
      script.onload = () => resolve(window.paypal);
      script.onerror = () => reject(new Error("Failed to load PayPal SDK."));
      document.body.appendChild(script);
    });
  }

  return paypalSdkPromise;
}

function getRequiredFieldErrors(applicant) {
  const errors = {};

  if (!applicant.fullName.trim()) errors.fullName = "Full name is required.";
  if (!applicant.email.trim()) errors.email = "Email is required.";
  if (!applicant.phone.trim()) errors.phone = "Phone number is required.";
  if (!applicant.position.trim()) errors.position = "Position is required.";
  if (!applicant.consentAccepted) errors.consentAccepted = "Please accept the privacy consent.";

  return errors;
}

function buildApplicantPayload(applicant) {
  return {
    fullName: applicant.fullName.trim(),
    email: applicant.email.trim(),
    phone: applicant.phone.trim(),
    position: applicant.position,
    consentAccepted: applicant.consentAccepted,
    enrollmentFee: ENROLLMENT_FEE,
    currency: PAYPAL_CURRENCY,
  };
}

export default function CareerEnrollmentForm() {
  const [applicant, setApplicant] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    consentAccepted: false,
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("idle");
  const [paymentError, setPaymentError] = useState("");
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [showPayPalButtons, setShowPayPalButtons] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [isSendingReceiptEmail, setIsSendingReceiptEmail] = useState(false);
  const [receiptEmailStatus, setReceiptEmailStatus] = useState("");

  const paypalContainerRef = useRef(null);
  const hasRenderedButtonsRef = useRef(false);

  const canStartPayment = useMemo(() => !isPaying && !isSubmitting, [isPaying, isSubmitting]);

  useEffect(() => {
    if (!showPayPalButtons || paymentStatus === "approved") {
      return;
    }

    let isMounted = true;

    loadPayPalSdk(PAYPAL_CLIENT_ID, PAYPAL_CURRENCY)
      .then(() => {
        if (!isMounted) return;
        setSdkReady(true);
        setPaymentError("");
      })
      .catch((error) => {
        if (!isMounted) return;
        setPaymentStatus("failed");
        setPaymentError(error.message || "PayPal failed to load. Please try again.");
      });

    return () => {
      isMounted = false;
    };
  }, [showPayPalButtons, paymentStatus]);

  useEffect(() => {
    if (!showPayPalButtons || !sdkReady || !paypalContainerRef.current || hasRenderedButtonsRef.current) {
      return;
    }

    if (!window.paypal?.Buttons) {
      setPaymentStatus("failed");
      setPaymentError("PayPal SDK is unavailable. Please refresh and try again.");
      return;
    }

    const buttons = window.paypal.Buttons({
      style: {
        layout: "vertical",
        shape: "rect",
      },
      onClick: () => {
        setPaymentError("");
      },
      createOrder: async () => {
        setPaymentStatus("idle");
        const response = await fetch(`${PAYPAL_BACKEND_URL}/api/create-order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to create order on backend.");
        }
        const data = await response.json();
        if (!data.orderID) {
          throw new Error("Backend did not return order ID.");
        }
        return data.orderID;
      },
      onApprove: async (data) => {
        try {
          setIsPaying(true);
          const response = await fetch(`${PAYPAL_BACKEND_URL}/api/capture-order`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID,
              email: applicant.email.trim(),
            }),
          });
          const capture = await response.json();
          if (!response.ok) {
            throw new Error(capture?.error || "Payment capture failed.");
          }

          const approvedPayment = {
            orderID: data.orderID,
            payerID: data.payerID,
            captureID: capture.captureID || "",
            status: capture?.status || "COMPLETED",
            amount: capture?.amount?.replace("$", "") || ENROLLMENT_FEE,
            currency: capture?.currency || PAYPAL_CURRENCY,
            paidAt: new Date().toISOString(),
          };

          setPaymentDetails(approvedPayment);
          setPaymentStatus("approved");
          setPaymentError("");
          setReceiptEmailStatus("Receipt email has been sent from backend SMTP.");
          setFormError("");
        } catch (_error) {
          setPaymentStatus("failed");
          setPaymentError("Payment capture failed. Please retry your payment.");
        } finally {
          setIsPaying(false);
        }
      },
      onCancel: () => {
        setPaymentStatus("failed");
        setPaymentError("Payment was cancelled. Complete payment to continue.");
      },
      onError: () => {
        setPaymentStatus("failed");
        setPaymentError("PayPal returned an error. Please retry.");
      },
    });

    buttons
      .render(paypalContainerRef.current)
      .then(() => {
        hasRenderedButtonsRef.current = true;
      })
      .catch(() => {
        setPaymentStatus("failed");
        setPaymentError("Unable to render PayPal button. Please refresh and try again.");
      });
  }, [sdkReady, showPayPalButtons]);

  const onFieldChange = (field, value) => {
    setApplicant((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    setFormError("");
  };

  const onPreparePayment = () => {
    if (!canStartPayment) return;

    const errors = getRequiredFieldErrors(applicant);
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      setFormError("Please fill all required fields before starting payment.");
      return;
    }

    setFieldErrors({});
    setFormError("");
    setSubmitSuccess(null);
    setShowPayPalButtons(true);
    setPaymentStatus("idle");
  };

  const onSubmitEnrollment = (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const errors = getRequiredFieldErrors(applicant);
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      setFormError("Please fill all required fields.");
      return;
    }

    if (paymentStatus !== "approved" || !paymentDetails) {
      setFormError("Please complete PayPal payment before submitting enrollment.");
      return;
    }

    try {
      setIsSubmitting(true);
      const applicantPayload = buildApplicantPayload(applicant);
      const receiptId = `REC-${Date.now()}`;
      const createdAt = new Date().toISOString();
      const enrollmentRecord = {
        applicant: applicantPayload,
        payment: paymentDetails,
        receiptId,
        source: "paypal",
        createdAt,
      };

      const existing = localStorage.getItem(ENROLLMENT_STORAGE_KEY);
      const parsed = existing ? JSON.parse(existing) : [];
      const updated = [enrollmentRecord, ...parsed];
      localStorage.setItem(ENROLLMENT_STORAGE_KEY, JSON.stringify(updated));

      setSubmitSuccess({
        message: "Enrollment submitted successfully.",
        referenceId: paymentDetails.captureID || paymentDetails.orderID,
      });
      setReceipt({
        receiptId,
        createdAt,
        applicant: applicantPayload,
        payment: paymentDetails,
        companyName: COMPANY_NAME,
        itemName: ITEM_NAME,
      });
      setReceiptEmailStatus("");
      setFormError("");
    } catch (_error) {
      setFormError("Unable to save enrollment locally. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const buildReceiptEmail = () => {
    if (!receipt) return null;

    const body = [
      `Hi ${receipt.applicant.fullName},`,
      "",
      `Your enrollment payment has been received by ${receipt.companyName}.`,
      "",
      `Receipt ID: ${receipt.receiptId}`,
      `Item: ${receipt.itemName}`,
      `Amount: ${receipt.payment.amount} ${receipt.payment.currency}`,
      `Payment Status: ${receipt.payment.status}`,
      `Capture ID: ${receipt.payment.captureID || "-"}`,
      `Order ID: ${receipt.payment.orderID}`,
      `Paid At: ${receipt.payment.paidAt}`,
      "",
      "Thank you.",
    ].join("\n");

    return {
      to: receipt.applicant.email,
      subject: `${receipt.companyName} Enrollment Receipt ${receipt.receiptId}`,
      body,
    };
  };

  const onSendReceiptEmail = async () => {
    setIsSendingReceiptEmail(true);
    const mail = buildReceiptEmail();
    if (mail?.to) {
      setReceiptEmailStatus("Receipt email is automatically sent after payment capture.");
    }
    setIsSendingReceiptEmail(false);
  };

  const onDownloadReceipt = () => {
    if (!receipt) return;

    const receiptContent = {
      receiptId: receipt.receiptId,
      createdAt: receipt.createdAt,
      companyName: receipt.companyName,
      itemName: receipt.itemName,
      applicant: receipt.applicant,
      payment: receipt.payment,
      source: "paypal",
    };

    const blob = new Blob([JSON.stringify(receiptContent, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${receipt.receiptId}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <form className="space-y-4" onSubmit={onSubmitEnrollment}>
      <input
        type="text"
        placeholder="Full name"
        value={applicant.fullName}
        onChange={(event) => onFieldChange("fullName", event.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#a855f7]/50 transition-colors"
      />
      {fieldErrors.fullName ? <p className="text-xs text-red-400">{fieldErrors.fullName}</p> : null}

      <input
        type="email"
        placeholder="Email"
        value={applicant.email}
        onChange={(event) => onFieldChange("email", event.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#a855f7]/50 transition-colors"
      />
      {fieldErrors.email ? <p className="text-xs text-red-400">{fieldErrors.email}</p> : null}

      <input
        type="tel"
        placeholder="Phone number"
        value={applicant.phone}
        onChange={(event) => onFieldChange("phone", event.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#a855f7]/50 transition-colors"
      />
      {fieldErrors.phone ? <p className="text-xs text-red-400">{fieldErrors.phone}</p> : null}

      <select
        value={applicant.position}
        onChange={(event) => onFieldChange("position", event.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400 text-sm focus:outline-none focus:border-[#a855f7]/50 transition-colors"
      >
        <option value="">Position applying for (select)</option>
        <option value="ai-ml">AI/ML Engineer</option>
        <option value="data">Data Engineer</option>
        <option value="network">Network Engineer</option>
        <option value="cybersecurity">Cyber Security Engineer</option>
        <option value="ui-ux">UI/UX Designer</option>
        <option value="java">Java Developer</option>
        <option value="software">Software Developer</option>
      </select>
      {fieldErrors.position ? <p className="text-xs text-red-400">{fieldErrors.position}</p> : null}

      <label className="flex items-start gap-2 text-xs text-gray-400 cursor-pointer">
        <input
          type="checkbox"
          checked={applicant.consentAccepted}
          onChange={(event) => onFieldChange("consentAccepted", event.target.checked)}
          className="mt-0.5 accent-[#a855f7]"
        />
        I agree to be contacted about this application and accept the privacy policy.
      </label>
      {fieldErrors.consentAccepted ? <p className="text-xs text-red-400">{fieldErrors.consentAccepted}</p> : null}

      <div className="rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/5 px-4 py-3 text-sm text-gray-300">
        Enrollment fee: <span className="font-semibold text-white">{ENROLLMENT_FEE}</span> {PAYPAL_CURRENCY}
      </div>

      {!showPayPalButtons ? (
        <button
          type="button"
          onClick={onPreparePayment}
          disabled={!applicant.consentAccepted || !canStartPayment}
          className="w-full bg-[#a855f7] hover:bg-[#9333ea] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        >
          Continue to PayPal
        </button>
      ) : null}

      {showPayPalButtons && paymentStatus !== "approved" ? (
        <div className="space-y-3">
          <div ref={paypalContainerRef} />
          {isPaying ? <p className="text-xs text-gray-400">Processing payment...</p> : null}
        </div>
      ) : null}

      {paymentStatus === "approved" && paymentDetails ? (
        <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Payment approved. Reference: {paymentDetails.captureID || paymentDetails.orderID}
        </div>
      ) : null}

      {paymentError ? <p className="text-xs text-red-400">{paymentError}</p> : null}
      {formError ? <p className="text-xs text-red-400">{formError}</p> : null}

      <button
        type="submit"
        disabled={paymentStatus !== "approved" || isSubmitting}
        className="w-full bg-[#a855f7] hover:bg-[#9333ea] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
      >
        {isSubmitting ? "Submitting Enrollment..." : "Submit Enrollment"}
      </button>

      {submitSuccess ? (
        <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          {submitSuccess.message} Confirmation ID: {submitSuccess.referenceId}
        </div>
      ) : null}

      {receipt ? (
        <div className="space-y-3 rounded-xl border border-[#a855f7]/25 bg-white/5 px-4 py-4 text-sm">
          <p className="text-white font-semibold">Receipt generated: {receipt.receiptId}</p>
          <p className="text-gray-300">
            Amount paid: {receipt.payment.amount} {receipt.payment.currency}
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onDownloadReceipt}
              className="rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 text-white text-xs font-semibold transition-colors"
            >
              Download Receipt
            </button>
            <button
              type="button"
              onClick={onSendReceiptEmail}
              disabled={isSendingReceiptEmail}
              className="rounded-lg bg-[#a855f7] hover:bg-[#9333ea] px-4 py-2 text-white text-xs font-semibold transition-colors"
            >
              {isSendingReceiptEmail ? "Sending..." : "Send Receipt Email"}
            </button>
          </div>
          {receiptEmailStatus ? <p className="text-xs text-gray-300">{receiptEmailStatus}</p> : null}
        </div>
      ) : null}
    </form>
  );
}
