"use client";

import { motion } from "framer-motion";
import styles from "./AboutKICA.module.css";

const AboutKICA = () => {
  return (
    <div className={styles.page}>
      {/* Header Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>KINGDOM IMPACT COACHING ACADEMY (KICA)</h1>
        <h2>BY CACYOF AKINYELE REGION</h2>
      </motion.section>

      {/* Who We Are */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Who We Are</h3>
        <p>
          Kingdom Impact Coaching Academy (KICA), an initiative of{" "}
          <strong>CACYOF Akinyele Region</strong>, is committed to equipping
          young people to discover their God-given purpose and develop practical
          skills for a life of productivity, influence and impact, rooted in
          faith.
        </p>
        <p>
          We recognize the unique challenges today’s youth face – uncertainty
          about the future, pressure to succeed and the struggle to align faith
          with real-world demands. Whether you are in school, beginning your
          career or still discerning your path, KICA provides a supportive,
          faith-driven environment to help you gain clarity, build capacity and
          walk confidently in God’s plan for your life.
        </p>
      </motion.section>

      {/* Our Program */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Our Program</h3>
        <p>
          At Kingdom Impact Coaching Academy (KICA), we go beyond inspiration,
          we equip you with hands-on training and practical tools to thrive in
          every area of life. Our program empowers you to:
        </p>

        <div className={styles.cardsGrid}>
          <motion.div
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4>Discover</h4>
            <p>Identify your unique strengths and divine calling.</p>
          </motion.div>

          <motion.div
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4>Set Goals</h4>
            <p>Design meaningful goals and clear, actionable plans.</p>
          </motion.div>

          <motion.div
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4>Build Capacity</h4>
            <p>
              Gain resilience, leadership, and practical life skills rooted in
              faith.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutKICA;
