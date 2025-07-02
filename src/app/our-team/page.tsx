'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const OurTeamPage = () => {
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

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      description: "Sample testing content for CEO position. This is placeholder text for testing purposes.",
      image: "/team1.jpg",
      skills: ["Leadership", "Strategy", "Innovation"]
    },
    {
      name: "Michael Chen",
      position: "CTO",
      description: "Sample testing content for CTO position. This is placeholder text for testing purposes.",
      image: "/team2.jpg",
      skills: ["Technology", "AI/ML", "Digital Strategy"]
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Operations",
      description: "Sample testing content for Operations position. This is placeholder text for testing purposes.",
      image: "/team3.jpg",
      skills: ["Operations", "Project Management", "Quality Assurance"]
    },
    {
      name: "David Kumar",
      position: "Lead Consultant",
      description: "Sample testing content for Lead Consultant position. This is placeholder text for testing purposes.",
      image: "/team4.jpg",
      skills: ["Consulting", "Analytics", "Business Intelligence"]
    },
    {
      name: "Lisa Thompson",
      position: "Creative Director",
      description: "Sample testing content for Creative Director position. This is placeholder text for testing purposes.",
      image: "/team5.jpg",
      skills: ["Design", "Branding", "User Experience"]
    },
    {
      name: "Robert Wilson",
      position: "Finance Director",
      description: "Sample testing content for Finance Director position. This is placeholder text for testing purposes.",
      image: "/team6.jpg",
      skills: ["Finance", "Strategy", "Risk Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-cyan-50">
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
            Our <span className="text-cyan-400">Team</span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
          >
            Meet the brilliant minds behind VALUE&apos;s success. Our diverse team of experts brings together decades of experience and innovative thinking.
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
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
              left: `${10 + i * 12}%`,
            }}
          />
        ))}
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#002445] to-cyan-600 bg-clip-text text-transparent mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Exceptional leaders driving innovation and excellence across all our initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-cyan-100"
              >
                <div className="relative h-64 bg-gradient-to-br from-[#002445] via-cyan-600 to-blue-500 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-white/10 opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl font-bold text-[#002445] shadow-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
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
                      className="absolute w-2 h-2 bg-white/80 rounded-full"
                      style={{
                        top: `${60 + i * 5}%`,
                        left: `${20 + i * 15}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#002445] to-cyan-600 bg-clip-text text-transparent mb-2">{member.name}</h3>
                  <div className="text-cyan-600 font-semibold mb-4">{member.position}</div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{member.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium border border-cyan-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#002445] to-cyan-600 bg-clip-text text-transparent mb-6">Our Culture</h2>
            <p className="text-xl text-gray-700">What makes VALUE a great place to work</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation First", description: "We encourage creative thinking and breakthrough solutions", icon: "💡" },
              { title: "Collaborative Spirit", description: "Teamwork and mutual support drive our success", icon: "🤝" },
              { title: "Continuous Learning", description: "We invest in growth and development of our team", icon: "📚" },
              { title: "Work-Life Balance", description: "Flexible working arrangements for optimal productivity", icon: "⚖️" },
              { title: "Diversity & Inclusion", description: "Celebrating different perspectives and backgrounds", icon: "🌍" },
              { title: "Excellence Recognition", description: "Acknowledging and rewarding outstanding performance", icon: "🏆" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center border border-cyan-100 hover:border-cyan-200 transition-all duration-300"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="text-5xl mb-4"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#002445] to-cyan-600 bg-clip-text text-transparent mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-[#002445] via-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8">Join Our Team</h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Ready to be part of something extraordinary? We&apos;re always looking for talented individuals who share our passion for excellence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#002445" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#002445] px-12 py-4 rounded-lg font-bold text-xl shadow-xl mr-6 hover:shadow-2xl transition-all duration-300"
            >
              View Open Positions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#002445" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-[#002445] transition-all duration-300"
            >
              Contact HR
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;
