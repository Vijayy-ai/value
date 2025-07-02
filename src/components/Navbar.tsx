'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#002445] shadow-lg' : 'bg-transparent'}`}
            style={{ fontFamily: 'Calibri, sans-serif' }}
        >
            <div className="w-full px-4 md:px-12 lg:px-20">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Left Side */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="VALUE Logo"
                            width={120}
                            height={40}
                            className="h-12 w-auto"
                            priority
                        />
                    </Link>
                    {/* Nav Links - Center */}
                    <div className="flex-1 flex justify-center">
                        <div className="flex items-center space-x-10">
                            {['Home', 'About Us', 'Services', 'Our Team', 'Our Reach', 'Contact Us'].map((item, index) => {
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
                                            className="text-white hover:text-cyan-300 transition-colors duration-300 text-lg font-medium"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                    <Link
                        href="/login"
                        className="bg-cyan-400 text-[#002445] px-7 py-2.5 rounded-lg font-semibold text-lg shadow-md hover:bg-cyan-500 transition-colors"
                        style={{ 
                            minWidth: 100, 
                            textAlign: 'center',
                        }}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
