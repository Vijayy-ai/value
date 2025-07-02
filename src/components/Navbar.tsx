'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const menuItems = ['Home', 'About Us', 'Services', 'Our Team', 'Our Reach', 'Contact Us'];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#002445] shadow-lg' : 'bg-transparent'}`}
            style={{ fontFamily: 'Calibri, sans-serif' }}
        >
            <div className="w-full px-4 md:px-12 lg:px-20">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo - Left Side */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="VALUE Logo"
                            width={120}
                            height={40}
                            className="h-8 md:h-12 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav Links - Center */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="flex items-center space-x-8 xl:space-x-10">
                            {menuItems.map((item, index) => {
                                const href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
                                return (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        whileHover={{ y: -2 }}
                                    >
                                        <Link
                                            href={href}
                                            className="text-white hover:text-cyan-300 transition-colors duration-300 text-base xl:text-lg font-medium"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Desktop Login Button */}
                    <Link
                        href="/login"
                        className="hidden md:block bg-cyan-400 text-[#002445] px-4 md:px-7 py-2 md:py-2.5 rounded-lg font-semibold text-sm md:text-lg shadow-md hover:bg-cyan-500 transition-colors"
                    >
                        Login
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white p-2"
                        aria-label="Toggle mobile menu"
                    >
                        <motion.div
                            animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                            className="w-6 h-6 flex flex-col justify-center items-center"
                        >
                            <motion.span
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 6 : 0
                                }}
                                className="w-6 h-0.5 bg-white mb-1.5 block"
                            />
                            <motion.span
                                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                                className="w-6 h-0.5 bg-white mb-1.5 block"
                            />
                            <motion.span
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? -6 : 0
                                }}
                                className="w-6 h-0.5 bg-white block"
                            />
                        </motion.div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden overflow-hidden bg-[#002445]"
                >
                    <div className="py-4 space-y-2">
                        {menuItems.map((item, index) => {
                            const href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
                            return (
                                <motion.div
                                    key={item}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-4 py-3 text-white hover:text-cyan-300 hover:bg-[#003366] transition-colors duration-300 text-lg font-medium"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            );
                        })}
                        <div className="px-4 pt-4">
                            <Link
                                href="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center bg-cyan-400 text-[#002445] px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-cyan-500 transition-colors"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
