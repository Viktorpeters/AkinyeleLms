"use client";
import React from "react";
import styles from "./Mindshift.module.css";

export default function MindshiftPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero} id="home">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Mindshift & Productivity Mastery</h1>
            <p className={styles.heroSubtitle}>
              Transform Your Thinking • Master Your Time • Maximize Your Impact
            </p>
            <p className={styles.heroDescription}>
              Break free from limiting beliefs, overcome procrastination, and
              develop Kingdom productivity habits that align your daily actions
              with your divine purpose. It’s time to think differently and
              produce exceptionally.
            </p>
            <div className={styles.heroButtons}>
              <a href="#transformation" className={styles.btnPrimary}>
                Start Your Transformation
              </a>
              <a href="#mastery" className={styles.btnSecondary}>
                Discover the Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className={styles.container}>
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>300%</h3>
              <p>Average Productivity Increase</p>
            </div>
            <div className={styles.statItem}>
              <h3>90%</h3>
              <p>Overcome Procrastination</p>
            </div>
            <div className={styles.statItem}>
              <h3>85%</h3>
              <p>Achieve Major Goals</p>
            </div>
            <div className={styles.statItem}>
              <h3>95%</h3>
              <p>Experience Mindset Shift</p>
            </div>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Transformation Section */}
        <section className={styles.section} id="transformation">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>The Great Mindshift</h2>
            <p className={styles.sectionSubtitle}>
              Your mind is the battlefield where your future is won or lost.
              This module equips you to embrace transformational mindsets,
              develop emotional resilience, and master productivity systems
              for Kingdom exploits.
            </p>

            <div className={styles.transformationGrid}>
              <div className={styles.transformationCard}>
                <div className={styles.cardIcon}>🧠</div>
                <h3>Transformational Mindsets</h3>
                <p>
                  Develop the mindset shifts required for success,
                  breakthroughs, and exploits.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Types of Transformational Mindsets for Success & Exploits</li>
                  <li>Exploring the Mind Creators</li>
                  <li>Breaking Limiting Thought Patterns</li>
                  <li>Unlocking Inner Greatness</li>
                </ul>
              </div>

              <div className={styles.transformationCard}>
                <div className={styles.cardIcon}>⚡</div>
                <h3>Radical Productivity</h3>
                <p>
                  Build systems, habits, and daily structures that maximize
                  your results with Kingdom excellence.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Radical Productivity: Tools, Habits & Systems for Results</li>
                  <li>Building Daily Systems for Maximum Output</li>
                  <li>Prioritisation, Focus & Execution Skills</li>
                  <li>Time & Energy Mastery: Living Above Procrastination</li>
                </ul>
              </div>

              <div className={styles.transformationCard}>
                <div className={styles.cardIcon}>🎯</div>
                <h3>Emotional & Time Mastery</h3>
                <p>
                  Strengthen your inner resilience and use time as a divine
                  resource for lasting impact.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Emotional Intelligence & Mental Resilience</li>
                  <li>Time, Energy & Productivity Management</li>
                  <li>Mastering Time as a Kingdom Resource</li>
                  <li>Conflict Resolution & Forgiveness</li>
                  <li>Mastering Emotions, Habits, & Thought Patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
