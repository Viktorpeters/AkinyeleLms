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
  TextAlignStart,
  X,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Button2 from "./Button2";
import Option from "./Option"


const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Desktop states
  const [showCoursesDesktop, setShowCoursesDesktop] = useState(false);
  const [showProgramsDesktop, setShowProgramsDesktop] = useState(false);
  const [showGetInvolvedDesktop, setShowGetInvolvedDesktop] = useState(false);

  // Mobile states
  const [showCoursesMobile, setShowCoursesMobile] = useState(false);
  const [showProgramsMobile, setShowProgramsMobile] = useState(false);
  const [showGetInvolvedMobile, setShowGetInvolvedMobile] = useState(false);

  const coursesRef = useRef<HTMLLIElement>(null);
  const programsRef = useRef<HTMLLIElement>(null);
  const getInvolvedRef = useRef<HTMLLIElement>(null);

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
    //  { name: "Generational Impact Modules", icon: Globe },
      // { name: "Generational Impact Modules", icon: Globe },
  ];

  const programs = Array.from({ length: 10 }, (_, i) => ({
    name: `Program ${i + 1}`,
  }));

  const getInvolvedItems = [
    { name: "Support & Donate", href: "/support" },
    { name: "Partner With Us", href: "/partner" },
    { name: "Volunteer", href: "/volunteer" },
  ];

  // Close desktop dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node))
        setShowCoursesDesktop(false);
      if (programsRef.current && !programsRef.current.contains(e.target as Node))
        setShowProgramsDesktop(false);
      if (getInvolvedRef.current && !getInvolvedRef.current.contains(e.target as Node))
        setShowGetInvolvedDesktop(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      {/* Logo */}
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

      {/* Desktop Navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
        <ul className={styles.navList}>
          {/* Courses */}
          <li className={styles.dropdown} ref={coursesRef}>
            <button
              className={`${styles.dropdownTrigger} ${showCoursesDesktop ? styles.active : ""}`}
              aria-expanded={showCoursesDesktop}
              onClick={() => setShowCoursesDesktop(prev => !prev)}
            >
              Programs <ChevronDown className={styles.icon} />
            </button>
            {showCoursesDesktop && (
              <div className={styles.coursesDropdown}>
                <div className={styles.courseLogo}>
                  <Image
                    src="https://res.cloudinary.com/ddlnqthao/image/upload/v1758300104/WhatsApp_Image_2025-09-19_at_17.19.02_cb5c3139_jazl8s.jpg"
                    alt="Courses Logo"
                    width={90}
                    height={40}
                  />
                </div>
                <ul className={styles.courseList}>
                  {courses.map(({ name, icon: Icon }, i) => (
                    <li key={i}>
                      <Link href={`/Courses/${i}`}>
                        <Icon size={18} className={styles.courseIcon} />
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* About Us */}
          <li>
            <Link href="#about">About Us</Link>
          </li>

          {/* Mentorship */}
          <li>
            <Link href="/faq">Faq</Link>
          </li>

          {/* Get Involved */}
          <li className={styles.dropdownn} ref={getInvolvedRef}>
            <button
              className={`${styles.dropdownTriggerr} ${showGetInvolvedDesktop ? styles.active : ""}`}
              aria-expanded={showGetInvolvedDesktop}
              onClick={() => setShowGetInvolvedDesktop(prev => !prev)}
            >
              Get Involved <ChevronDown className={styles.icon} />
            </button>
            {showGetInvolvedDesktop && (
              <ul className={styles.dropdownMenuu}>
                {getInvolvedItems.map(({ name, href }, i) => (
                  <li key={i}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Actions */}
      <div className={styles.actions}>
        <Link href="/signin">
        {/* <button className={styles.primaryBtn}>Sign In</button> */}
        <Button2>Sign in</Button2>
        </Link>
        <Link href="/signup"><button className={styles.secondaryBtnn}>Join Now</button></Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className={styles.menu} onClick={() => setMobileNavOpen(true)}>
        <TextAlignStart size={24} />
      </div>

      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${mobileNavOpen ? styles.open : ""}`}>
        <div className={styles.mobileNavHeader}>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/ddlnqthao/image/upload/v1758300104/WhatsApp_Image_2025-09-19_at_17.19.02_cb5c3139_jazl8s.jpg"
              alt="logo"
              height={50}
              width={70}
            />
          </Link>
          <button className={styles.closeBtn} onClick={() => setMobileNavOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className={styles.mobileNavList}>
          {/* Courses */}
          <li>
            <button
              className={`${styles.mobileDropdownTrigger} ${showCoursesMobile ? styles.active : ""}`}
              onClick={() => {
                setShowCoursesMobile(prev => !prev);
                setShowProgramsMobile(false);
                setShowGetInvolvedMobile(false);
              }}
            >
              Programs
              <ChevronDown className={`${styles.chevron} ${showCoursesMobile ? styles.rotate : ""}`} />
            </button>
            {showCoursesMobile && (
              <ul className={styles.mobileDropdown}>
                {courses.map(({ name,  icon: Icon  }, i) => (
                  <li key={i}>
                       <Icon size={18} className={styles.courseIconn} />
                    <Link href={`/Courses/${i}`} onClick={() => setMobileNavOpen(false)}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>


          {/* Get Involved */}
          <li>
            <button
              className={`${styles.mobileDropdownTrigger} ${showGetInvolvedMobile ? styles.active : ""}`}
              onClick={() => {
                setShowGetInvolvedMobile(prev => !prev);
                setShowCoursesMobile(false);
                setShowProgramsMobile(false);
              }}
            >
              Get Involved
              <ChevronDown className={`${styles.chevron} ${showGetInvolvedMobile ? styles.rotate : ""}`} />
            </button>
            {showGetInvolvedMobile && (
              <ul className={styles.mobileDropdown}>
                {getInvolvedItems.map(({ name, href }, i) => (
                  <li key={i}>
                    <Link href={href} onClick={() => setMobileNavOpen(false)}>{name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Other Links */}
          <li><Link href="/">About Us</Link></li>
          <li><Link href="/faq">Faq</Link></li>

          {/* Buttons */}
          <li><Link href="/signin"><button className={styles.primaryBtn}>Sign In</button></Link></li>
          <li><Link href="/signup"><button className={styles.secondaryBtn}>Join Now</button></Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
