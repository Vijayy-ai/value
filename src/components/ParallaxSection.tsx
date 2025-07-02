'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0]);
  
  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-gradient-to-b from-[#002445] to-gray-900">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center"
        style={{ y: y3, scale, opacity }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-black/60"
        style={{ opacity }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
        <motion.div style={{ y: y1 }} className="mb-8">
          <h4 className="text-cyan-400 font-semibold text-xl mb-4">DISCOVER OUR IMPACT</h4>
          <h2 className="text-6xl font-bold text-white mb-8">
            Transforming Businesses <br /> Across the Globe
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl">
            From startup ventures to Fortune 500 companies, our consultancy services have helped transform businesses and drive unprecedented growth across industries and continents.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ y: y2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "250+", label: "Clients Worldwide" },
            { number: "95%", label: "Success Rate" },
            { number: "10+ Years", label: "Industry Experience" }
          ].map((stat) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center"
            >
              <motion.div 
                className="text-4xl font-bold text-cyan-400 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
