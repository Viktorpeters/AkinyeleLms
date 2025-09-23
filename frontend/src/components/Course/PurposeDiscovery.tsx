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

      {/* Stats Section */}
      <section className={styles.stats}>
        <h2>Why Join This Program?</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statsItem}>
            <div className={styles.number}>500+</div>
            <div className={styles.text}>Learners Enrolled</div>
          </div>
          <div className={styles.statsItem}>
            <div className={styles.number}>95%</div>
            <div className={styles.text}>Completion Rate</div>
          </div>
          <div className={styles.statsItem}>
            <div className={styles.number}>4.9/5</div>
            <div className={styles.text}>Average Rating</div>
          </div>
        </div>
      </section>

      {/* Learning Sections */}
      <section className={styles.grid}>
        <div className={`${styles.card}`} style={{ borderTopColor: "#4f46e5" }}>
          <h3>Discover Your Purpose</h3>
          <p>
            Explore your passions, strengths, and values to uncover the driving
            force behind your life.
          </p>
          <ul>
            <li>
              <span className={styles.bullet} style={{ background: "#4f46e5" }} />
              Passion Mapping
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#4f46e5" }} />
              Strength Finder
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#4f46e5" }} />
              Value Alignment
            </li>
          </ul>
        </div>

        <div className={`${styles.card}`} style={{ borderTopColor: "#9333ea" }}>
          <h3>Life Mastery Tools</h3>
          <p>
            Gain practical skills and frameworks to make better decisions and
            live intentionally.
          </p>
          <ul>
            <li>
              <span className={styles.bullet} style={{ background: "#9333ea" }} />
              Mindset Shifts
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#9333ea" }} />
              Time Mastery
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#9333ea" }} />
              Goal Execution
            </li>
          </ul>
        </div>

        <div className={`${styles.card}`} style={{ borderTopColor: "#6b21a8" }}>
          <h3>Transformative Growth</h3>
          <p>
            Build resilience, emotional intelligence, and leadership skills for
            long-term success.
          </p>
          <ul>
            <li>
              <span className={styles.bullet} style={{ background: "#6b21a8" }} />
              Resilience Building
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#6b21a8" }} />
              Emotional Mastery
            </li>
            <li>
              <span className={styles.bullet} style={{ background: "#6b21a8" }} />
              Leadership Growth
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
