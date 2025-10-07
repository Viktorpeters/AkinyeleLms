"use client";
import React, { useRef, useState, useEffect } from "react";
import "./OTPVerification.css";
import Link from "next/link";
import Image from "next/image"; 

export default function OTPVerification() {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [isComplete, setIsComplete] = useState(false);

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
    const allFilled = inputsRef.current.every(input => input?.value.length === 1);
    setIsComplete(allFilled);
  };

  // Optional: check on mount to handle prefilled OTPs
  useEffect(() => {
    checkComplete();
  }, []);

  return (
    <div className="otp-container">
      

      <div className="otp-card">
        <div className="otp-logo">
        <Image
          src="https://res.cloudinary.com/ddlnqthao/image/upload/v1758300104/WhatsApp_Image_2025-09-19_at_17.19.02_cb5c3139_jazl8s.jpg" 
          alt="Logo"
          width={60}
          height={40}
          priority
        />
      </div>
        <div className="otp-header">
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
            Didn't receive OTP?{" "}
            <Link className="otp-resend-link" href="/signin">
              Resend
            </Link>
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
