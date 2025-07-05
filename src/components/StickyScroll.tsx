'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Section {
    title: string;
    description: string;
    icon: string;
    color: string;
}

export default function StickyScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState(0);

    const sections: Section[] = [
        {
            title: "Strategic Business Planning",
            description: "Developing comprehensive business plans aligned with your goals. Our strategic planning services help you chart a clear path forward with measurable objectives and actionable steps.",
            icon: "🎯",
            color: "from-cyan-500 to-blue-600"
        },
        {
            title: "Digital Transformation", 
            description: "Revolutionize your business with cutting-edge digital solutions. We help organizations leverage technology to improve efficiency, enhance customer experiences, and drive innovation.",
            icon: "💻",
            color: "from-purple-500 to-indigo-600"
        },
        {
            title: "Financial Advisory",
            description: "Expert financial guidance to optimize your resources and investments. Our financial advisory services provide clear insights and recommendations to strengthen your financial position.",
            icon: "📊",
            color: "from-green-500 to-emerald-600"
        },
        {
            title: "Operations Optimization",
            description: "Streamline processes and eliminate inefficiencies for maximum productivity. We analyze your current operations and implement practical improvements that deliver tangible results.",
            icon: "⚙️",
            color: "from-amber-500 to-orange-600"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            
            const { top, height } = containerRef.current.getBoundingClientRect();
            const scrollPosition = window.innerHeight - top;
            const sectionHeight = height / sections.length;
            
            // Calculate which section is currently in view
            const currentSection = Math.min(
                Math.max(Math.floor(scrollPosition / sectionHeight), 0),
                sections.length - 1
            );
            
            setActiveSection(currentSection);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections.length]);

    return (
        <>
            {/* Mobile: Only show first section, no sticky, no animation */}
            <div className="block md:hidden bg-gradient-to-br from-[#002445] via-[#003366] to-[#004477] py-12 px-4">
                <div className="max-w-2xl mx-auto text-white">
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
                        <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wide">Our Services</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
                        {sections[0].title}
                    </h2>
                    <p className="text-base text-cyan-100 leading-relaxed mb-8">
                        {sections[0].description}
                    </p>
                    <button
                        className={`bg-gradient-to-r ${sections[0].color} text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300`}
                    >
                        Learn More →
                    </button>
                </div>
                <div className="flex justify-center mt-8">
                    <div className={`w-[160px] h-[160px] rounded-3xl flex items-center justify-center bg-gradient-to-br ${sections[0].color} shadow-2xl border-4 border-white/20`}>
                        <span className="text-white text-6xl drop-shadow-lg">{sections[0].icon}</span>
                    </div>
                </div>
            </div>
            {/* Desktop: Sticky Scroll Animation */}
            <div 
                ref={containerRef} 
                className="hidden md:block relative h-[400vh] bg-gradient-to-br from-white via-gray-50 to-cyan-50"
            >
                <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#002445] via-[#003366] to-[#004477]">
                    <div className="max-w-7xl mx-auto px-6 w-full">
                        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
                            {/* Left: Content */}
                            <div className="relative z-10 text-white">
                                {sections.map((section, index) => (
                                    <motion.div
                                        key={`content-${index}`}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ 
                                            opacity: activeSection === index ? 1 : 0,
                                            x: activeSection === index ? 0 : -50
                                        }}
                                        transition={{ duration: 0.6 }}
                                        className={`${activeSection === index ? 'pointer-events-auto' : 'pointer-events-none absolute inset-0'}`}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6"
                                        >
                                            <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wide">Our Services</span>
                                        </motion.div>
                                        
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                            {section.title}
                                        </h2>
                                        <p className="text-lg md:text-xl text-cyan-100 leading-relaxed mb-8 max-w-2xl">
                                            {section.description}
                                        </p>
                                        
                                        <motion.button
                                            whileHover={{ scale: 1.05, backgroundColor: "#06b6d4" }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`bg-gradient-to-r ${section.color} text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300`}
                                        >
                                            Learn More →
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* Right: Visual */}
                            <div className="relative h-[500px] w-full flex items-center justify-center">
                                {/* Center rotating icon */}
                                <div className="relative z-20">
                                    {sections.map((section, index) => (
                                        <motion.div
                                            key={`icon-${index}`}
                                            className="absolute inset-0 flex justify-center items-center"
                                            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                                            animate={{ 
                                                opacity: activeSection === index ? 1 : 0,
                                                scale: activeSection === index ? 1 : 0.8,
                                                rotateY: activeSection === index ? 0 : 90
                                            }}
                                            transition={{ duration: 0.6, ease: "easeInOut" }}
                                        >
                                            <motion.div
                                                animate={{ 
                                                    rotateZ: [0, 360],
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{ 
                                                    rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
                                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                                }}
                                                className={`w-[200px] h-[200px] rounded-3xl flex items-center justify-center bg-gradient-to-br ${section.color} shadow-2xl border-4 border-white/20`}
                                            >
                                                <span className="text-white text-8xl drop-shadow-lg">{section.icon}</span>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Progress indicators */}
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-30">
                                    {sections.map((_, index) => (
                                        <motion.div
                                            key={`indicator-${index}`}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                                activeSection === index ? 'bg-cyan-400 scale-150' : 'bg-white/40'
                                            }`}
                                            whileHover={{ scale: 1.2 }}
                                            onClick={() => setActiveSection(index)}
                                        />
                                    ))}
                                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -z-10 transform -translate-x-1/2" />
                                </div>
                                
                                {/* Floating particles */}
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={`particle-${i}`}
                                        animate={{ 
                                            y: [0, -20, 0],
                                            x: [0, 10, 0],
                                            opacity: [0.3, 0.8, 0.3],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{ 
                                            duration: 4 + i * 0.5,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                                        style={{
                                            top: `${20 + (i % 4) * 20}%`,
                                            left: `${10 + Math.floor(i / 4) * 30}%`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
