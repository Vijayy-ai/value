'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

interface RotatingCardProps {
  title: string;
  description: string;
  icon: string;
  bgClass: string;
}

export default function RotatingCard({ title, description, icon, bgClass }: RotatingCardProps) {
  const [hovered, setHovered] = useState(false);
  
  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform mouse position to rotation values
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate position from center of element
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Set values based on mouse position relative to center
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };
  
  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };
  
  return (
    <motion.div
      className="w-full h-full perspective-1000"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className={`w-full h-full rounded-2xl p-8 shadow-xl ${bgClass} transition-colors duration-300 ease-in-out`}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ velocity: 0 }}
      >
        <div className="relative h-full flex flex-col justify-between">
          {/* Icon */}
          <motion.div
            className="text-4xl mb-6"
            initial={{ y: 0 }}
            animate={{ y: hovered ? -10 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(40px)" }}
          >
            {icon}
          </motion.div>
          
          {/* Title */}
          <motion.h3
            className="text-xl font-bold mb-4 text-white"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
          >
            {title}
          </motion.h3>
          
          {/* Description */}
          <motion.p
            className="text-white/90 mb-4"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
          >
            {description}
          </motion.p>
          
          {/* Button */}
          <motion.button
            className="mt-auto bg-white/20 hover:bg-white/30 text-white py-2 px-6 rounded-full text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(70px)" }}
          >
            Learn More →
          </motion.button>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10"
            animate={{ scale: [1, 1.2, 1], rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
          />
          
          <motion.div
            className="absolute bottom-6 left-6 w-8 h-8 rounded-md bg-white/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
