"use client";

import React from "react";
import styles from "./Purpose.module.css";
import { ArrowRight } from "lucide-react";

const PurposePage = () => {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>
          Purpose Discovery & <span>Life Mastery</span>
        </h1>
        <p>
          Unlock your full potential through purpose-driven learning. This
          program empowers you with clarity, tools, and mastery strategies for
          building a fulfilled life.
        </p>
      </section>

      {/* Learning Sections */}
      <section className={styles.grid}>
        <div className={`${styles.card}`} style={{ borderTopColor: "#4f46e5" }}>
          <h3>Purpose Discovery</h3>
          <p>
            Step into clarity by understanding God’s plan for your life, breaking
            old mindsets, and discovering your true mandate.
          </p>
          <ul>
            <li>
              <span className={styles.bullet} style={{ background: "#4f46e5" }} />
              Discovering Your Life Assignment and Unique Mandate
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#4f46e5" }} />
              Blueprint for Discovering Divine Assignment
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#4f46e5" }} />
              Breaking the Identity Crisis and Insecurity
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#4f46e5" }} />
              Breaking Limiting Beliefs
            </li>
          </ul>
        </div>

        <div className={`${styles.card}`} style={{ borderTopColor: "#9333ea" }}>
          <h3>Destiny Navigation</h3>
          <p>
            Gain wisdom for navigating divine timing, vision, and the seasons of
            your journey.
          </p>
          <ul>
            <li>
              <span className={styles.bullet} style={{ background: "#9333ea" }} />
              The Map of Destiny: Navigating Seasons & Divine Timing
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#9333ea" }} />
              Vision Crafting: Writing & Running with the Vision
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#9333ea" }} />
              Breaking Limiting Beliefs and Unlocking Inner Greatness
            </li>
          </ul>
        </div>

        <div className={`${styles.card}`} style={{ borderTopColor: "#6b21a8" }}>
          <h3>Life Mastery</h3>
          <p>
            Build the mindset, trust, and leadership capacity needed for lasting
            kingdom impact.
          </p>
          <ul>
            <li>
              <span className={styles.bullet} style={{ background: "#6b21a8" }} />
              Kingdom Mindset Shift (Mind Renewal)
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#6b21a8" }} />
              Building Trust, Vision, and Impact Teams
            </li>
          </ul>
        </div>

        {/* CTA Card */}
        <div className={styles.ctaWrapper}>
          <div className={styles.cta}>
            <h3>Start Your Journey Today 🚀</h3>
            <p>
              Take the first step toward clarity, purpose, and fulfillment with
              our guided learning experience.
            </p>
            <div className={styles.ctaFeatures}>
              <div>✅ Interactive Lessons</div>
              <div>✅ Expert Mentorship</div>
              <div>✅ Lifetime Access</div>
            </div>
            <button className={styles.ctaBtn}>
              Enroll Now
              <span>
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurposePage;
