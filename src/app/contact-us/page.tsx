'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const ContactUsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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

  const contactInfo = [
    {
      title: "Global Headquarters",
      address: "Sample address for testing purposes. This is placeholder text.",
      phone: "+1 (555) 000-0000",
      email: "test@example.com",
      icon: "🏢"
    },
    {
      title: "European Office",
      address: "Sample address for Europe. This is placeholder text for testing purposes.",
      phone: "+44 20 0000 0000",
      email: "europe-test@example.com",
      icon: "🇪🇺"
    },
    {
      title: "Asia Pacific",
      address: "Sample address for Asia Pacific. This is placeholder text for testing purposes.",
      phone: "+65 0000 0000",
      email: "apac-test@example.com",
      icon: "🌏"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
            Let&apos;s <span className="text-cyan-400">Connect</span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
          >
            Ready to transform your business? Get in touch with our experts and discover how we can help you achieve extraordinary results.
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        {[...Array(10)].map((_, i) => (
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
              top: `${20 + i * 8}%`,
              left: `${10 + i * 9}%`,
            }}
          />
        ))}
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      placeholder="john@company.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    placeholder="Your Company Name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
                    placeholder="Tell us about your project or how we can help..."
                    required
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, backgroundColor: "#06b6d4" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-cyan-400 text-[#002445] py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="text-3xl"
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-[#002445] mb-3">{info.title}</h3>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-center space-x-2">
                          <span>📍</span>
                          <span>{info.address}</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span>📞</span>
                          <span>{info.phone}</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span>✉️</span>
                          <span>{info.email}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#002445] to-[#014584] p-6 rounded-xl text-white"
              >
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
                    <motion.button
                      key={social}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-cyan-400 text-[#002445] rounded-full flex items-center justify-center font-bold hover:bg-cyan-300 transition-colors"
                    >
                      {social[0]}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Find Us Worldwide</h2>
            <p className="text-xl text-gray-600">Visit any of our global offices</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-96 bg-gradient-to-br from-[#002445] to-[#014584] rounded-2xl overflow-hidden"
          >
            {/* Simulated World Map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold mb-2">Interactive Map Coming Soon</h3>
                <p className="text-cyan-200">Explore our global office locations</p>
              </div>
            </div>

            {/* Animated pins for office locations */}
            {[
              { top: '40%', left: '20%', label: 'Silicon Valley' },
              { top: '35%', left: '50%', label: 'London' },
              { top: '60%', left: '75%', label: 'Singapore' },
              { top: '45%', left: '55%', label: 'Dubai' }
            ].map((pin, index) => (
              <motion.div
                key={pin.label}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
                className="absolute w-4 h-4 bg-cyan-400 rounded-full"
                style={{ top: pin.top, left: pin.left }}
                title={pin.label}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
