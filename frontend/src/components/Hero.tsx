"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

const slides = [
  {
    video:
      "https://res.cloudinary.com/ddlnqthao/video/upload/v1758382338/WhatsApp_Video_2025-09-20_at_14.20.13_6ff877dd_aowkka.mp4",
    title: "Discover Your God-Given Purpose",
    subtitle:
      "At KICA, we help young people uncover their unique assignment, build confidence, and step boldly into their destiny.",
    cta: "Get started",
    link: "#get-started",
  },
  {
    video:
      "https://res.cloudinary.com/ddlnqthao/video/upload/v1758383534/WhatsApp_Video_2025-09-20_at_14.20.13_abd9fabc_cn9sqq.mp4",
    title: "Grow Spiritually, Lead Powerfully",
    subtitle:
      "Through deep spiritual formation and mentorship, you will cultivate intimacy with God and develop the authority to influence your world.",
    cta: "Get started",
    link: "#get-started",
  },
  {
    video:
      "https://res.cloudinary.com/ddlnqthao/video/upload/v1758384010/WhatsApp_Video_2025-09-20_at_14.20.44_77b48677_ya2vxm.mp4",
    title: "Master Productivity & Mindset",
    subtitle:
      "Break free from procrastination, renew your mind, and build daily habits that position you for excellence and impact.",
    cta: "Get started",
    link: "#get-started",
  },
  {
    video:
      "https://res.cloudinary.com/ddlnqthao/video/upload/v1758384216/WhatsApp_Video_2025-09-20_at_14.20.37_572958cb_c3zywb.mp4",
    title: "Thrive in Business and Career",
    subtitle:
      "Learn financial intelligence, entrepreneurship, and career pathways that align with Kingdom values and long-term success.",
    cta: "Get started",
    link: "#get-started",
  },
  {
    video:
      "https://res.cloudinary.com/ddlnqthao/video/upload/v1758384343/WhatsApp_Video_2025-09-20_at_14.20.23_5184bb4f_zlldzx.mp4",
    title: "Develop Leadership & Influence",
    subtitle:
      "Gain the skills to lead with vision, communicate with confidence, and create meaningful change in your community.",
    cta: "Get started",
    link: "#get-started",
  },
  {
    video:
      "https://res.cloudinary.com/ddlnqthao/video/upload/v1758383534/WhatsApp_Video_2025-09-20_at_14.20.13_abd9fabc_cn9sqq.mp4",
    title: "Transform Communities, Impact Generations",
    subtitle:
      "Beyond personal growth, KICA equips you to serve, inspire, and bring transformation to society as a Kingdom ambassador.",
    cta: "Get started",
    link: "#get-started",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.8,
          ease: "power3.inOut",
        }
      );

      gsap.fromTo(
        [titleRef.current, subtitleRef.current, ctaRef.current],
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          delay: 0.6,
        }
      );
    });

    return () => ctx.revert();
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // every 10s
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video
          key={slide.video}
          ref={videoRef}
          className={styles.bgvideo}
          src={slide.video}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2 ref={titleRef} className={styles.headline}>
          {slide.title}
        </h2>
        <p ref={subtitleRef} className={styles.subhead}>
          {slide.subtitle}
        </p>
        <div className={styles.ctaWrapper}>
          <a ref={ctaRef} href={slide.link} className={styles.btn}>
            {slide.cta}
          </a>

          <div className={styles.avatars}>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="user"
            />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user"
            />
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="user"
            />
            <img
              src="https://randomuser.me/api/portraits/men/12.jpg"
              alt="user"
            />
            <img
              src="https://randomuser.me/api/portraits/men/52.jpg"
              alt="user"
            />
            <img
              src="https://randomuser.me/api/portraits/women/24.jpg"
              alt="user"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
