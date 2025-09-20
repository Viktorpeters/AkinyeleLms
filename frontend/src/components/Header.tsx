"use client";
import { ChevronUp, ChevronDown } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/ddlnqthao/image/upload/v1758300104/WhatsApp_Image_2025-09-19_at_17.19.02_cb5c3139_jazl8s.jpg"
            alt="Church logo"
            height={50}
            width={70}
            priority
          />
        </Link>
      </div>
      {/* Navigation */}
   <nav className={styles.nav} aria-label="Main navigation">
  <ul className={styles.navList}>
    <li>
      <Link href="/">
        Home <ChevronDown className={styles.icon} />
      </Link>
    </li>
    <li>
      <Link href="/about">
        About Us <ChevronDown className={styles.icon} />
      </Link>
    </li>
    <li>
      <Link href="/events">
        Events <ChevronDown className={styles.icon} />
      </Link>
    </li>
    <li>
      <Link href="/pastors">
        Our Pastors <ChevronDown className={styles.icon} />
      </Link>
    </li>
    <li>
      <Link href="/campaigns">
        Campaigns <ChevronDown className={styles.icon} />
      </Link>
    </li>
    <li>
      <Link href="/sermons">
        Sermons <ChevronDown className={styles.icon} />
      </Link>
    </li>
  </ul>
</nav>


      <div className={styles.actions}>
        <Link href="/get-started">
          <button className={styles.primaryBtn}>Get Started</button>
        </Link>
        <Link href="/signin">
          <button className={styles.secondaryBtn}>Sign In</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
