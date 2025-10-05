"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./signup.module.css";
import { useRouter } from "next/navigation";
import { Plus, ChevronDown, ChevronUp, X, Upload } from "lucide-react";
import MultiDropdown from "../../MultiDropdown/page";
import { useSignupForm } from "@/hooks/useSignupForm";

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const handleSubmi = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/OTP");
  };

  const ministries = [
    { ministry: "Choir / Worship Team", category: "Worship & Creative" },
    { ministry: "Drama & Creative Arts", category: "Worship & Creative" },
    { ministry: "Media & Technical Team", category: "Worship & Creative" },
    {
      ministry: "Bible Study / Teaching Ministry",
      category: "Word & Teaching",
    },
    { ministry: "Counseling & Follow-up", category: "Word & Teaching" },
    { ministry: "Youth Ministry", category: "Word & Teaching" },
    { ministry: "Children’s Ministry", category: "Word & Teaching" },
    { ministry: "Ushering / Protocol", category: "Welfare & Service" },
    { ministry: "Hospitality / Welfare", category: "Welfare & Service" },
    { ministry: "Sanctuary Keepers", category: "Welfare & Service" },
    { ministry: "Evangelism Team", category: "Outreach & Impact" },
    { ministry: "Prayer Team / Intercessors", category: "Outreach & Impact" },
    {
      ministry: "Community Outreach & Social Impact",
      category: "Outreach & Impact",
    },
    {
      ministry: "Interpreters / Language Ministry",
      category: "Outreach & Impact",
    },
  ];

  const courses = [
    "Spiritual Formation & Kingdom Identity",
    "Purpose Discovery & Life Mastery",
    "Mindshift & Productivity Mastery",
    "Business, Career & Financial Intelligence",
    "Leadership & Capacity Building",
    "Public Speaking & Influence",
    "Marriage & Relationship Intelligence",
    "Special Capacity-Building Labs",
    "Digital Influence & Media Mastery",
    "Generational Impact Modules",
  ];

  // Titles for each step
  const stepTitles = [
    "Personal Information",
    "Background Information",
    "Education and Career Data",
    "Purpose And Personal Development",
    " Spiritual And Moral life",
  ];

  // handlers
  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const { formData, handleChange, handleSubmit } = useSignupForm();

  return (
    <section className={styles.container}>
      {/* <div className="bottom-right-footer">
              <p>Kingdom Impact Coaching Academy</p>
              <p>&copy; 2025</p>
              <h6>KLOUD6 TECHNOLOGIES</h6>
            </div> */}
      {/* Left Image */}
      <div className={styles.leftImage}>
        <Image
          src="https://res.cloudinary.com/dcghgoebb/image/upload/v1758141945/Data_security_01_u3bwfq.jpg"
          alt="Sign up illustration"
          fill
          className={styles.illustration}
        />
      </div>

      {/* Right Form */}
      <div className={styles.formWrapper}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Image
            src="https://res.cloudinary.com/ddlnqthao/image/upload/v1758300104/WhatsApp_Image_2025-09-19_at_17.19.02_cb5c3139_jazl8s.jpg"
            className={styles.logo}
            width={60}
            height={40}
            alt="Logo"
          />
        </div>

        {/* Heading */}
        <div className={styles.header}>
          <h2>Create your account</h2>

          {/* Step Indicator */}
          {/* <div className={styles.stepIndicator}>
            <p className={styles.stepText}>Step {step} of 5</p>
            <div className={styles.progressBar}>
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`${styles.step} ${step >= s ? styles.active : ""}`}
                ></div>
              ))}
            </div>
          </div> */}

          {/* Dynamic Step Title */}
          <h3>{stepTitles[step - 1]}</h3>
        </div>

        {/* Step Forms */}
        {step === 1 && (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleChange}
              placeholder="First Name"
            />
             <input
              type="text"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleChange}
              placeholder="Last Name"
            />
            
            <select
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              name="dob"
              value={formData.dob || ""}
              onChange={handleChange}
              type="date"
              placeholder="Date of Birth"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <input
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              placeholder="Address"
            />

             <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="Email"
            />
            <div className={styles.formGroup}>
              <label>Statement of Purpose</label>
              <textarea
                name="purpose"
                value={formData.purpose || ""}
                onChange={handleChange}
                placeholder="e.g., Business, Education..."
              ></textarea>
            </div>

             <MultiDropdown />
            {/* <input type="tel" placeholder="Parent/Guardian Contact" /> */}
            {/* <input type="tel" placeholder="Emergency Contact" /> */}

            {/* Buttons */}
            <div className={styles.btnGroup}>
              {/* <button
                type="button"
                className={styles.backBtn}
                onClick={handleBack}
                disabled={step === 1}
              >
                Back
              </button> */}
              <Link href="/OTP">
                <button
                  type="submit"
                  className={styles.nextBtn}
                  // onSubmit={handleSubmi}
                  // onClick={handleNext}
                >
                  Complete your Profile
                </button>
              </Link>
            </div>

            <div className={styles.bottomrightfooter}>
              <p style={{ fontSize: "13px" }}>
                Kingdom Impact Coaching Academy &copy; 2025
              </p>
              {/* <span style={{ fontSize: "12px" }}>&copy; 2025</span> */}
              <h6>@KLOUD6 TECHNOLOGIES.</h6>
            </div>
          </form>
        )}

        {step === 2 && (
          <form className={styles.formm}>
            <select>
              <option value="">Educational Status</option>
              <option value="student">Student</option>
              <option value="graduate">Graduate</option>
              <option value="other">Other</option>
            </select>
            <select>
              <option value="">Employment</option>
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
            </select>

            {/* Replacing DCC/Zone & Centre with CompactMultiLevelDropdown */}
            <MultiDropdown />

            {/* Buttons */}
            <div className={styles.btnGroup}>
              <button
                type="button"
                className={styles.backBtn}
                onClick={handleBack}
              >
                Back
              </button>
              <button
                type="button"
                className={styles.nextBtn}
                onClick={handleNext}
              >
                Next
              </button>
            </div>

            <div className={styles.bottomrightfooter}>
              <p style={{ fontSize: "13px" }}>
                Kingdom Impact Coaching Academy &copy; 2025
              </p>
              {/* <span style={{ fontSize: "12px" }}>&copy; 2025</span> */}
              <h6>KLOUD6 TECHNOLOGIES</h6>
            </div>
          </form>
        )}

        {step === 3 && (
          <form className={styles.form}>
            {/* Current education */}
            <div className={styles.formGroup}>
              <label>Current educational pursuit</label>
              <select>
                <option value="">Select your pursuit</option>
                <option>Undergraduate</option>
                <option>Graduate</option>
                <option>Postgraduate</option>
              </select>
            </div>

            {/* <div className={styles.formGroup}>
      <label>Career interest</label>
      <select>
        <option value="">Select career interest</option>
        <option>Engineering</option>
        <option>Design</option>
        <option>Management</option>
      </select>
    </div> */}

            {/* Courses Select */}
            <div className={styles.formGroup}>
              <label>Select your course</label>
              <select className={styles.courseSelect}>
                <option value="">Select a course</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Strengths */}
            <div className={styles.formGroup}>
              <label>Strengths</label>
              <textarea placeholder="e.g., Leadership, time management..."></textarea>
            </div>

            {/* Weaknesses */}
            <div className={styles.formGroup}>
              <label>Weaknesses</label>
              <textarea placeholder="e.g., Procrastination, public speaking..."></textarea>
            </div>

            {/* Skills/Hobbies */}
            <div className={styles.formGroup}>
              <label>Skills / Hobbies</label>
              <textarea placeholder="e.g., Python, painting, hiking..."></textarea>
            </div>

            {/* Certifications */}
            <div className={styles.formGroup}>
              <label>Certifications</label>
              <textarea placeholder="e.g., AWS Cloud Practitioner..."></textarea>
            </div>

            {/* Buttons */}
            <div className={styles.btnGroup}>
              <button
                type="button"
                className={styles.backBtn}
                onClick={handleBack}
              >
                Back
              </button>
              <button
                type="button"
                className={styles.nextBtn}
                onClick={handleNext}
              >
                Next
              </button>
            </div>

            <div className={styles.bottomrightfooter}>
              <p style={{ fontSize: "13px" }}>
                Kingdom Impact Coaching Academy &copy; 2025
              </p>
              {/* <span style={{ fontSize: "12px" }}>&copy; 2025</span> */}
              <h6>KLOUD6 TECHNOLOGIES</h6>
            </div>
          </form>
        )}

        {step === 4 && (
          <form className={styles.formm}>
            {/* Life Goals */}
            <label>
              Life Goals
              <textarea
                placeholder="What are your life goals?"
                className={styles.textareaa}
              ></textarea>
            </label>

            {/* Personal Strengths */}
            <label>
              Personal Strengths
              <textarea
                placeholder="What are your key strengths?"
                className={styles.textareaa}
              ></textarea>
            </label>

            {/* Areas of Improvements */}
            <label>
              Areas of Improvements
              <textarea
                placeholder="What are your weaknesses?"
                className={styles.textareaa}
              ></textarea>
            </label>

            {/* Role Models */}
            <label>
              Role Models
              <textarea
                placeholder="Who inspires you?"
                className={styles.textareaa}
              ></textarea>
            </label>

            {/* Vision */}
            <label>
              Vision
              <textarea
                placeholder="What do you hope to gain from this platform?"
                className={styles.textareaa}
              ></textarea>
            </label>

            <div className={styles.sopContainer}>
              <label className={styles.sopLabel}>Statement of Purpose</label>
              <p className={styles.sopDescription}>
                If you were to be admitted into the Cohort, kindly let us know
                what you plan to achieve.
              </p>

              <div className={styles.fileUploadWrapper}>
                <input
                  type="file"
                  id="fileUpload"
                  className={styles.fileInput}
                  accept=".pdf"
                />
                <label htmlFor="fileUpload" className={styles.fileLabel}>
                  <Upload height={14} width={15} className={styles.icon} />{" "}
                  Upload PDF
                </label>
                <span className={styles.fileNote}>File in PDF only</span>
              </div>
            </div>

            {/* Buttons */}
            <div className={styles.btnGroup}>
              <button
                type="button"
                className={styles.backBtn}
                onClick={handleBack}
              >
                Back
              </button>
              <button
                type="button"
                className={styles.nextBtn}
                onClick={handleNext}
              >
                Next
              </button>
            </div>

            <div className={styles.bottomrightfooter}>
              <p style={{ fontSize: "13px" }}>
                Kingdom Impact Coaching Academy &copy; 2025
              </p>
              {/* <span style={{ fontSize: "12px" }}>&copy; 2025</span> */}
              <h6>KLOUD6 TECHNOLOGIES</h6>
            </div>
          </form>
        )}

        {step === 5 && (
          <form className={styles.form}>
            {/* Section A */}
            <div className={styles.formGroup}>
              <h3 className={styles.normalLabel}>
                Describe your salvation experience
              </h3>

              <textarea
                placeholder="Tell us about your salvation experience"
                className={styles.textarea}
              ></textarea>
            </div>

            {/* Section B */}
            {/* <div className={styles.formGroup}>
              <h3 className={styles.normalLabel}>
                Describe your salvation experience
              </h3>

              <textarea
                placeholder="Tell us about your salvation experience"
                className={styles.textarea}
              ></textarea>
            </div> */}

            {/* Section C */}
            <div className={styles.formGroup}>
              <h3 className={styles.normalLabel}>Ministry Involvement</h3>

              <div className={styles.check}>
                {ministries.map(({ ministry, category }, index) => (
                  <div key={index} className={styles.checkboxRow}>
                    <label>
                      <input
                        type="checkbox"
                        name="ministries"
                        value={ministry}
                      />
                      {ministry}{" "}
                      <span className={styles.category}>({category})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className={styles.btnGroup}>
              <button
                type="button"
                className={styles.backBtn}
                onClick={handleBack}
              >
                Back
              </button>
              <button type="submit" className={styles.nextBtn}>
                Complete Profile
              </button>
            </div>

            <div className={styles.bottomrightfooter}>
              <p style={{ fontSize: "13px" }}>
                Kingdom Impact Coaching Academy &copy; 2025
              </p>
              {/* <span style={{ fontSize: "12px" }}>&copy; 2025</span> */}
              <h6>KLOUD6 TECHNOLOGIES</h6>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
