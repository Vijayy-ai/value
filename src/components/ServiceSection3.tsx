'use client';
import { motion } from 'framer-motion';

const services = [
  { title: 'Lorem ipsum dolor sit amet,', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.' },
  { title: 'Lorem ipsum dolor sit amet,', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.' },
  { title: 'Lorem ipsum dolor sit amet,', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.' },
  { title: 'Lorem ipsum dolor sit amet,', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.' },
];

const ServiceSection3 = () => {
  return (
    <section className="py-20 bg-[#001f3f]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="md:col-span-1">
            <motion.h3 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-sm text-gray-400 uppercase">Our Services</motion.h3>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-xl sm:text-2xl md:text-5xl font-bold text-white mt-4 break-words">Comprehensive Services for Your Business</motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-gray-300 mt-6 break-words text-sm md:text-base">We offer a one-stop solution for all your business needs, from risk advisory to virtual CFO services. Explore our expertise across these key areas</motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 bg-blue-800 text-white py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-blue-700">
              <span>ALL SERVICES</span>
              <span className="transform -rotate-45">&rarr;</span>
            </motion.button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                className="">
                <h3 className="text-sm text-gray-400 uppercase break-words">Our Services</h3>
                <h4 className="text-base md:text-xl font-semibold text-white mt-2 break-words">{service.title}</h4>
                <div className="w-12 h-12 bg-cyan-400 my-4 rounded-lg"></div>
                <p className="text-gray-300 break-words text-sm md:text-base">{service.description}</p>
                <a href="#" className="text-cyan-400 mt-4 inline-block">Learn more &rarr;</a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection3;
