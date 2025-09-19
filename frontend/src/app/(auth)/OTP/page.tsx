"use client";
import React, { useRef } from "react";
import "./OTPVerification.css";
import Link from "next/link";
import Image from "next/image"; 

export default function OTPVerification() {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
    
      if (index < 5) inputsRef.current[index + 1].focus();
    } else if (value === "") {
      if (index > 0) inputsRef.current[index - 1].focus();
    }
    e.target.value = value.slice(-1);
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
    }
  };

  return (
    <div className="otp-container">
      {/* Logo at top-left */}
      <div className="otp-logo">
        <Image
          src="https://res.cloudinary.com/dcghgoebb/image/upload/v1758131024/kica-logo02_cwlb81.jpg" 
          alt="Logo"
          width={120}
          height={40}
          priority
        />
      </div>

      <div className="otp-card">
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

          <p className="otp-resend">
            Didn't receive OTP?{" "}
            <Link className="otp-resend-link" href="/signin">
              Resend
            </Link>
          </p>

          <button type="button" className="otp-button">
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}
