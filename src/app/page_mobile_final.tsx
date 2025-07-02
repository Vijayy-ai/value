'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroSectionUpdated from '../components/HeroSectionUpdated';
import ServicesSection from '../components/ServicesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyScroll from '../components/StickyScroll';
import ParticleCanvas from '../components/ParticleCanvas';
import RotatingCard from '../components/RotatingCard';

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

      {/* Discover Who We Are Section - WHITE - MOBILE RESPONSIVE */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-gray-50 to-cyan-50 relative overflow-hidden">
        <ParticleCanvas />
        
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.05, 0.1, 0.05],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-5 left-5 md:top-10 md:left-10 w-40 h-40 md:w-80 md:h-80 border-2 border-cyan-400 rounded-full"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2], 
              opacity: [0.03, 0.08, 0.03],
              rotate: [360, 0, 360]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-5 right-5 md:bottom-10 md:right-10 w-32 h-32 md:w-60 md:h-60 border-2 border-cyan-300 rounded-full"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 md:px-8 py-2 md:py-3 mb-6 md:mb-8"
            >
              <span className="text-cyan-700 font-bold text-xs md:text-sm uppercase tracking-wide">About Our Company</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight px-2">
              Discover Who <span className="text-cyan-600">We Are</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4 md:mb-6 px-2">
              Founded in 2015, Value Consultancy Services started with a simple vision: to help businesses unlock their true potential through innovative solutions and strategic insights. Today, we&apos;re proud to be a trusted partner to companies worldwide.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#06b6d4", boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:mt-8 bg-cyan-600 border-2 border-cyan-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-cyan-700 hover:border-cyan-700 transition-all duration-300 shadow-2xl"
            >
              Learn More About Us →
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: "📊", desc: "Successfully delivered projects" },
              { number: "50+", label: "Countries Served", icon: "🌍", desc: "Global presence worldwide" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐", desc: "Happy clients rating" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-cyan-400/30 relative overflow-hidden group shadow-xl"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <motion.div 
                  className="text-3xl md:text-4xl mb-3 md:mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-600 mb-2 md:mb-3 relative"
                >
                  {stat.number}
                </motion.div>
                <div className="text-base md:text-lg lg:text-xl text-gray-800 font-bold relative mb-1">{stat.label}</div>
                <div className="text-sm md:text-base text-gray-600 relative">{stat.desc}</div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-3 md:top-4 right-3 md:right-4 w-4 md:w-6 h-4 md:h-6 border-t-2 border-r-2 border-cyan-400/60" />
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 w-4 md:w-6 h-4 md:h-6 border-b-2 border-l-2 border-cyan-400/60" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach CTA - MOBILE RESPONSIVE */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#001122] via-[#002445] to-[#003366] text-white relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8"
            >
              <span className="text-cyan-400 font-semibold text-xs md:text-sm uppercase tracking-wide">Let&apos;s Connect</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight px-2">
              Let&apos;s Work <span className="text-cyan-400">Together</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto px-2">
              Ready to embark on your transformation journey? Our team of experts is here to guide you every step of the way. Let&apos;s discuss how we can help you achieve your business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-2">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#06b6d4", boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-400 text-gray-900 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-2xl transition-all duration-300 w-full sm:w-auto"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#06b6d4", color: "#1f2937" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 w-full sm:w-auto"
              >
                Schedule Consultation
              </motion.button>
            </div>
            
            {/* Contact stats - mobile responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
              {[
                { icon: "📞", label: "24/7 Support", value: "Always Available" },
                { icon: "⚡", label: "Quick Response", value: "< 2 Hours" },
                { icon: "🌍", label: "Global Reach", value: "50+ Countries" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">{item.icon}</div>
                  <div className="text-base md:text-lg font-semibold text-white mb-1">{item.label}</div>
                  <div className="text-cyan-400 font-medium text-sm md:text-base">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
