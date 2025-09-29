"use client";
import React from "react";
import styles from "./Mindshift.module.css";

export default function MindshiftPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      {/* <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>KICA</div>
            <nav>
              <ul className={styles.navList}>
                <li><a href="#home">Home</a></li>
                <li><a href="#transformation">Transformation</a></li>
                <li><a href="#mastery">Mastery</a></li>
                <li><a href="#results">Results</a></li>
                <li><a href="#enroll">Enroll</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header> */}

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
              with your divine purpose. It's time to think differently and
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

      {/* Main Content (Transformation, Mastery, Skills, Results, CTA) */}
      <main className={styles.mainContent}>
        {/* Transformation Section */}
        <section className={styles.section} id="transformation">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>The Great Mindshift</h2>
            <p className={styles.sectionSubtitle}>
              Your mind is the battlefield where your future is won or lost.
              We don't just change what you do—we transform how you think,
              leading to lasting change that produces Kingdom results.
            </p>

            <div className={styles.transformationGrid}>
              <div className={styles.transformationCard}>
                <div className={styles.cardIcon}>🧠</div>
                <h3>Renewing Your Mind</h3>
                <p>
                  Break free from toxic thought patterns, limiting beliefs,
                  and mental strongholds that have kept you stuck.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Identify and demolish mental barriers</li>
                  <li>Replace lies with Kingdom truth</li>
                  <li>Develop faith-based thinking patterns</li>
                  <li>Build unshakeable confidence</li>
                </ul>
              </div>

              <div className={styles.transformationCard}>
                <div className={styles.cardIcon}>⚡</div>
                <h3>Defeating Procrastination</h3>
                <p>
                  Understand the root causes of delay tactics and develop
                  systems that create unstoppable momentum.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Uncover procrastination triggers</li>
                  <li>Build accountability systems</li>
                  <li>Create compelling future vision</li>
                  <li>Develop action-taking habits</li>
                </ul>
              </div>

              <div className={styles.transformationCard}>
                <div className={styles.cardIcon}>🎯</div>
                <h3>Purpose-Driven Focus</h3>
                <p>
                  Learn to filter every opportunity, task, and commitment
                  through the lens of your divine calling.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Clarify your life priorities</li>
                  <li>Master the art of saying "no"</li>
                  <li>Align daily actions with purpose</li>
                  <li>Eliminate time-wasting activities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
