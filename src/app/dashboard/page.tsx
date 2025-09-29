"use client";

import { useEffect, useState } from "react";
import { Clock, Loader2 } from "lucide-react";
import styles from "./dashboard.module.css";

const quotes = [
  "Great things take time. Sit tight! ✨",
  "Your journey is just beginning 🚀",
  "Excellence is built with patience ⏳",
  "Stay ready, your time is near 🔑",
];

interface PendingPageProps {
  name?: string;
}

export default function PendingPage({ name = "Student" }: PendingPageProps) {
  const [quote, setQuote] = useState(quotes[0]);
  const [loading, setLoading] = useState(true);

  // cycle quotes every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // mock "check status" every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Checking status..."); // later replace with real API call
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>LMS</h2>
        <ul>
          <li className={styles.active}>Profile</li>
          <li className={styles.pending}>Pending Registration</li>
        </ul>
      </aside>

      {/* Main */}
      <main className={styles.main}>
        <h1 className={styles.fadeIn}>Welcome, {name} 👋</h1>

        <div className={`${styles.card} ${styles.animateIn}`}>
          <div className={styles.iconWrapper}>
            {loading ? (
              <Loader2 size={56} className={styles.spin} />
            ) : (
              <Clock size={56} className={styles.pulse} />
            )}
          </div>

          <h2>Your registration is under review</h2>
          <p>
            Thank you for signing up! Our team is reviewing your application.
            You’ll be notified via email once a decision has been made.
          </p>

          <div className={styles.quoteBox}>
            <em>{quote}</em>
          </div>
        </div>
      </main>
    </div>
  );
}
