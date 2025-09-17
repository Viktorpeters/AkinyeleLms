"use client";
import React from "react";
import Image from "next/image";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Users,
  Heart,
  Calendar,
  ChevronRight,
} from "lucide-react";
import "./signup.css";
import Link from "next/link";

export default function SignupForm() {
  return (
    <div className="container">
      <div className="signupWrapper">
        <div className="illustrationSection">
          <Image
            src="https://res.cloudinary.com/dcghgoebb/image/upload/v1758141945/Data_security_01_u3bwfq.jpg"
            alt="Sign up illustration"
            width={400}
            height={400}
            className="illustration"
          />
        </div>

         <Image
                src="https://res.cloudinary.com/dcghgoebb/image/upload/v1758131024/kica-logo02_cwlb81.jpg"
                className="logo"
                width={100}
                height={100}
                alt=""
              />

        <div className="formSection">
          <div className="stepIndicator">
            <p className="stepText">Step 1 of 4</p>
            <div className="progressBar">
              <div className="progress step1 active"></div>
              <div className="progress step2"></div>
              <div className="progress step3"></div>
              <div className="progress step4"></div>
            </div>
          </div>

          <div className="card">
            <h1 className="title">Create your account</h1>
            <p className="subtitle">It's quick and easy.</p>

            <form className="form">
              <div className="formRow">
                <div className="inputGroup">
                  <label htmlFor="fullName" className="label">
                    <User size={14} className="icon" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="input"
                    required
                  />
                </div>

                <div className="inputGroup">
                  <label htmlFor="gender" className="label">
                    <Users size={14} className="icon" />
                    Gender
                  </label>
                  <select id="gender" name="gender" className="input" required>
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="formRow">
                <div className="inputGroup">
                  <label htmlFor="dateOfBirth" className="label">
                    <Calendar size={14} className="icon" />
                    Date of Birth / Age
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    className="input"
                    required
                  />
                </div>

                <div className="inputGroup">
                  <label htmlFor="phoneNumber" className="label">
                    <Phone size={14} className="icon" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+234 812 345 6789"
                    className="input"
                    required
                  />
                </div>
              </div>

              <div className="inputGroup">
                <label htmlFor="email" className="label">
                  <Mail size={14} className="icon" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input"
                  required
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="address" className="label">
                  <MapPin size={14} className="icon" />
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="123 Main Street"
                  className="input"
                  required
                />
              </div>

              <div className="formRow">
                <div className="inputGroup">
                  <label htmlFor="parentGuardianContact" className="label">
                    <Users size={14} className="icon" />
                    Parent / Guardian Contact
                  </label>
                  <input
                    type="text"
                    id="parentGuardianContact"
                    name="parentGuardianContact"
                    placeholder="+234 700 000 0000"
                    className="input"
                    required
                  />
                </div>

                <div className="inputGroup">
                  <label htmlFor="emergencyContact" className="label">
                    <Heart size={14} className="icon" />
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    placeholder="+234 800 111 2222"
                    className="input"
                    required
                  />
                </div>
              </div>

              <div className="divider"></div>

              <Link href="/signup/mentorship">
                    <button type="submit" className="nextButton">
                Next <ChevronRight size={16} />
              </button>
              
              </Link>
            </form>
          </div>

          <div className="footer">
            <p className="footerText">
              Already have an account?{" "}
              <a href="/auth/signin" className="link">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
