import { motion } from 'framer-motion';

const avatars = [
  '/avatar1.png', '/avatar1.png', '/avatar1.png', '/avatar1.png', // Replace with your avatar images
];

const differentiators = [
  'A strong network of 250+ associates.',
  'A strong network of 250+ associates.',
  'A strong network of 250+ associates.',
  'A strong network of 250+ associates.',
];

// Hardcoded random positions for triangles (x, y, size)
const triangles = [
  { x: 40, y: 10, size: 24, rotate: 10 },
  { x: 120, y: 30, size: 18, rotate: -8 },
  { x: 200, y: 20, size: 20, rotate: 22 },
  { x: 80, y: 60, size: 16, rotate: -15 },
  { x: 160, y: 70, size: 22, rotate: 5 },
  { x: 60, y: 110, size: 20, rotate: 0 },
  { x: 180, y: 110, size: 18, rotate: -12 },
  { x: 100, y: 120, size: 14, rotate: 18 },
  { x: 220, y: 90, size: 16, rotate: 7 },
  { x: 30, y: 80, size: 18, rotate: -20 },
  { x: 140, y: 40, size: 14, rotate: 12 },
  { x: 200, y: 130, size: 20, rotate: -5 },
  { x: 120, y: 100, size: 16, rotate: 15 },
  { x: 170, y: 50, size: 18, rotate: -10 },
  { x: 60, y: 40, size: 16, rotate: 8 },
];

export default function WhatSetsUsApartModern() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0a3763] via-[#0e4a7b] to-[#0a3763] py-20 px-2 md:px-0 flex justify-center items-center relative overflow-hidden shadow-2xl">
      {/* Randomly scattered triangles above and in the middle of the section */}
      <svg
        className="absolute left-1/2 top-0 -translate-x-1/2 z-0 pointer-events-none select-none"
        width="260" height="170" viewBox="0 0 260 170" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minWidth: 260, minHeight: 170 }}
      >
        {triangles.map((t, i) => (
          <polygon
            key={i}
            points={`0,0 ${t.size},0 ${t.size / 2},${t.size * 0.85}`}
            fill="#1cc6e6"
            opacity={0.7}
            transform={`translate(${t.x},${t.y}) rotate(${t.rotate} ${t.size / 2} ${t.size * 0.4})`}
          />
        ))}
      </svg>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10 rounded-3xl bg-white/5 backdrop-blur-md shadow-2xl p-6 md:p-12">
        {/* Left Side */}
        <motion.div
          className="flex flex-col justify-center items-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Avatars */}
          <motion.div
            className="flex items-center mb-7"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {avatars.map((src, i) => (
              <motion.img
                key={src + i}
                src={src}
                alt={`avatar${i+1}`}
                className={`w-14 h-14 rounded-full border-2 border-white object-cover -ml-3 first:ml-0 shadow-xl ring-2 ring-cyan-400/40`}
                style={{ zIndex: 10 - i }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
            <motion.div
              className="w-14 h-14 rounded-full bg-white border-2 border-white flex items-center justify-center text-2xl font-bold text-gray-400 -ml-3 shadow-xl"
              style={{ zIndex: 5 }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: avatars.length * 0.1 }}
            >+
            </motion.div>
          </motion.div>
          <motion.div
            className="mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-white text-xl font-semibold underline underline-offset-4 cursor-pointer">We have 18k+ </span>
            <span className="text-white text-base font-normal">customers</span>
          </motion.div>
          <motion.p
            className="text-white text-base mb-10 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
          </motion.p>
          <motion.div
            className="flex items-center gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.07, backgroundColor: '#1cc6e6', color: '#0a3763', borderColor: '#1cc6e6' }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-white hover:text-[#0a3763] hover:border-cyan-400 transition-all duration-200 shadow-lg"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#1cc6e6', color: '#0a3763', borderColor: '#1cc6e6' }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-white text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:bg-white hover:text-[#0a3763] hover:border-cyan-400 transition-all duration-200 shadow-lg"
            >
              <span>&#8599;</span>
            </motion.button>
          </motion.div>
        </motion.div>
        {/* Right Side */}
        <motion.div
          className="flex flex-col justify-center items-start"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-gray-200 text-base mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >Our Differentiators</motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >What Sets Us Apart</motion.h2>
          <motion.p
            className="text-gray-200 text-base mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
          </motion.p>
          <motion.ul
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18 },
              },
            }}
          >
            {differentiators.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3 text-white text-lg bg-white/5 rounded-xl px-4 py-3 shadow-md"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1cc6e6" strokeWidth="2"/><circle cx="12" cy="12" r="3" fill="#1cc6e6"/><circle cx="6" cy="8" r="1.5" fill="#1cc6e6"/><circle cx="18" cy="8" r="1.5" fill="#1cc6e6"/><circle cx="6" cy="16" r="1.5" fill="#1cc6e6"/><circle cx="18" cy="16" r="1.5" fill="#1cc6e6"/></svg>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
} 