"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import styles from "./ImageSlider.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/WhatsApp_Image_2025-09-20_at_14.20.41_a1f2fd1f_x7sleg.jpg",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758578812/image_mmvjus.png",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758579221/WhatsApp_Image_2025-09-20_at_14.20.40_627555c4_kw37fz.jpg",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758579290/WhatsApp_Image_2025-09-20_at_14.20.45_341d4a17_w8uryn.jpg",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758579354/WhatsApp_Image_2025-09-20_at_14.21.24_b1dbfcd3_vrpr1b.jpg",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758579449/WhatsApp_Image_2025-09-20_at_14.22.29_5bf69c9d_gla76i.jpg",
  // "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/img7.jpg",
  // "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/img8.jpg",
  // "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/img9.jpg",
  // "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/img10.jpg",
  // "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/img11.jpg",
  // "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/img12.jpg",
  // "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/img13.jpg",
  // "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/img14.jpg",
  // "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/img15.jpg",
];


export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const touchStartX = useRef<number | null>(null);

  const total = images.length;

  // Responsive slidesPerView
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1400) setSlidesPerView(5);
      else if (w >= 1024) setSlidesPerView(4);
      else if (w >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goTo = (i: number) => {
    if (i < 0) i = 0;
    if (i > total - slidesPerView) i = total - slidesPerView;
    setIndex(i);
  };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prev();
    if (diff < -50) next();
    touchStartX.current = null;
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Meet the Team</h2>

      <div
        className={styles.slider}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.track}
          style={{ transform: `translateX(-${(index * 100) / slidesPerView}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={styles.slide}
              style={{ flex: `0 0 ${100 / slidesPerView}%` }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={300}
              >
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  width={400}
                  height={400}
                  className={styles.image}
                  unoptimized
                />
              </Tilt>
            </div>
          ))}
        </div>

        {/* Nav buttons */}
        <button
          className={`${styles.navButton} ${styles.left}`}
          onClick={prev}
          disabled={index === 0}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          className={`${styles.navButton} ${styles.right}`}
          onClick={next}
          disabled={index >= total - slidesPerView}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {Array.from({ length: total - slidesPerView + 1 }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
