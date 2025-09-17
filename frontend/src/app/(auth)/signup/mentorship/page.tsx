"use client";

import React, { useState } from "react";
import "./mentorship.css";
import Image from "next/image";
import Link from "next/link";

export default function Mentorship() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [activeParent, setActiveParent] = useState<number | null>(null);
  const CENTRES = [
    "BREAKTHROUGH CENTRE",
    "PRAISE CENTRE",
    "FULFILMENT CENTRE",
    "DOMINION CENTRE",
    "WISDOM CENTRE",
    "MERCY CENTRE",
    "SOLUTION CENTER",
    "POWER CENTRE",
    "VICTORY CENTRE",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="left">
        <Image
          src="https://res.cloudinary.com/dcghgoebb/image/upload/v1758118536/mentorship_nu461l.jpg"
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
          <div className="stepText">Step 2 of 4</div>
          <div className="progressBar">
            <div className={`step ${2 >= 1 ? "active" : ""}`}></div>
            <div className={`step ${2 >= 2 ? "active" : ""}`}></div>
            <div className={`step ${2 >= 3 ? "active" : ""}`}></div>
            <div className={`step ${2 >= 4 ? "active" : ""}`}></div>
          </div>
        </div>

        <div className="card">
          <h1 className="title">Tell us about yourself</h1>
          <p className="subtitle">
            This information helps us find the best mentorship match for you.
          </p>

          <form className="form" >
            <div className="inputGroup">
              <label className="label">Educational Status</label>
              <select className="input" name="educationalStatus" required>
                <option value="">Select your status</option>
                <option value="high-school">High School</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="inputGroup">
              <label className="label">Employment</label>
              <select className="input" name="employment" required>
                <option value="">Select your employment</option>
                <option value="student">Student</option>
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="self-employed">Self-Employed</option>
                <option value="retired">Retired</option>
              </select>
            </div>

            <div className="inputGroup">
              <label className="label">Church/Religious Affiliation</label>
              <select className="input" name="religiousAffiliation" required>
                <option value="">Select your affiliation</option>
                <option value="catholic">Catholic</option>
                <option value="protestant">Protestant</option>
                <option value="pentecostal">Pentecostal</option>
                <option value="other-christian">Other Christian</option>
                <option value="other-religion">Other Religion</option>
                <option value="none">None</option>
              </select>
            </div>

            <div className="inputGroup">
              <label className="label">
                Select your district by zone and centre{" "}
              </label>
              <select className="input" name="dccZone" required>
                <option disabled value="">
                  --- Select ---
                </option>
                {CENTRES.map((centre, index) => (
                  <option key={index} value={centre}>
                    {centre}
                  </option>
                ))}
              </select>
            </div>

            <div className="dropdown-container">
              <label className="dropdown-label">
                Select your district by zone and centre
              </label>

              
              <button
                className="dropdown-button"
                onClick={() => setOpen(!open)}
              >
                {selected || "--- Select ---"}
                <span className="dropdown-icon">{open ? "▲" : "▼"}</span>
              </button>

              
              {open && (
                <div className="dropdown-panel">
                  {CENTRES.map((centre, index) => (
                    <div key={index} className="centre-row">
                      <button
                        className="centre-title"
                        onClick={() => {
                          setSelected(centre);
                          setActiveParent(
                            activeParent === index ? null : index
                          );
                        }}
                      >
                        {centre}
                      </button>

                      
                      {activeParent === index && (
                        <div className="box-grid">
                          <div className="box">
                            Box 1
                            <button
                              className="box-cancel"
                              onClick={() =>
                                alert(`Cancelled Box 1 in ${centre}`)
                              }
                            >
                              ✖
                            </button>
                          </div>
                          <div className="box">
                            Box 2
                            <button
                              className="box-cancel"
                              onClick={() =>
                                alert(`Cancelled Box 2 in ${centre}`)
                              }
                            >
                              ✖
                            </button>
                          </div>
                          <div className="box">
                            Box 3
                            <button
                              className="box-cancel"
                              onClick={() =>
                                alert(`Cancelled Box 3 in ${centre}`)
                              }
                            >
                              ✖
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="inputGroup">
              <label className="label">Centre</label>
              <select className="input" name="centre" required>
                <option value="">Select your centre</option>
                <option value="main">Main Centre</option>
                <option value="north">North Centre</option>
                <option value="south">South Centre</option>
                <option value="east">East Centre</option>
                <option value="west">West Centre</option>
              </select>
            </div>

            <div className="inputGroup">
              <label className="label">Family Background</label>
              <textarea
                className="input"
                name="familyBackground"
                placeholder="Describe your background"
                rows={4}
                required
              />
            </div>

            <div className="buttonGroup">
              <button type="button" className="backButton">
                Back
              </button>
             <Link href="/signup/spiritualjourney">

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
