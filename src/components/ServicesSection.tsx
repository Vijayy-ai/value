'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ServicesSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-screen bg-white py-20 overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Our Services
              </p>
              <div className="w-12 h-1 bg-cyan-500"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Comprehensive
              <br />
              <span className="text-gray-900">Services for Your</span>
              <br />
              <span className="text-gray-900">Business</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              We offer a one-stop solution for all your business needs, from
              risk advisory to virtual CFO services. Explore our expertise across
              these key areas.
            </motion.p>

            {/* All Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#374151"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                ALL SERVICES
                <motion.svg
                  whileHover={{ x: 5 }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Triangle Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* Main Triangle Container */}
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
              
              {/* Animated Triangle - Anticlockwise Rotation */}
              <motion.div
                animate={{ 
                  rotate: -360 
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
              >
                <svg 
                  viewBox="0 0 400 400" 
                  className="w-full h-full drop-shadow-2xl"
                >
                  {/* Main Triangle */}
                  <motion.path
                    d="M200 50 L350 300 L50 300 Z"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="8"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Triangle Fill with Gradient */}
                  <defs>
                    <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#0891b2" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  
                  <motion.path
                    d="M200 50 L350 300 L50 300 Z"
                    fill="url(#triangleGradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Inner Triangle Lines */}
                  <motion.path
                    d="M200 120 L290 260 L110 260 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeOpacity="0.6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                    viewport={{ once: true }}
                  />
                </svg>
              </motion.div>

              {/* Floating Geometric Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -15 * (i + 1), 0],
                    x: [0, 8 * Math.cos(i), 0],
                    rotate: [0, 180 * (i % 2 === 0 ? 1 : -1), 0],
                    opacity: [0.4, 0.9, 0.4],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3 + i * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8
                  }}
                  className={`absolute ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg'}`}
                  style={{
                    top: `${15 + i * 12}%`,
                    left: `${-8 + i * 15}%`,
                    width: `${12 + i * 3}px`,
                    height: `${12 + i * 3}px`,
                    backgroundColor: i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#06b6d4' : '#0891b2',
                    opacity: 0.3 + i * 0.1
                  }}
                />
              ))}
              
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-cyan-200 rounded-full opacity-60"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-cyan-300 rounded-lg opacity-50"
              />
              
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/4 -right-12 w-8 h-8 bg-cyan-400 rounded-full opacity-40"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 360, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-32 h-32 bg-gray-100 rounded-full opacity-50"
      />
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -180, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-50 rounded-lg opacity-60"
      />
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-10 w-6 h-6 bg-cyan-200 rounded-full opacity-30"
      />
      
      {/* Additional floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -30 * (i + 1), 0],
            x: [0, 20 * Math.sin(i * 2), 0],
            rotate: [0, 360, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 8 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2
          }}
          className="absolute rounded-full bg-gradient-to-r from-cyan-200 to-blue-300"
          style={{
            top: `${20 + i * 15}%`,
            right: `${5 + i * 8}%`,
            width: `${6 + i * 2}px`,
            height: `${6 + i * 2}px`
          }}
        />
      ))}
    </section>
  );
};

export default ServicesSection;
