import React from 'react';
import Header from '@/components/Header';
import Hero from "@/components/Hero";
import Mission from '@/components/Mission';
import Vision from '@/components/Vision';
import AboutKICA from "@/components/AboutKICA";
import ImageSlider from '@/components/ImageSlider';
import CTACard from '../../components/CTACard';
import Footer from '@/components/Footer';
import OurPrograms from '@/components/OurPrograms';
import { Suspense } from 'react';
import LoadingAnimation from '@/components/LoadingAnimation';
const page = () => {
  return (
    <div>
      {/* <Suspense fallback={<LoadingAnimation />}> */}

      {/* <Header /> */}
      <Hero />
      <OurPrograms />
      {/* <Mission /> */}
      <Vision />
      {/* <AboutKICA /> */}
      <ImageSlider />
      <CTACard />
      {/* </Suspense> */}
      {/* <Footer /> */}
    </div>
  )
}

export default page;


// import { Suspense, lazy } from "react";
// import LoadingAnimation from "@/components/LoadingAnimation";

// const Hero = lazy(() => import("@/components/Hero"));
// const OurPrograms = lazy(() => import("@/components/OurPrograms"));
// const Vision = lazy(() => import("@/components/Vision"));
// const ImageSlider = lazy(() => import("@/components/ImageSlider"));
// const CTACard = lazy(() => import("@/components/CTACard"));

// export default function Page() {
//   return (
//     <div>
//       <Suspense fallback={<LoadingAnimation />}>
//         <Hero />
//         <OurPrograms />
//         <Vision />
//         <ImageSlider />
//         <CTACard />
//       </Suspense>
//     </div>
//   );
// }
