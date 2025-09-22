"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CTACard.module.css";

const images = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/46.jpg",
  "https://randomuser.me/api/portraits/men/47.jpg",
  "https://randomuser.me/api/portraits/women/48.jpg",
  "https://randomuser.me/api/portraits/men/49.jpg",
];

const CTACard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Ready to get started ?</h2>
      <p className={styles.text}>
        Register new and become the leader God created you to be. Your journey
        to purpose and impact starts.
      </p>

      <div className={styles.imageGroup}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={src}
              alt={`Person ${index + 1}`}
              width={50}
              height={50}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <Link href="/signup">
        <button className={styles.button}>Enrol today</button>
      </Link>
    </div>
  );
};

export default CTACard;
