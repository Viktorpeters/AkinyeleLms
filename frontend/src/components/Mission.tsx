"use client";

import Image from "next/image";
import styles from "./Mission.module.css";

export default function MissionPage() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.floatingShapes}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.missionContent}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>Our Purpose</div>
            <h1 className={styles.mainTitle}>Our Mission</h1>
            <p className={styles.subtitle}>
              Empowering innovation and creating meaningful impact through
              dedication, excellence, and unwavering commitment to our values.
            </p>
          </div>

          {/* Mission Grid */}
          <div className={styles.missionGrid}>
            <div className={styles.ownerCard}>
              <div className={styles.cardInner}>
                <div className={styles.ownerImage}>
                  <Image
                    src="https://res.cloudinary.com/ddlnqthao/image/upload/v1758579221/WhatsApp_Image_2025-09-20_at_14.20.40_627555c4_kw37fz.jpg"
                    alt="Founder"
                    width={120}
                    height={120}
                  />
                </div>
                <h3 className={styles.ownerName}>John Doe</h3>
                <p className={styles.ownerTitle}>Founder & CEO</p>
              </div>
            </div>

            <div className={styles.missionText}>
              <p className={styles.missionStatement}>
                "We believe in the power of innovation to transform lives and
                create a better tomorrow for everyone."
              </p>
              <p className={styles.missionDetails}>
                Our mission is to deliver exceptional solutions that not only
                meet our clients' needs but exceed their expectations. We are
                committed to fostering a culture of creativity, integrity, and
                continuous improvement while maintaining the highest standards
                of quality and service.
              </p>
              <p className={styles.missionDetails}>
                Through strategic partnerships, cutting-edge technology, and a
                passionate team, we aim to be the catalyst for positive change
                in our industry and the communities we serve.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <h4 className={styles.valueTitle}>Excellence</h4>
              <p className={styles.valueDesc}>
                We strive for perfection in everything we do, setting the
                highest standards for our work.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h4 className={styles.valueTitle}>Integrity</h4>
              <p className={styles.valueDesc}>
                Honesty and transparency form the foundation of all our
                relationships and decisions.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h4 className={styles.valueTitle}>Innovation</h4>
              <p className={styles.valueDesc}>
                We embrace change and continuously seek new ways to improve and
                evolve.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h4 className={styles.valueTitle}>Impact</h4>
              <p className={styles.valueDesc}>
                We measure our success by the positive difference we make in
                people's lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
