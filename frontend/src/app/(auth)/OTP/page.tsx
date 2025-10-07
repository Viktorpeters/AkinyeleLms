"use client";
import React, { useRef, useState, useEffect } from "react";
import "./OTPVerification.css";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

export default function OTPVerification() {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      if (index < 5) inputsRef.current[index + 1].focus();
    } else if (value === "") {
      if (index > 0) inputsRef.current[index - 1].focus();
    }
    e.target.value = value.slice(-1);
    checkComplete();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pasteData)) {
      pasteData.split("").forEach((num, idx) => {
        if (inputsRef.current[idx]) {
          inputsRef.current[idx].value = num;
        }
      });
      inputsRef.current[5].focus();
      checkComplete();
    }
  };

  const checkComplete = () => {
    const allFilled = inputsRef.current.every((input) => input?.value.length === 1);
    setIsComplete(allFilled);
  };

  useEffect(() => {
    checkComplete();
  }, []);

 const handleResend = (e: React.MouseEvent) => {
  e.preventDefault();
  setLoading(true);
  toast.loading("Resending OTP...");
  
  setTimeout(() => {
    setLoading(false);
    toast.dismiss(); 
    toast.success("OTP sent successfully 🎉");
  }, 5000);
};


  return (
    <div className="otp-container">
      <div className="otp-logo"></div>

      <div className="otp-card">
        <div className="otp-header">
          <Image
            src="https://res.cloudinary.com/dcghgoebb/image/upload/v1758557984/image_nmwq0a.png"
            alt="Logo"
            width={100}
            height={80}
            priority
          />
          <h1>Enter OTP</h1>
          <p>Enter the OTP sent to your phone number.</p>
        </div>

        <form className="otp-form">
          <div className="otp-inputs" onPaste={handlePaste}>
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                className="otp-input"
                ref={(el) => (inputsRef.current[index] = el!)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <p>A verification code has been sent to you.</p>

          <p className="otp-resend">
            Didn’t receive OTP?{" "}
            <a
              href="#"
              onClick={handleResend}
              className={`otp-resend-link ${loading ? "disabled" : ""}`}
            >
              {loading ? (
                <span className="loader"></span>
              ) : (
                "Resend"
              )}
            </a>
          </p>

          <Link href="/success">
            <button
              type="button"
              className={`otp-button ${!isComplete ? "otp-button-disabled" : ""}`}
              disabled={!isComplete}
            >
              Proceed
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
