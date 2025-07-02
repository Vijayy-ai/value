'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const MuteIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
    </svg>
);

const UnmuteIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
);

const HeroSectionUpdated = () => {
    const [mounted, setMounted] = useState(false);
    const [showVideo, setShowVideo] = useState(true);
    const [showTransition, setShowTransition] = useState(false);
    const [showHero, setShowHero] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const handleVideoEnd = () => {
        setShowVideo(false);
        setShowTransition(true);
        setTimeout(() => {
            setShowTransition(false);
            setShowHero(true);
        }, 3000); // Reduced from 6000 to 3000 for faster transition
    };

    const handleSkip = () => {
        setShowVideo(false);
        setShowTransition(true);
        setTimeout(() => {
            setShowTransition(false);
            setShowHero(true);
        }, 3000); // Reduced from 6000 to 3000 for faster transition
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const { currentTime, duration } = videoRef.current;
            if (duration - currentTime <= 3) {
                handleVideoEnd();
                videoRef.current.ontimeupdate = null;
            }
        }
    };

    const toggleMute = () => setIsMuted(!isMuted);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {showVideo && (
                    <motion.section
                        key="video"
                        className="relative h-screen w-full bg-black"
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        <video
                            ref={videoRef}
                            autoPlay
                            muted={isMuted}
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={handleVideoEnd}
                            src="/intro.mp4"
                            className="absolute w-full h-full object-cover"
                        />
                        <button
                            onClick={toggleMute}
                            className="absolute bottom-5 left-5 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full text-lg hover:bg-white/30 transition-all duration-300"
                        >
                            {isMuted ? <MuteIcon /> : <UnmuteIcon />}
                        </button>
                        <button
                            onClick={handleSkip}
                            className="absolute bottom-5 right-5 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-[17px] hover:bg-white/30 transition-all duration-300"
                        >
                            Skip Intro
                        </button>
                    </motion.section>
                )}

                {showTransition && (
                    <motion.section
                        key="transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative h-screen w-full bg-gradient-to-br from-[#002445] to-[#014584] flex items-center justify-center overflow-hidden"
                    >
                        {/* Simplified elegant transition with light beams */}
                        <motion.div 
                            className="absolute inset-0 w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {/* Light rays */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={`ray-${i}`}
                                    className="absolute origin-center"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        width: '2px',
                                        height: '0%',
                                        background: 'linear-gradient(to top, transparent, rgba(6, 182, 212, 0.8), transparent)',
                                        transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                                    }}
                                    initial={{ height: '0%', opacity: 0 }}
                                    animate={{ height: '200%', opacity: [0, 0.8, 0] }}
                                    transition={{ 
                                        duration: 2.5, 
                                        delay: i * 0.1,
                                        ease: 'easeOut'
                                    }}
                                />
                            ))}

                            {/* Expanding circle */}
                            <motion.div
                                className="absolute left-1/2 top-1/2 rounded-full bg-cyan-400/20"
                                style={{ 
                                    width: '10px',
                                    height: '10px',
                                    transform: 'translate(-50%, -50%)',
                                    boxShadow: '0 0 30px 10px rgba(6, 182, 212, 0.3)'
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ 
                                    scale: [0, 15, 30],
                                    opacity: [0, 0.5, 0]
                                }}
                                transition={{ 
                                    duration: 2.5,
                                    ease: 'easeOut'
                                }}
                            />
                        </motion.div>

                        {/* Main text animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center z-10 px-6"
                            style={{
                                textShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
                            }}
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="block"
                            >
                                We help you grow.
                            </motion.span>
                        </motion.div>
                    </motion.section>
                )}

                {showHero && (
                    <motion.section
                        key="hero"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative h-screen w-full bg-gradient-to-br from-[#002445] to-[#014584] overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rotate-45" />
                            <div className="absolute bottom-32 right-20 w-24 h-24 border border-white/20 rotate-12" />
                            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rotate-45" />
                        </div>
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -20 * (i + 1), 0],
                                    x: [0, 10 * Math.sin(i), 0],
                                    rotate: [0, 360, 0],
                                    opacity: [0.3, 0.8, 0.3]
                                }}
                                transition={{
                                    duration: 4 + i * 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: i * 0.5
                                }}
                                className="absolute rounded-full bg-cyan-400/30"
                                style={{
                                    top: `${20 + i * 8}%`,
                                    left: `${10 + i * 10}%`,
                                    width: `${8 + i * 4}px`,
                                    height: `${8 + i * 4}px`
                                }}
                            />
                        ))}
                        <motion.div
                            className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-10 lg:px-20 pt-20"
                            initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.1 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                        >
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col items-center"
                            >
                                <motion.div
                                    variants={fadeInUp}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                    className="mb-8 lg:mb-12 w-[90%] max-w-5xl flex justify-center"
                                >
                                    <Image
                                        src="/hero.png"
                                        alt="VALUE - Transforming Business"
                                        width={1200}
                                        height={500}
                                        className="w-full h-auto object-contain"
                                        priority
                                    />
                                </motion.div>
                                <motion.h1
                                    variants={fadeInUp}
                                    transition={{ duration: 0.8 }}
                                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-4 leading-tight max-w-4xl"
                                >
                                    Transforming Business with
                                    <br />
                                    <span className="text-cyan-400">Innovative Solutions</span>
                                </motion.h1>
                                <motion.p
                                    variants={fadeInUp}
                                    transition={{ duration: 0.8 }}
                                    className="text-base md:text-lg lg:text-xl text-white/90 text-center mb-10 max-w-2xl"
                                >
                                    Professional CA services with precision, trust, and excellence
                                </motion.p>
                                <motion.div
                                    variants={fadeInUp}
                                    transition={{ duration: 0.8 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: '0 20px 40px rgba(0, 188, 212, 0.3)'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button className="bg-cyan-400 hover:bg-cyan-500 text-[#002445] px-10 py-3 rounded-full font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl">
                                        Get Started
                                    </button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};

export default HeroSectionUpdated;
