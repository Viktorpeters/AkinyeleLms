"use client";

import React from "react";
import Image from "next/image";
import "./personaldevelopment.css";

export default function PersonalDevelopmentForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="left">
        <Image
          src="https://res.cloudinary.com/dcghgoebb/image/upload/v1758122398/personal_dipxmq.jpg"
          alt="Personal Development"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <Image
        src="https://res.cloudinary.com/dcghgoebb/image/upload/v1758131024/kica-logo02_cwlb81.jpg"
        className="logo"
        width={100}
        height={100}
        alt=""
      />

      <div className="right">
        <div className="stepIndicator">
          <div className="stepText">Step 4 of 4</div>
          <div className="progressBar">
            <div className="step active"></div>
            <div className="step active"></div>
            <div className="step active"></div>
            <div className="step active"></div>
          </div>
        </div>

        <div className="card">
          <h1 className="title">Tell us more about yourself</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label className="label">
                <strong>Life Goals</strong>
              </label>
              <p className="description">What are your life goals?</p>
              <textarea
                className="input"
                name="lifeGoals"
                placeholder="Share your life goals and aspirations"
                rows={3}
                required
              />
            </div>

            <div className="divider"></div>

            <div className="inputGroup">
              <label className="label">
                <strong>Personal Strengths</strong>
              </label>
              <p className="description">What are your key strengths?</p>
              <textarea
                className="input"
                name="strengths"
                placeholder="Describe your strengths and talents"
                rows={3}
                required
              />
            </div>

            <div className="divider"></div>

            <div className="inputGroup">
              <label className="label">
                <strong>Areas for Improvement</strong>
              </label>
              <p className="description">What are your weaknesses?</p>
              <textarea
                className="input"
                name="weaknesses"
                placeholder="Share areas you'd like to improve"
                rows={3}
                required
              />
            </div>

            <div className="divider"></div>

            <div className="inputGroup">
              <label className="label">
                <strong>Role Models</strong>
              </label>
              <p className="description">Who inspires you?</p>
              <textarea
                className="input"
                name="roleModels"
                placeholder="Tell us about people who inspire you"
                rows={3}
                required
              />
            </div>

            <div className="divider"></div>

            <div className="inputGroup">
              <label className="label">
                <strong>Complete Profile</strong>
              </label>
              <p className="description">
                What do you hope to gain from this platform?
              </p>
              <textarea
                className="input"
                name="platformExpectations"
                placeholder="Share your expectations from this mentorship platform"
                rows={3}
                required
              />
            </div>

            <div className="buttonGroup">
              <button type="button" className="backButton">
                Back
              </button>
              <button type="submit" className="submitButton">
                Complete Profile
              </button>
            </div>
          </form>

          <div className="footer">
            <p className="footerText">
              Already have an account? <a href="#" className="link">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
