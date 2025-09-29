"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./animate.module.css";
import Link from "next/link";

const Animation = () => {
  return (
    <div className={styles.animationContainer}>
      <DotLottieReact
        src="https://lottie.host/289a1b25-e720-4990-9d94-62f3d2b7b5b6/MRPiskOIsm.lottie"
        loop
        autoplay
      />
      <h3>You have signed up successfully</h3>
      <Link href="./dashboard">

      <button>
        Proceed to dashboard
      </button>
      </Link>
    </div>
  );
};

export default Animation;
