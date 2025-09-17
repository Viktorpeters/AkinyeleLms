"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Loader2 } from "lucide-react";
import "./SignIn.css"; 

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("OTP sent to:", email);
      router.push("/OTP"); 
    }, 2000);
  };

  return (
    <div className="container">

      <div className="illustrationContainer">
        <div className="overlay"></div>
        <img
          src="/signin_illus.png"
          alt="Sign In Illustration"
          className="illustration"
        />
      </div>

      <div className="card">
        <div className="header">
          <h1>Welcome!</h1>
          <p>Enter your email to continue.</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className="input"
              required
            />
            <label htmlFor="email" className="label">
              Email
            </label>
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
