'use client';
import { motion } from 'framer-motion';

const ServiceSection2 = () => {
  return (
    <section className="py-20 bg-[#001f3f]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-sm text-gray-400 uppercase"
            >
              Our Services
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-4xl font-bold text-white mt-2"
            >
              Lorem ipsum dolor sit amet,
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="my-6"
            >
              {/* Replace with an actual icon or image */}
              <div className="w-16 h-16 bg-cyan-400 rounded-lg"></div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="text-gray-300 mb-6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
            </motion.p>
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-cyan-400 font-semibold"
            >
              Learn more &rarr;
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-full h-96 bg-blue-900/30 rounded-lg flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-500/20 blur-2xl"></div>
            <h2 className="text-5xl font-bold text-white/80 text-center">Lorem ipsum dolor sit amet,</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection2;
