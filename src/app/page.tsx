"use client";
import AboutCompanyGallerySection from '../components/AboutCompanyGallerySection';
import WhatSetsUsApartModern from '../components/WhatSetsUsApartModern';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import MeetOurTeamSection from '../components/MeetOurTeamSection';

import { useState, useEffect } from 'react';
import HeroSectionUpdated from '../components/HeroSectionUpdated';
import ServicesSection from '../components/ServicesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyScroll from '../components/StickyScroll';


export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001122] via-[#002244] to-[#003366]">
      <Navbar />
      <HeroSectionUpdated />
      <ServicesSection />
      
      {/* Advanced Sticky Scroll Services Section - THEME */}
      <section className="bg-gradient-to-br from-[#002445] via-[#003366] to-[#014584] relative">
        <StickyScroll />
      </section>

      {/* Discover Who We Are Section - WHITE */}
      <AboutCompanyGallerySection />

      {/* What Sets Us Apart Section - MODERN */}
      <WhatSetsUsApartModern />
      <SuccessStoriesSection />
      <MeetOurTeamSection />
      <Footer />
    </div>
  );
}
