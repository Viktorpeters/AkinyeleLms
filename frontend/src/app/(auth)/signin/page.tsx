"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import "./signin.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("OTP sent to:", email);
      router.push("/OTP");
    }, 350);
  };

  return (
    <div className="container">
      <div className="illustrationContainer">
        <div className="overlay"></div>
        <div className="illustrationn">

        <img
          src="https://res.cloudinary.com/dcghgoebb/image/upload/v1758146718/Data_security_02_g7l54e.jpg"
          alt="Sign In Illustration"
          className="illustratio"
        />
        </div>
      </div>

      <div className="card">
        <div className="logoWrapper">
          <img src="https://res.cloudinary.com/ddlnqthao/image/upload/v1758300104/WhatsApp_Image_2025-09-19_at_17.19.02_cb5c3139_jazl8s.jpg" width={60} height={40} alt="Logo" className="log" />
        </div>

        <div className="header">
          <h1>Welcome!</h1>
          {/* <p>Enter your email to continue.</p> */}
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to continue."
              className="inputt"
              required
            />
            {/* <label htmlFor="email" className="label">
              Email
            </label> */}
          </div>

          <button type="submit" disabled={isLoading} className="button">
            {isLoading ? <Loader2 className="loaderIcon" /> : "Continue"}
          </button>
        </form>

        <p className="footer">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="link">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
