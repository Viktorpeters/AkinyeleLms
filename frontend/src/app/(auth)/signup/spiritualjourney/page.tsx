"use client";

import React from "react";
import Image from "next/image";
import "./spiritual.css";
import Link from "next/link";

export default function SpiritualJourneyForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="left">
        <Image
          src="https://res.cloudinary.com/dcghgoebb/image/upload/v1758120604/spiritual_z6bzus.jpg"
          alt="Mentorship"
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
          <div className="stepText">Step 3 of 4</div>
          <div className="progressBar">
            <div className="step active"></div>
            <div className="step active"></div>
            <div className="step active"></div>
            <div className="step"></div>
          </div>
        </div>

        <div className="card">
          <h1 className="title">Tell us more about your spiritual journey</h1>

          <form className="form" onSubmit={handleSubmit}>
            <div className="inputGroup">
              <label className="label">
                <strong>Describe your salvation experience</strong>
              </label>
              <p className="description">
                Share the story of how you came to faith...
              </p>
              <textarea
                className="input"
                name="salvationExperience"
                placeholder="Tell us about your salvation experience"
                rows={4}
                required
              />
            </div>

            <div className="divider"></div>

            <div className="inputGroup">
              <label className="label">
                <strong>What are some areas you're struggling with?</strong>
              </label>
              <p className="description">
                e.g., prayer, understanding scripture, etc.
              </p>
              <textarea
                className="input"
                name="struggles"
                placeholder="Share areas where you need support"
                rows={3}
                required
              />
            </div>

            <div className="divider"></div>

            <div className="inputGroup">
              <label className="label">
                <strong>Ministry Involvement</strong>
              </label>
              <div className="checkboxGroup">
                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    name="youthMinistry"
                    className="checkboxInput"
                  />
                  <span className="checkmark"></span>
                  Youth Ministry
                </label>

                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    name="worshipTeam"
                    className="checkboxInput"
                  />
                  <span className="checkmark"></span>
                  Worship Team
                </label>

                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    name="smallGroupLeader"
                    className="checkboxInput"
                  />
                  <span className="checkmark"></span>
                  Small Group Leader
                </label>

                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    name="otherMinistry"
                    className="checkboxInput"
                  />
                  <span className="checkmark"></span>
                  Other
                </label>
              </div>
            </div>

            <div className="divider"></div>

            <div className="inputGroup">
              <label className="label">
                <strong>Complete Profile</strong>
              </label>
              <p className="description">
                What do you hope to achieve in your faith?
              </p>
              <textarea
                className="input"
                name="faithGoals"
                placeholder="Share your faith goals and aspirations"
                rows={3}
                required
              />
            </div>

            <div className="buttonGroup">
              <button type="button" className="backButton">
                Back
              </button>
              <Link href="/signup/personaldevelopment">
                <button type="submit" className="nextButton">
                  Next
                </button>
              </Link>
            </div>
          </form>

          <div className="footer">
            <p className="footerText">
              Already have an account?{" "}
              <a href="#" className="link">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
