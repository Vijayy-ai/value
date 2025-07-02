'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="bg-[#002445] text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1 - About */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center text-[#002445] font-bold text-2xl">
                                T
                            </div>
                            <span className="text-2xl font-bold">TEST</span>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">
                            This is a test description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Test text for footer component.
                        </p>
                        
                        <div className="flex space-x-4 pt-4">
                            {['Test1', 'Test2', 'Test3', 'Test4'].map((social) => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 bg-gray-700 hover:bg-cyan-400 rounded-full flex items-center justify-center text-white hover:text-[#002445] transition-colors"
                                >
                                    {social[0]}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 2 - Services */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold mb-6">Test Services</h3>
                        <div className="space-y-3">
                            {[
                                "Test Service 1",
                                "Test Service 2",
                                "Test Service 3",
                                "Test Service 4",
                                "Test Service 5",
                                "Test Service 6"
                            ].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                                    viewport={{ once: true }}
                                >
                                    <Link 
                                        href="/services" 
                                        className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                                    >
                                        <span className="mr-2">→</span> {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 3 - Quick Links */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold mb-6">Test Links</h3>
                        <div className="space-y-3">
                            {[
                                { name: "Test Link 1", link: "/test-1" },
                                { name: "Test Link 2", link: "/test-2" },
                                { name: "Test Link 3", link: "/test-3" },
                                { name: "Test Link 4", link: "/test-4" },
                                { name: "Test Link 5", link: "/test-5" },
                                { name: "Test Link 6", link: "/test-6" }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                                    viewport={{ once: true }}
                                >
                                    <Link 
                                        href={item.link} 
                                        className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                                    >
                                        <span className="mr-2">→</span> {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 4 - Contact */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold mb-6">Test Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="text-cyan-400 mt-1">📍</div>
                                <p className="text-gray-300">123 Test Street, Test City, TS 12345</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="text-cyan-400 mt-1">📞</div>
                                <p className="text-gray-300">+1 (123) 456-7890</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="text-cyan-400 mt-1">✉️</div>
                                <p className="text-gray-300">test@example.com</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "#06b6d4" }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-cyan-400 text-[#002445] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                            >
                                Test Button
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-4 md:mb-0">
                        © {new Date().getFullYear()} TEST. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/test-1" className="text-gray-400 hover:text-cyan-400 transition-colors">
                            Test Policy
                        </Link>
                        <Link href="/test-2" className="text-gray-400 hover:text-cyan-400 transition-colors">
                            Test Terms
                        </Link>
                        <Link href="/test-3" className="text-gray-400 hover:text-cyan-400 transition-colors">
                            Test Map
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
