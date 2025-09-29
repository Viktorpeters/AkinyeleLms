import React from "react";
import AboutKICA from "@/components/AboutKICA";
import Mission from "@/components/Mission";
import CTACard from "@/components/CTACard";
import styles from "./aboutUs.module.css";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className={styles.aboutcont}>
      <Header />
      <AboutKICA />
      <Mission />
      <CTACard />
    </div>
  );
};

export default page;
