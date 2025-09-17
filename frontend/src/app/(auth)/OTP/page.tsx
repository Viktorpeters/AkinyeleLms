"use client";
import React from "react";
import "./OTPVerification.css";
import Link from "next/link";

export default function OTPVerification() {
  return (
    <div className="otp-container">
      <div className="otp-card">
        <div className="otp-header">
          <h1>Enter OTP</h1>
          <p>Enter the OTP sent to your phone number.</p>
        </div>

        <form className="otp-form">
          <div className="otp-inputs">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                className="otp-input"
              />
            ))}
          </div>

          <p className="otp-resend">
            Didn't receive OTP?{" "}
            <Link className="otp-resend-link" href="/signin">Resend</Link>
          </p>
           

          <button type="button" className="otp-button">
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}
