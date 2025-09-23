"use client";
import React from "react";
import styles from "./Vision.module.css";
import {
  BookOpen,
  Lightbulb,
  Users,
  Globe,
  Rocket,
} from "lucide-react";

const visions = [
  {
    title: "Empower Lifelong Learning",
    desc: "We create an environment where curiosity drives knowledge and personal growth never ends.",
    icon: BookOpen,
  },
  {
    title: "Innovative Thinking",
    desc: "We inspire learners to embrace creativity and challenge the boundaries of possibility.",
    icon: Lightbulb,
  },
  {
    title: "Build Communities",
    desc: "We foster connections, collaboration, and shared learning experiences across diverse groups.",
    icon: Users,
  },
  // {
  //   title: "Global Reach",
  //   desc: "Our vision is to impact learners across the globe with accessible and transformative education.",
  //   icon: Globe,
  // },
  {
    title: "Launch Future Leaders",
    desc: "We equip individuals with the knowledge, skills, and character to lead in every sphere.",
    icon: Rocket,
  },
];

const Vision = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Vision</h2>
      <p className={styles.subtitle}>
        We exist to redefine learning and empower the next generation through knowledge, creativity, and purpose.
      </p>

      <div className={styles.visionGrid}>
        {visions.map(({ title, desc, icon: Icon }, i) => (
          <div
            className={`${styles.visionCard}`}
            style={{ animationDelay: `${i * 0.2}s` }}
            key={i}
          >
            <div className={styles.iconWrapper}>
              <Icon className={styles.icon} size={32} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
