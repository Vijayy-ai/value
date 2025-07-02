'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function OurReachPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const regions = [
    {
      name: "North America",
      countries: ["Test Country 1", "Test Country 2", "Test Country 3"],
      offices: 10,
      clients: 400,
      color: "from-blue-500 to-cyan-500",
      icon: "🇺🇸"
    },
    {
      name: "Europe",
      countries: ["Test Country 4", "Test Country 5", "Test Country 6", "Test Country 7"],
      offices: 8,
      clients: 300,
      color: "from-purple-500 to-blue-500",
      icon: "🇪🇺"
    },
    {
      name: "Asia Pacific",
      countries: ["Test Country 8", "Test Country 9", "Test Country 10", "Test Country 11"],
      offices: 15,
      clients: 600,
      color: "from-green-500 to-teal-500",
      icon: "🌏"
    },
    {
      name: "Middle East & Africa",
      countries: ["Test Country 12", "Test Country 13", "Test Country 14"],
      offices: 5,
      clients: 200,
      color: "from-yellow-500 to-orange-500",
      icon: "🌍"
    }
  ];

  const milestones = [
    { year: "2015", event: "Test Event 1", description: "Sample description for test event 1. This is placeholder text for testing purposes." },
    { year: "2017", event: "Test Event 2", description: "Sample description for test event 2. This is placeholder text for testing purposes." },
    { year: "2019", event: "Test Event 3", description: "Sample description for test event 3. This is placeholder text for testing purposes." },
    { year: "2021", event: "Test Event 4", description: "Sample description for test event 4. This is placeholder text for testing purposes." },
    { year: "2023", event: "Test Event 5", description: "Sample description for test event 5. This is placeholder text for testing purposes." },
    { year: "2024", event: "Test Event 6", description: "Sample description for test event 6. This is placeholder text for testing purposes." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-[#002445] to-[#014584] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-96 h-96 bg-cyan-400 rounded-full opacity-10"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-300 rounded-full opacity-10"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center text-white max-w-6xl mx-auto px-6"
        >
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold mb-8"
          >
            Our <span className="text-cyan-400">Global Reach</span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
          >
            Connecting businesses globally. This is sample testing content for hero section.
          </motion.p>
        </motion.div>

        {/* Animated World Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-4 h-4 bg-cyan-400 rounded-full"
            style={{
              top: `${20 + i * 6}%`,
              left: `${10 + i * 8}%`,
            }}
          />
        ))}
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-500 font-semibold text-lg">OUR GLOBAL FOOTPRINT</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices across four continents, we bring local expertise and global perspective to every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`relative h-48 bg-gradient-to-br ${region.color} overflow-hidden`}>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute inset-0 flex items-center justify-center text-6xl"
                  >
                    {region.icon}
                  </motion.div>
                  
                  {/* Animated particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                      style={{
                        top: `${60 + i * 5}%`,
                        left: `${20 + i * 15}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#002445] mb-4">{region.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Offices:</span>
                      <span className="font-semibold text-[#002445]">{region.offices}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Clients:</span>
                      <span className="font-semibold text-[#002445]">{region.clients}+</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm text-gray-500 mb-2">Key Markets:</div>
                    <div className="flex flex-wrap gap-1">
                      {region.countries.map((country, countryIndex) => (
                        <motion.span
                          key={country}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: countryIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-cyan-50 text-cyan-600 px-2 py-1 rounded text-xs"
                        >
                          {country}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#002445] to-[#014584]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-300 font-semibold text-lg uppercase tracking-wider">OUR IMPACT</span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-6">By the Numbers</h2>
            <p className="text-xl text-cyan-200">Our global impact in numbers</p>
          </motion.div>

          {/* 3D Isometric Stats Grid */}
          <div className="relative mb-16 hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-12 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-md"
            ></motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0 mx-auto w-full max-w-4xl flex justify-between px-6"
            >
              {['North America', 'Europe', 'Asia Pacific', 'Middle East'].map((region, index) => (
                <motion.div
                  key={region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-cyan-300 font-medium"
                >
                  {region}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "41+", label: "Offices Worldwide", icon: "🏢" },
              { number: "1,690+", label: "Global Clients", icon: "🤝" },
              { number: "25+", label: "Countries", icon: "🌍" },
              { number: "500+", label: "Team Members", icon: "👥" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Circular background */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute inset-0 m-auto w-32 h-32 bg-cyan-400/10 rounded-full"
                />
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-4xl mb-4 relative z-10"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-5xl font-bold text-cyan-400 mb-4 relative z-10"
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl font-semibold text-white relative z-10">{stat.label}</div>
                
                {/* Floating elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                      opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: "easeInOut"
                    }}
                    className="absolute w-2 h-2 bg-cyan-300 rounded-full"
                    style={{
                      top: `${30 + i * 20}%`,
                      right: `${30 + i * 15}%`,
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones in our global expansion</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-400"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-xl shadow-lg"
                    >
                      <div className="text-2xl font-bold text-cyan-500 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#002445] mb-3">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-white shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Ready to Go Global?</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Partner with us to expand your business. This is sample testing content for call-to-action section.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-400 text-[#002445] px-12 py-4 rounded-lg font-bold text-xl shadow-xl mr-6"
            >
              Explore Opportunities
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#002445] text-[#002445] px-12 py-4 rounded-lg font-bold text-xl hover:bg-[#002445] hover:text-white transition-colors"
            >
              Contact Local Office
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#002445] to-[#014584] rounded-2xl p-12 relative overflow-hidden">
            {/* Background Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 rounded-full -mr-20 -mt-20 opacity-20"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [0, -5, 0],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-300 rounded-full -ml-10 -mb-10 opacity-20"
            />
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Global Insights Newsletter
                    </h2>
                    <p className="text-cyan-200 mb-0">
                      Sample testing content for newsletter section. This is placeholder text for testing purposes only.
                    </p>
                  </motion.div>
                </div>
                
                <div className="md:col-span-2">
                  <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2"
                  >
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "#06b6d4" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-cyan-400 text-[#002445] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all whitespace-nowrap"
                    >
                      Subscribe Now
                    </motion.button>
                  </motion.form>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-sm mt-3"
                  >
                    We respect your privacy. Unsubscribe anytime.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};
