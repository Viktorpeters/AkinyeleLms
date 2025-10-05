"use client";

import { useEffect, useState } from "react";
import styles from "./SpiritualFormation.module.css";
import {
  Fingerprint,
  Scan,
  Crown,
  BookOpen,
  HeartHandshake,
  Users,
  MapPin,
  Sparkles,
} from "lucide-react";

/**
 * Notes:
 * - I keep some lightweight global class names (e.g. "card", "step", "feature-item")
 *   so the IntersectionObserver can select them reliably.
 * - The layout uses a sticky aside on desktop and a collapsible toc on mobile.
 */

export default function Page() {
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    // smooth scroll for internal anchors
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    links.forEach((anchor) => {
      const handler = (e: Event) => {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (!href) return;
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      anchor.addEventListener("click", handler);
    });

    // reveal on scroll
    const observerOptions = { threshold: 0.12, rootMargin: "0px 0px -80px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add(styles.fadeIn);
      });
    }, observerOptions);

    document.querySelectorAll(".card, .step, .feature-item, .accordion-item").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.pageWrap} style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>Spiritual Formation & Kingdom Identity</h1>
            <p className={styles.subtitle}>
              Knowing God Intimately • Walking in Sonship & Ambassadorship • Living
              with Kingdom Authority
            </p>
            <div className={styles.heroCtas}>
              <a className={styles.primaryCta} href="#overview">Start the Journey</a>
              <button className={styles.ghostCta} onClick={() => {
                document.getElementById("signup")?.scrollIntoView({behavior: "smooth"});
              }}>Join KICA</button>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <Fingerprint size={24} />
              <div>
                <h4>Course Focus</h4>
                <p>Identity • Gifts • Marketplace Impact</p>
              </div>
            </div>

            <ul className={styles.heroCardList}>
              <li>Prayer, Fasting & Word Depth</li>
              <li>Prophetic Guidance & Direction</li>
              <li>Spiritual Gifts & Marketplace Relevance</li>
            </ul>
            <div className={styles.smallNote}>Mobile-ready • Mentorship • Community</div>
          </div>
        </div>
      </header>

      {/* WRAPPER */}
      <div className={styles.contentWrapper}>
        {/* ASIDE / TOC */}
        <aside className={styles.aside}>
          <div className={styles.toc}>
            <div className={styles.tocHeader}>
              <h3>On This Page</h3>
              <button
                className={styles.tocToggle}
                onClick={() => setTocOpen((s) => !s)}
                aria-expanded={tocOpen}
                aria-label="Toggle table of contents"
              >
                {tocOpen ? "Hide" : "Contents"}
              </button>
            </div>

            <nav className={`${styles.tocNav} ${tocOpen ? styles.open : ""}`}>
              <a href="#overview">Overview</a>
              <a href="#knowing-god">Knowing God Intimately</a>
              <a href="#devotion">Cultivating Devotion</a>
              <a href="#kingdom-dynamics">Kingdom Dynamics</a>
              <a href="#prayer">Prayer, Fasting & Word</a>
              <a href="#prophetic">Prophetic Guidance</a>
              <a href="#gifts">Spiritual Gifts & Marketplace</a>
              <a href="#mindset">Growth, Faith & Abundance</a>
              <a href="#ambassadors">Ambassadors of Heaven</a>
              <a href="#discipleship">Discipleship & Evangelism</a>
              <a href="#paradigms">Paradigms for Kingdom Exploits</a>
              <a href="#signup" className={styles.tocSignup}>Join KICA</a>
            </nav>
          </div>
        </aside>

        {/* MAIN */}
        <main className={styles.main}>
          {/* Overview */}
          <section className={`${styles.section} card`} id="overview" aria-labelledby="overviewTitle">
            <h2 id="overviewTitle" className={styles.sectionTitle}>Overview</h2>
            <p className={styles.lead}>
              This formation pathway is designed to deepen your intimacy with God,
              clarify your Kingdom identity, and equip you with practical tools to
              carry God’s presence into every sphere — church, marketplace, family,
              and community.
            </p>

            <div className={styles.grid3}>
              <article className="card">
                <div className={styles.iconWrap}><Fingerprint /></div>
                <h3>Identity in Sonship</h3>
                <p>Walk secure in who you are in Christ — loved, authorized, and sent.</p>
              </article>

              <article className="card">
                <div className={styles.iconWrap}><Crown /></div>
                <h3>Kingdom Authority</h3>
                <p>Understand authority, dominion, and how to steward influence well.</p>
              </article>

              <article className="card">
                <div className={styles.iconWrap}><BookOpen /></div>
                <h3>Practical Formation</h3>
                <p>Disciplines, mentoring, and community-based growth to maintain progress.</p>
              </article>
            </div>
          </section>

          {/* Knowing God */}
          <section className={`${styles.section} step`} id="knowing-god">
            <div className={styles.sectionGrid}>
              <div>
                <h2 className={styles.sectionTitle}>Knowing God Intimately</h2>
                <p>
                  Walking in sonship and ambassadorship begins with knowing God. This
                  module teaches relational theology — not just information — so you
                  can hear God's voice and obey with confidence.
                </p>

                <ul className={styles.bullets}>
                  <li>Hearing God's voice — daily practises</li>
                  <li>Understanding sonship vs. religious identity</li>
                  <li>Practices for sustained intimacy</li>
                </ul>
              </div>

              <aside className={styles.smallPanel}>
                <h4>Quick Tools</h4>
                <p>Journal prompts • Prayer templates • 30-day devotion plan</p>
                <a className={styles.smallAction} href="#devotion">Get the plan →</a>
              </aside>
            </div>
          </section>

          {/* Cultivating devotion */}
          <section className={`${styles.section} card`} id="devotion">
            <h2 className={styles.sectionTitle}>Cultivating Personal Devotion</h2>
            <p>
              Devotion rhythms keep your heart aligned with God. Learn simple, repeatable
              devotion structures that fit real-life schedules: morning, midday, and evening.
            </p>

            <div className={styles.featureList}>
              <div className="feature-item">
                <div className={styles.featureIcon}><HeartHandshake /></div>
                <div>
                  <h4>Daily Rhythm</h4>
                  <p>Short focused times with Scripture + prayer to maintain closeness</p>
                </div>
              </div>

              <div className="feature-item">
                <div className={styles.featureIcon}><BookOpen /></div>
                <div>
                  <h4>Word Depth</h4>
                  <p>How to study scripture for revelation, not just information</p>
                </div>
              </div>

              <div className="feature-item">
                <div className={styles.featureIcon}><Users /></div>
                <div>
                  <h4>Accountability</h4>
                  <p>Small groups and mentors who hold practical spiritual formation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Kingdom Dynamics */}
          <section className={`${styles.section} step`} id="kingdom-dynamics">
            <h2 className={styles.sectionTitle}>Kingdom Dynamics: Authority, Purpose & Dominion</h2>
            <p>
              Learn the biblical framework for authority and purpose — what dominion looks like
              in everyday decision-making and community leadership.
            </p>

            <div className={styles.cardGrid}>
              <div className="card">
                <h4>Authority</h4>
                <p>Right use of spiritual authority — humility + responsibility.</p>
              </div>
              <div className="card">
                <h4>Purpose</h4>
                <p>Aligning gifts and calling with God’s agenda for influence.</p>
              </div>
              <div className="card">
                <h4>Dominion</h4>
                <p>Practical steps to steward resources, relationships, and opportunities.</p>
              </div>
            </div>
          </section>

          {/* Prayer, Fasting & Word */}
          <section className={`${styles.section} card`} id="prayer">
            <h2 className={styles.sectionTitle}>Prayer, Fasting & Word Depth for Kingdom Exploits</h2>
            <p>
              Enter strategic seasons of prayer and fasting combined with focused scriptural study
              to unlock breakthrough and spiritual sensitivity for Kingdom exploits.
            </p>

            <div className={styles.grid2}>
              <article className="card">
                <h4>Prayer Strategies</h4>
                <p>Intercession patterns for individuals and teams.</p>
              </article>
              <article className="card">
                <h4>Fasting</h4>
                <p>Types of fasts, safety guidelines, and spiritual outcomes.</p>
              </article>
            </div>
          </section>

          {/* Prophetic guidance */}
          <section className={`${styles.section} step`} id="prophetic">
            <h2 className={styles.sectionTitle}>Prophetic Guidance & Divine Direction</h2>
            <p>
              Build capacity to expect, test, and steward prophetic words. We teach responsible
              prophetic process and mentoring for healthy expression.
            </p>

            <div className={styles.accordion}>
              <div className={`${styles.accordionItem} accordion-item`}>
                <button className={styles.accordionButton}>How to Test a Word</button>
                <div className={styles.accordionPanel}>
                  <p>Measure prophecy against Scripture, community, and fruit. Process leads to maturity.</p>
                </div>
              </div>

              <div className={`${styles.accordionItem} accordion-item`}>
                <button className={styles.accordionButton}>Mentoring for Prophetic Life</button>
                <div className={styles.accordionPanel}>
                  <p>Pair with experienced leaders for interpretation and practical steps.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Spiritual Gifts */}
          <section className={`${styles.section} card`} id="gifts">
            <h2 className={styles.sectionTitle}>Spiritual Gifts, Ministry & Marketplace Relevance</h2>
            <p>
              Discover and activate gifting with practical application in ministry and professional life.
            </p>

            <div className={styles.giftsGrid}>
              <div className="card">
                <h4>Assessment & Discovery</h4>
                <p>Guided exercises to identify gifting.</p>
              </div>
              <div className="card">
                <h4>Activation Labs</h4>
                <p>Hands-on ministry labs to practice gifting safely.</p>
              </div>
              <div className="card">
                <h4>Marketplace Relevance</h4>
                <p>Translating calling into vocation and influence.</p>
              </div>
            </div>
          </section>

          {/* Mindset */}
          <section className={`${styles.section} step`} id="mindset">
            <h2 className={styles.sectionTitle}>Developing a Growth, Faith & Abundance Mindset</h2>
            <p>
              Theology that empowers — how to cultivate a Kingdom mindset that sees opportunities
              where others see obstacles.
            </p>
            <ul className={styles.bullets}>
              <li>Daily habits that form resilience</li>
              <li>Financial stewardship as Kingdom practice</li>
              <li>Faith-building testimonies and exercises</li>
            </ul>
          </section>

          {/* Ambassadors */}
          <section className={`${styles.section} card`} id="ambassadors">
            <h2 className={styles.sectionTitle}>Ambassadors of Heaven (Kingdom Representation)</h2>
            <p>
              Practical training for representing Heaven's values in the marketplace, civic spaces,
              and family systems.
            </p>

            <div className={styles.cardGrid}>
              <div className="card">
                <h4>Public Witness</h4>
                <p>Evangelism with cultural sensitivity and strategic thinking.</p>
              </div>
              <div className="card">
                <h4>Influence</h4>
                <p>How to become a trusted voice in your sphere.</p>
              </div>
            </div>
          </section>

          {/* Discipleship */}
          <section className={`${styles.section} card`} id="discipleship">
            <h2 className={styles.sectionTitle}>Discipleship, Evangelism & Soul-winning Strategies</h2>
            <p>
              Practical methods to make disciples, mobilize teams, and sustain evangelistic momentum.
            </p>
          </section>

          {/* Paradigms */}
          <section className={`${styles.section} card`} id="paradigms">
            <h2 className={styles.sectionTitle}>Paradigms for Kingdom Exploits</h2>
            <p>
              Shifts in thinking and practice that produce consistent breakthrough and seasonal exploits
              for Kingdom expansion.
            </p>
            <div className={styles.featureList}>
              <div className="feature-item">
                <div className={styles.featureIcon}><Sparkles /></div>
                <div>
                  <h4>Win-Win Stewardship</h4>
                  <p>Generosity and multiplication in practice.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className={styles.featureIcon}><MapPin /></div>
                <div>
                  <h4>Contextual Strategy</h4>
                  <p>Tailoring mission to your community and workplace.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Signup CTA */}
          <section className={styles.cta} id="signup" aria-labelledby="signupTitle">
            <div>
              <h2 id="signupTitle">Ready to Step In?</h2>
              <p>Join a cohort, access mentorship, and begin a pathway toward Kingdom impact.</p>
              <div className={styles.ctaActions}>
                <a className={styles.primaryCta} href="#">Apply Now</a>
                <a className={styles.ghostCta} href="#">Contact Admissions</a>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <small>© {new Date().getFullYear()} KINGDOM IMPACT AND COACHING ACADEMY (KICA)</small>
          </footer>
        </main>
      </div>
    </div>
  );
}
