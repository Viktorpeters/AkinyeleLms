"use client";

import { useEffect } from "react";
import styles from "./SpiritualFormation.module.css";
import { Fingerprint, ScanQrCode, Crown } from 'lucide-react';
export default function Page() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    links.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href")!);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add(styles.fadeIn);
      });
    }, observerOptions);

    document
      .querySelectorAll(".card, .step, .feature-item")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Spiritual Formation & Kingdom Identity</h1>
          <p className={styles.heroSubtitle}>
            Discover Your Divine Purpose • Build Kingdom Character • Transform
            Your World
          </p>
          <a href="#journey" className={styles.ctaButton}>
            Begin Your Journey
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <section className={styles.section} id="about">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Your Kingdom Identity Awaits
            </h2>
            <p className={styles.introText}>
              In a world full of voices telling you who to be, God has already
              declared who you are. You are not just a youth finding your
              way—you are a Kingdom citizen with divine DNA, called to impact
              your generation and transform communities through Christ.
            </p>

            <div className={styles.cardsGrid}>
              <div className="card">
                <div className={styles.cardIcon}> <Fingerprint size={20} /></div>
                <h3>Kingdom Identity</h3>
                <p>
                  Discover who you are in Christ beyond circumstances, opinions,
                  and temporary setbacks. Your identity is rooted in God's
                  unchanging love and purpose for your life.
                </p>
              </div>
              <div className="card">
                <div className={styles.cardIcon}> <ScanQrCode size={20} /></div>
                <h3>Spiritual Formation</h3>
                <p>
                  Develop spiritual disciplines and character that will sustain
                  you through every season. Build a relationship with God that
                  goes beyond Sunday services.
                </p>
              </div>
              <div className="card">
                <div className={styles.cardIcon}> <Crown size={20} /></div>
                <h3>Kingdom Mindset</h3>
                <p>
                  Think and operate from heaven's perspective. Learn to see
                  challenges as opportunities and setbacks as setups for God's
                  greater plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="journey">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Transformation Journey</h2>
            <p className={styles.introText}>
              Spiritual formation isn't a destination—it's a lifelong journey of
              becoming who God created you to be. Here's how we'll walk
              together:
            </p>

            <div className={styles.journeySteps}>
              <div className="step">
                <div className={styles.stepNumber}>1</div>
                <h3>Identity Discovery</h3>
                <p>
                  Uncover your true identity in Christ through Scripture,
                  prayer, and personal revelation.
                </p>
              </div>
              <div className="step">
                <div className={styles.stepNumber}>2</div>
                <h3>Character Building</h3>
                <p>
                  Develop the fruit of the Spirit and biblical character that
                  reflects Christ.
                </p>
              </div>
              <div className="step">
                <div className={styles.stepNumber}>3</div>
                <h3>Purpose Alignment</h3>
                <p>
                  Connect your gifts, passions, and calling with God's Kingdom
                  agenda.
                </p>
              </div>
              <div className="step">
                <div className={styles.stepNumber}>4</div>
                <h3>Kingdom Impact</h3>
                <p>
                  Step into your role as a Kingdom influencer. Learn to carry
                  God's presence into every sphere of society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What You'll Experience</h2>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}></div>
                <div>
                  <h3>Deep Scripture Study</h3>
                  <p>
                    Dive into God's Word to understand your identity, purpose,
                    and Kingdom inheritance.
                  </p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}></div>
                <div>
                  <h3>Prayer & Worship</h3>
                  <p>
                    Develop intimacy with God through authentic prayer and
                    spirit-led worship.
                  </p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}></div>
                <div>
                  <h3>Character Development</h3>
                  <p>
                    Build integrity, wisdom, and Christ-like character through
                    biblical principles.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}></div>
                <div>
                  <h3>Community Fellowship</h3>
                  <p>
                    Connect with like-minded believers who will challenge,
                    encourage, and support your growth.
                  </p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}></div>
                <div>
                  <h3>Mentorship</h3>
                  <p>
                    Receive guidance from mature believers who have walked the
                    path of spiritual formation.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}></div>
                <div>
                  <h3>Practical Application</h3>
                  <p>
                    Learn to live out Kingdom principles in school, work,
                    relationships, and daily life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Discover Your Kingdom Identity?</h2>
          <p>
            Don't wait for tomorrow to become who God created you to be today.
          </p>
          <div className={styles.ctaButtons}>
            <a href="#" className={styles.btnPrimary}>
              Join KICA Today
            </a>
            <a href="#" className={styles.btnSecondary}>
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
