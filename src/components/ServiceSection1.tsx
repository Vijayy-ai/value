'use client';
import { motion } from 'framer-motion';

const ServiceSection1 = () => {
  return (
    <section className="py-20 bg-[#001f3f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white">...TO MAKE LIFE BETTER</h2>
        </motion.div>
        <div className="flex justify-center space-x-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#003366] rounded-full w-64 h-64 flex items-center justify-center text-center p-6"
          >
            <p className="text-white text-lg">Navigate innovative products and services into the European market</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#003366] rounded-full w-64 h-64 flex items-center justify-center text-center p-6"
          >
            <p className="text-white text-lg">Accelerate the transformation of the healthcare system</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#003366] rounded-full w-64 h-64 flex items-center justify-center text-center p-6"
          >
            <p className="text-white text-lg">Shape Germany as an outstanding place for research</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection1;
