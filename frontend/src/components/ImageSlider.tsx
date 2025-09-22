"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Tilt from "react-parallax-tilt";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/WhatsApp_Image_2025-09-20_at_14.20.41_a1f2fd1f_x7sleg.jpg",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/WhatsApp_Image_2025-09-20_at_14.20.41_a1f2fd1f_x7sleg.jpg",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/WhatsApp_Image_2025-09-20_at_14.20.41_a1f2fd1f_x7sleg.jpg",
  "https://res.cloudinary.com/ddlnqthao/image/upload/v1758432626/WhatsApp_Image_2025-09-20_at_14.20.41_a1f2fd1f_x7sleg.jpg",
];

const ImageSlider = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Meet the Team</h1>

      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 }, // mobile
          1024: { slidesPerView: 3 }, // desktop
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className={styles.swipercontainer}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Tilt glareEnable={true} glareMaxOpacity={0.45} scale={1.05}>
              <div className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`Team member ${index + 1}`}
                  width={400}
                  height={400}
                  className={styles.image}
                />
              </div>
            </Tilt>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
