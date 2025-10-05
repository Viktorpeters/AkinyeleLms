"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CTACard.module.css";

const images = [
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758648758/dae2dfe1-2df7-4e99-88ec-f22878f93bda.png",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758648858/a4394b4c-4923-4a45-a3c0-64eb2c657d6d.png",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758648895/ff09095f-6697-4443-aa1b-ee21f609c435.png",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758648947/e6003b5a-5cb0-44c5-bdc5-4304ac9aaf6a.png",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758648991/804e5a59-7c80-4d6b-b6d3-fa848627de08.png",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758649028/5fb9afdf-5ef2-4764-8f5f-b0e622823ca0.png",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758649249/3907171a-24b5-46f3-b2c1-c20790e40c25.png",
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
        <button className={styles.button}>Enroll today</button>
      </Link>
    </div>
  );
};

export default CTACard;
