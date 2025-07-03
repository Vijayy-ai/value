
"use client";
import RotatingCard from '../components/RotatingCard';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroSectionUpdated from '../components/HeroSectionUpdated';
import ServicesSection from '../components/ServicesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyScroll from '../components/StickyScroll';
import ParticleCanvas from '../components/ParticleCanvas';


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

      {/* What Sets Us Apart Section - THEME */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#0066aa] via-[#004477] to-[#002445] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_#06b6d4_2px,_transparent_2px)] bg-[length:30px_30px] md:bg-[length:60px_60px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-4 md:px-8 py-2 md:py-3 mb-6 md:mb-8"
            >
              <span className="text-cyan-300 font-bold text-xs md:text-sm uppercase tracking-wide">Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-200 mb-4 md:mb-6 px-2">
              What Sets <span className="text-cyan-400">Us Apart</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-cyan-100 max-w-3xl mx-auto px-2">
              Our unique combination of expertise, innovation, and dedication makes us the ideal partner for your business transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "🎯",
                title: "Extensive Network",
                description: "Access to 500+ industry partners",
                bgClass: "bg-gradient-to-br from-cyan-500 to-blue-600"
              },
              {
                icon: "🔬",
                title: "Research Driven",
                description: "Data-backed approach to solutions",
                bgClass: "bg-gradient-to-br from-purple-500 to-indigo-600"
              },
              {
                icon: "⚡",
                title: "Rapid Deployment",
                description: "Quick implementation of strategies",
                bgClass: "bg-gradient-to-br from-amber-500 to-orange-600"
              },
              {
                icon: "🌟",
                title: "Excellence",
                description: "Commitment to quality in every project",
                bgClass: "bg-gradient-to-br from-green-500 to-emerald-600"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-[200px] sm:h-[220px] md:h-[250px]"
              >
                <RotatingCard 
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  bgClass={item.bgClass}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Analytics Section - DISABLED */}
      {/* <section className="py-20 bg-gradient-to-br from-[#002445] via-[#003366] to-[#004477] relative overflow-hidden">
        Chart Analytics Section content removed
      </section> */}

      {/* Team Section - WHITE & THEME COLORS */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-gray-50 to-cyan-50 relative overflow-hidden">
        {/* Enhanced Background decorative elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 md:top-20 left-5 md:left-10 w-20 md:w-40 h-20 md:h-40 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 30, 0],
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 25, repeat: Infinity, delay: 5 }}
            className="absolute bottom-16 md:bottom-32 right-10 md:right-20 w-16 md:w-32 h-16 md:h-32 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 30, repeat: Infinity, delay: 10 }}
            className="absolute top-1/2 left-1/4 w-12 md:w-24 h-12 md:h-24 bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-lg"
          />
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
              className="absolute w-2 h-2 bg-cyan-400/50 rounded-full"
              style={{
                top: `${20 + (i % 3) * 30}%`,
                left: `${10 + (i % 4) * 25}%`,
              }}
            />
          ))}
          
          {/* Geometric shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-cyan-400/40 rounded-lg"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/3 w-12 h-12 border-2 border-blue-400/40 rounded-full"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              {/* Team Photo Placeholder */}
              <div className="relative bg-gradient-to-br from-cyan-100 to-blue-100 backdrop-blur-sm rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] shadow-2xl border border-cyan-300">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-blue-200/30"
                />
                
                {/* Main content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <motion.div 
                      className="text-4xl sm:text-6xl lg:text-8xl mb-4 lg:mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      👥
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 lg:mb-4">Our Amazing Team</h3>
                    <p className="text-gray-600 text-base lg:text-lg">Passionate professionals driving success</p>
                  </div>
                </div>
                
                {/* Team member avatars */}
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 flex space-x-2 lg:space-x-3">
                  {[
                    { name: 'Alice', color: 'bg-cyan-500' },
                    { name: 'Bob', color: 'bg-blue-500' },
                    { name: 'Carol', color: 'bg-cyan-600' },
                    { name: 'David', color: 'bg-blue-600' }
                  ].map((member, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                      whileHover={{ scale: 1.2, y: -15 }}
                      className={`w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 ${member.color} rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-lg shadow-lg cursor-pointer`}
                    >
                      {member.name[0]}
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute top-4 lg:top-6 right-4 lg:right-6 w-12 lg:w-16 h-12 lg:h-16 border-4 border-cyan-400/50 rounded-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 md:px-8 py-2 md:py-3 mb-6 md:mb-8"
              >
                <span className="text-cyan-700 font-bold text-xs md:text-sm uppercase tracking-wide">Our Team</span>
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
                The Minds Behind <span className="text-cyan-600">Our Success</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Sample testing content for team section. This is placeholder text for testing purposes only.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  { icon: "🎯", text: "Experienced leadership across all domains", color: "bg-cyan-100 border-cyan-300" },
                  { icon: "🤝", text: "Collaborative approach to problem-solving", color: "bg-blue-100 border-blue-300" },
                  { icon: "📈", text: "Continuous learning and development culture", color: "bg-cyan-100 border-cyan-300" }
                ].map((point, index) => (
                  <motion.div
                    key={point.text}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-3 md:space-x-4 p-3 md:p-4 ${point.color} backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 border`}
                  >
                    <div className="text-xl md:text-2xl flex-shrink-0">{point.icon}</div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{point.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#0891b2", boxShadow: "0 25px 50px rgba(8, 145, 178, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-600 border-2 border-cyan-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-cyan-700 hover:border-cyan-700 transition-all duration-300 shadow-2xl"
              >
                Meet Our Team →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Reach CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#001122] via-[#002445] to-[#003366] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />
          
          {/* Floating geometric shapes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.sin(i) * 50, 0],
                y: [0, Math.cos(i) * 30, 0],
                rotate: [0, 360, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 2
              }}
              className="absolute w-8 md:w-16 h-8 md:h-16 border-2 border-cyan-400/30 rounded-lg"
              style={{
                top: `${20 + i * 12}%`,
                left: `${15 + i * 14}%`,
              }}
            />
          ))}
        </div>

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
                className="bg-cyan-400 text-gray-900 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-2xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#06b6d4", color: "#1f2937" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
            
            {/* Contact stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
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
                  className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
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

      {/* Subscribe Newsletter Section - WHITE */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-white via-gray-50 to-cyan-50 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          {/* Animated gradient waves */}
          <motion.div
            animate={{ 
              scaleX: [1, 1.5, 1],
              scaleY: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-16 md:h-32 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 transform -skew-y-1"
          />
          <motion.div
            animate={{ 
              scaleX: [1.2, 1, 1.2],
              scaleY: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 3 }}
            className="absolute bottom-0 right-0 w-full h-12 md:h-24 bg-gradient-to-l from-blue-200/30 to-cyan-200/30 transform skew-y-1"
          />
          
          {/* Floating elements */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.sin(i) * 30, 0],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 360, 0]
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
              className="absolute"
              style={{
                top: `${10 + (i % 5) * 20}%`,
                left: `${5 + (i % 3) * 35}%`,
              }}
            >
              {i % 3 === 0 ? (
                <div className="w-2 md:w-3 h-2 md:h-3 bg-cyan-400/50 rounded-full" />
              ) : i % 3 === 1 ? (
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-400/50 rounded-full" />
              ) : (
                <div className="w-1 h-1 bg-cyan-300/50 rounded-full" />
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="bg-gradient-to-r from-white to-cyan-50 rounded-2xl md:rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl border border-cyan-200"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-0 right-0 w-40 md:w-80 h-40 md:h-80 bg-cyan-400/20 rounded-full -mr-20 md:-mr-40 -mt-20 md:-mt-40"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                  opacity: [0.08, 0.15, 0.08]
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-purple-400/20 rounded-full -ml-16 md:-ml-32 -mb-16 md:-mb-32"
              />
              
              {/* Decorative dots */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  className="absolute w-2 md:w-3 h-2 md:h-3 bg-cyan-400/40 rounded-full"
                  style={{
                    top: `${10 + (i % 4) * 25}%`,
                    left: `${10 + Math.floor(i / 4) * 30}%`,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-block bg-cyan-500/20 border border-cyan-500/30 rounded-full px-4 md:px-6 py-1.5 md:py-2 mb-4 md:mb-6">
                      <span className="text-cyan-700 font-semibold text-xs md:text-sm uppercase tracking-wide">Newsletter</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
                      Stay Updated with Our <span className="text-cyan-600">Newsletter</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-0 leading-relaxed">
                      Sample testing content for newsletter section. This is placeholder text for testing purposes only.
                    </p>
                  </motion.div>
                </div>
                
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="bg-gradient-to-br from-white to-cyan-50/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-cyan-300 shadow-xl relative overflow-hidden group"
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Sparkle effect */}
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute top-3 md:top-4 right-3 md:right-4 w-5 md:w-6 h-5 md:h-6 text-cyan-400"
                    >
                      ✨
                    </motion.div>
                    
                    <div className="relative z-10">
                      <motion.form 
                        className="space-y-3 md:space-y-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div>
                          <motion.input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all duration-300 text-sm md:text-base"
                            whileFocus={{ scale: 1.02, boxShadow: "0 10px 25px rgba(6, 182, 212, 0.2)" }}
                          />
                        </div>
                        
                        <motion.button
                          whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: "#06b6d4",
                            boxShadow: "0 15px 30px rgba(6, 182, 212, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-cyan-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-cyan-700 transition-all duration-300 relative overflow-hidden group"
                        >
                          <motion.span
                            className="relative z-10"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            Subscribe Now →
                          </motion.span>
                          {/* Button shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                          />
                        </motion.button>
                      </motion.form>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-xs md:text-sm mt-3 md:mt-4 text-center"
                      >
                        🔒 We respect your privacy. No spam, ever.
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
