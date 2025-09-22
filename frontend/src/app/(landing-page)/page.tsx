import React from 'react';
import Header from '@/components/Header';
import Hero from "@/components/Hero";
import Mission from '@/components/Mission';
import Vision from '@/components/Vision';
import AboutKICA from "@/components/AboutKICA"
const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Mission />
      <Vision />
      <AboutKICA />
    </div>
  )
}

export default page;