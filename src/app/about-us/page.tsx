'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const AboutUsPage = () => {
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

  const values = [
    {
      title: "Innovation",
      description: "Sample testing content for innovation value. This is placeholder text for testing purposes.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "Sample testing content for excellence value. This is placeholder text for testing purposes.",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "Sample testing content for integrity value. This is placeholder text for testing purposes.",
      icon: "🤝"
    },
    {
      title: "Partnership",
      description: "Sample testing content for partnership value. This is placeholder text for testing purposes.",
      icon: "🚀"
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "50+", label: "Countries Reached" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
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
            About <span className="text-cyan-400">VALUE</span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
          >
            Transforming businesses with innovative solutions, strategic insights, and unwavering commitment to excellence. We are your trusted partner in growth and success.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-400 text-[#002445] px-12 py-4 rounded-lg font-bold text-xl shadow-xl"
            >
              Discover Our Story
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
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
              top: `${20 + i * 10}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Purpose</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This is sample testing content for the about us page. This text is a placeholder.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-[#002445] to-[#014584] p-8 rounded-2xl text-white">
                <h3 className="text-3xl font-bold mb-4 text-cyan-400">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  Sample testing content for mission statement. This is placeholder text for testing purposes only.
                </p>
              </div>
              
              <div className="bg-cyan-50 p-8 rounded-2xl border-l-4 border-cyan-400">
                <h3 className="text-3xl font-bold mb-4 text-[#002445]">Our Vision</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  Sample testing content for vision statement. This is placeholder text for testing purposes only.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-cyan-200 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border-4 border-cyan-400 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#002445] mb-2">VALUE</div>
                    <div className="text-cyan-500 font-semibold">Transforming Tomorrow</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#002445] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
            <h2 className="text-5xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-xl text-cyan-200">Numbers that tell our story of success</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-6xl font-bold text-cyan-400 mb-4"
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl font-semibold text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              This is sample testing content for CTA section. This text is a placeholder for testing purposes only.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-400 text-[#002445] px-12 py-4 rounded-lg font-bold text-xl shadow-xl mr-6"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#002445] text-[#002445] px-12 py-4 rounded-lg font-bold text-xl hover:bg-[#002445] hover:text-white transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
