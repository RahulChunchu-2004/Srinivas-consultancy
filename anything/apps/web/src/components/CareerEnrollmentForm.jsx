"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
const PAYPAL_CURRENCY = process.env.NEXT_PUBLIC_PAYPAL_CURRENCY || "USD";
const ENROLLMENT_FEE = process.env.NEXT_PUBLIC_ENROLLMENT_FEE || "49.00";
const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || "TelivAI Solutions";
const ITEM_NAME = process.env.NEXT_PUBLIC_ENROLLMENT_ITEM_NAME || "Career Enrollment Fee";
const PAYPAL_LOCALE = process.env.NEXT_PUBLIC_PAYPAL_LOCALE || "en_US";
const PAYPAL_ENABLE_FUNDING = process.env.NEXT_PUBLIC_PAYPAL_ENABLE_FUNDING || "venmo,card,paylater";
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
      createOrder: (_data, actions) => {
        setPaymentStatus("idle");
        return actions.order.create({
          purchase_units: [
            {
              description: `${ITEM_NAME} - ${COMPANY_NAME}`,
              amount: {
                currency_code: PAYPAL_CURRENCY,
                value: ENROLLMENT_FEE,
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        try {
          setIsPaying(true);
          const capture = await actions.order.capture();
          const purchaseUnit = capture?.purchase_units?.[0];
          const captureUnit = purchaseUnit?.payments?.captures?.[0];

          const approvedPayment = {
            orderID: data.orderID,
            payerID: data.payerID,
            captureID: captureUnit?.id || "",
            status: capture?.status || "COMPLETED",
            amount: captureUnit?.amount?.value || ENROLLMENT_FEE,
            currency: captureUnit?.amount?.currency_code || PAYPAL_CURRENCY,
            paidAt: captureUnit?.create_time || new Date().toISOString(),
          };

          setPaymentDetails(approvedPayment);
          setPaymentStatus("approved");
          setPaymentError("");
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
      const enrollmentRecord = {
        applicant: applicantPayload,
        payment: paymentDetails,
        source: "paypal",
        createdAt: new Date().toISOString(),
      };

      const existing = localStorage.getItem(ENROLLMENT_STORAGE_KEY);
      const parsed = existing ? JSON.parse(existing) : [];
      const updated = [enrollmentRecord, ...parsed];
      localStorage.setItem(ENROLLMENT_STORAGE_KEY, JSON.stringify(updated));

      setSubmitSuccess({
        message: "Enrollment submitted successfully.",
        referenceId: paymentDetails.captureID || paymentDetails.orderID,
      });
      setFormError("");
    } catch (_error) {
      setFormError("Unable to save enrollment locally. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
    </form>
  );
}
