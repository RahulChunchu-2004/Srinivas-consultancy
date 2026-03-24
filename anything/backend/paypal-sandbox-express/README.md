# PayPal Sandbox Express Backend

Express backend for PayPal sandbox order creation, capture, and SMTP receipt emails.

## APIs

- `POST /api/create-order`
  - Creates a PayPal sandbox order for `$49.00 USD`
  - Response: `{ "orderID": "..." }`

- `POST /api/capture-order`
  - Body: `{ "orderID": "...", "email": "customer@example.com" }`
  - Captures payment
  - Sends receipt email via SMTP after successful capture

## Environment Variables

Copy `.env.example` to `.env` and set values:

- `PAYPAL_CLIENT_ID`
- `PAYPAL_SECRET`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- Optional: `SMTP_SECURE`, `SMTP_FROM`, `PORT`

## Run

```bash
npm install express cors dotenv node-fetch nodemailer
node server.js
```

Server runs at `http://localhost:5001`.
