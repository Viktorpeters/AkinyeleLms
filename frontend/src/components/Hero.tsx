"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

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

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Animate fade in/out on slide chang
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      [titleRef.current, subtitleRef.current, ctaRef.current],
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    return () => {
      tl.kill();
    };
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video
          key={slide.video}
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
        <div className={styles.ctaWrapper} ref={ctaRef}>
          <Link href="/signup">
            <Button />
          </Link>

          <div className={styles.avatars}>
            {[
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/68.jpg",
              "https://randomuser.me/api/portraits/men/12.jpg",
              "https://randomuser.me/api/portraits/men/52.jpg",
              "https://randomuser.me/api/portraits/women/24.jpg",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="user"
                width={40}
                height={40}
                className={styles.avatarImg}
              />
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.navBtn}
            onClick={() =>
              setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
            }
          >
            <ChevronLeft />
          </button>
          <button
            className={styles.navBtn}
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          >
            <ChevronRight />
          </button>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${((current + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
