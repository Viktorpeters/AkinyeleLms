"use client";
import {
  ChevronDown,
  BookOpen,
  Brain,
  Target,
  Briefcase,
  Users,
  Mic,
  Heart,
  FlaskConical,
  Monitor,
  Menu,
  Globe,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [showCourses, setShowCourses] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const courses = [
    { name: "Spiritual Formation & Kingdom Identity", icon: BookOpen },
    { name: "Purpose Discovery & Life Mastery", icon: Target },
    { name: "Mindshift & Productivity Mastery", icon: Brain },
    { name: "Business, Career & Financial Intelligence", icon: Briefcase },
    { name: "Leadership & Capacity Building", icon: Users },
    { name: "Public Speaking & Influence", icon: Mic },
    { name: "Marriage & Relationship Intelligence", icon: Heart },
    { name: "Special Capacity-Building Labs", icon: FlaskConical },
    { name: "Digital Influence & Media Mastery", icon: Monitor },
    { name: "Generational Impact Modules", icon: Globe },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowCourses(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <li className={styles.dropdown} ref={dropdownRef}>
            <button
              className={`${styles.dropdownTrigger} ${
                showCourses ? styles.active : ""
              }`}
              aria-expanded={showCourses}
              onClick={() => setShowCourses(!showCourses)}
            >
              Courses <ChevronDown className={styles.icon} />
            </button>
            {showCourses && (
              <ul className={styles.dropdownMenu}>
                {courses.map(({ name, icon: Icon }, i) => (
                  <li key={i}>
                    <Link href={`/courses/${i}`}>
                      <Icon size={18} className={styles.courseIcon} />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link href="/">About Us</Link></li>
          <li><Link href="/">Program</Link></li>
          <li><Link href="/">Mentorship</Link></li>
          <li><Link href="/">Get Involved</Link></li>
        </ul>
      </nav>

      <div className={styles.actions}>
        <Link href="/"><button className={styles.primaryBtn}>Sign In</button></Link>
        <Link href="/"><button className={styles.secondaryBtn}>Join Now</button></Link>
      </div>

      <div className={styles.menu}>
         <Menu />
      </div>
    </header>
  );
};

export default Header;
