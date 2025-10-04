import React, { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import AboutKICA from "@/components/AboutKICA";
import ImageSlider from "@/components/ImageSlider";
import CTACard from "@/components/CTACard";
import Footer from "@/components/Footer";
import OurPrograms from "@/components/OurPrograms";
import LoadingAnimation from "@/components/LoadingAnimation";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<LoadingAnimation />}>
        <Hero />
      </Suspense>
        <OurPrograms />
        <Vision />
        <ImageSlider />
        <CTACard />
        {/* <LoadingAnimation /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
