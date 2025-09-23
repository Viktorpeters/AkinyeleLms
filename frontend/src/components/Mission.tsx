import React from "react";
import Image from "next/image";
import styles from "./Mission.module.css";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

const Mission = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Our Mission</h1>

      <div className={styles.mission}>
        {/* Texts */}
        <div className={styles.missionTexts}>
          <h3>Our Missions</h3>
          <p>
            Our mission is to empower youth through practical training,
            intentional mentorship and spiritual growth opportunities, equipping
            them to discover purpose, develop godly character, and emerge as
            Kingdom-focused leaders who make lasting impact.
          </p>

          {/* <button  className={styles.ctaBtn}>View Program  <ChevronsRight size={24} /></button> */}
          <Link href="/Courses/page">
            <button className={styles.ctaBtn}>
              View Program <ChevronsRight size={24} />
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/WhatsApp_Image_2025-09-20_at_14.20.41_a1f2fd1f_x7sleg.jpg"
            height={400}
            width={350}
            alt="Mission Illustration"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
