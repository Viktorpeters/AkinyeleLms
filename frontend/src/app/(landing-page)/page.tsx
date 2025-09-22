import React from 'react';
import Header from '@/components/Header';
import Hero from "@/components/Hero";
import Mission from '@/components/Mission';
import Vision from '@/components/Vision';
import AboutKICA from "@/components/AboutKICA";
import ImageSlider from '@/components/ImageSlider';
import CTACard from '../../components/CTACard';
import Footer from '@/components/Footer';
const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Mission />
      <Vision />
      <AboutKICA />
      <ImageSlider />
      <CTACard />
      {/* <Footer /> */}
    </div>
  )
}

export default page;