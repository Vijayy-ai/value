'use client';

import { motion, useScroll } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';

const ServicesPage = () => {
    const [mounted, setMounted] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: containerRef
    });

    useEffect(() => {
        setMounted(true);
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const sectionCount = 4; // Number of main sections
            
            // Calculate which section is currently in view
            const sectionIndex = Math.min(
                Math.floor(scrollPosition / (windowHeight * 0.75)),
                sectionCount - 1
            );
            
            setActiveSection(sectionIndex);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) return null;

    const services = [
        {
            title: "Risk Advisory Services",
            description: "Sample testing content for risk advisory services. This is placeholder text for testing purposes.",
            features: ["Risk Assessment", "Compliance Management", "Strategic Planning", "Crisis Management"],
            icon: "🛡️",
            color: "from-red-500 to-pink-600"
        },
        {
            title: "Virtual CFO Services",
            description: "Sample testing content for virtual CFO services. This is placeholder text for testing purposes.",
            features: ["Financial Planning", "Budget Management", "Investment Strategy", "Financial Reporting"],
            icon: "💼",
            color: "from-blue-500 to-cyan-600"
        },
        {
            title: "Business Transformation",
            description: "Sample testing content for business transformation. This is placeholder text for testing purposes.",
            features: ["Digital Strategy", "Process Optimization", "Technology Integration", "Change Management"],
            icon: "🚀",
            color: "from-green-500 to-emerald-600"
        },
        {
            title: "Strategic Consulting",
            description: "Sample testing content for strategic consulting. This is placeholder text for testing purposes.",
            features: ["Market Analysis", "Growth Strategy", "Competitive Intelligence", "Performance Optimization"],
            icon: "📊",
            color: "from-purple-500 to-indigo-600"
        },
        {
            title: "Financial Advisory",
            description: "Sample testing content for financial advisory. This is placeholder text for testing purposes.",
            features: ["M&A Advisory", "Capital Structure", "Valuation Services", "Due Diligence"],
            icon: "💰",
            color: "from-yellow-500 to-orange-600"
        },
        {
            title: "Technology Solutions",
            description: "Cutting-edge technology solutions to enhance efficiency and drive innovation.",
            features: ["System Integration", "Automation", "Data Analytics", "Cloud Solutions"],
            icon: "⚡",
            color: "from-teal-500 to-blue-600"
        }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#001122] via-[#002244] to-[#003366]">
            <Navbar />
            
            {/* Scroll Indicator Dots - MOBILE RESPONSIVE */}
            <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 flex-col items-center gap-4 md:gap-6 hidden md:flex">
                {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="relative">
                        <div 
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                                activeSection === index ? 'bg-cyan-400' : 'bg-gray-300'
                            }`}
                        />
                        {activeSection === index && (
                            <motion.div
                                className="absolute inset-0 w-4 h-4 md:w-5 md:h-5 -m-1 rounded-full bg-cyan-400 opacity-30"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        )}
                    </div>
                ))}
                <motion.div 
                    className="absolute w-1 h-[120px] md:h-[150px] bg-gray-200 -z-10 rounded-full"
                    style={{ top: "-20px" }}
                />
                <motion.div 
                    className="absolute w-1 h-[120px] md:h-[150px] bg-cyan-400 -z-5 rounded-full origin-top"
                    style={{ 
                        top: "-20px", 
                        scaleY: scrollYProgress,
                        transformOrigin: "top" 
                    }}
                />
            </div>
            
            {/* Hero Section - MOBILE RESPONSIVE */}
            <section className="relative h-screen bg-gradient-to-br from-[#002445] to-[#014584] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-10 left-10 md:top-20 md:left-20 w-40 h-40 md:w-96 md:h-96 bg-cyan-400 rounded-full opacity-10"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            rotate: [360, 180, 0],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 md:w-80 md:h-80 bg-cyan-300 rounded-full opacity-10"
                    />
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 md:px-6"
                >
                    <motion.h1
                        variants={fadeInUp}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8"
                    >
                        Our <span className="text-cyan-400">Services</span>
                    </motion.h1>
                    
                    <motion.p
                        variants={fadeInUp}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto px-4"
                    >
                        Comprehensive business solutions designed to drive growth, optimize performance, and transform your organization for the digital age.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="mt-8 md:mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#06b6d4" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-cyan-400 text-[#002445] px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold text-lg md:text-xl shadow-xl"
                        >
                            Explore Services
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Floating Elements */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{
                            duration: 5 + i * 1.5,
                            repeat: Infinity,
                            delay: i * 0.7,
                            ease: "easeInOut"
                        }}
                        className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                        style={{
                            top: `${15 + i * 8}%`,
                            left: `${8 + i * 12}%`,
                        }}
                    />
                ))}
            </section>

            {/* Services Grid - MOBILE RESPONSIVE */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-[#002445] via-[#003366] to-[#004477]">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-200 mb-4 md:mb-6">What We Offer</h2>
                        <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto px-4">
                            Comprehensive solutions tailored to meet your unique business challenges and drive sustainable growth.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                onHoverStart={() => setActiveService(index)}
                                className="group cursor-pointer"
                            >
                                <div className="bg-[#003366]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-cyan-400/20">
                                    <div className="text-4xl md:text-6xl mb-4 md:mb-6">{service.icon}</div>
                                    <h3 className="text-xl md:text-2xl font-bold text-cyan-200 mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-cyan-100 leading-relaxed mb-4 md:mb-6">
                                        {service.description}
                                    </p>
                                    <div className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex items-center text-xs md:text-sm text-cyan-100"
                                            >
                                                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                                                {feature}
                                            </motion.div>
                                        ))}
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-4 md:mt-6 w-full md:w-auto bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition-all"
                                    >
                                        Learn More
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Service Detail - MOBILE RESPONSIVE */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-[#004477] via-[#0066aa] to-[#003366]">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* Icon section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-[#002445] to-[#014584] rounded-2xl flex items-center justify-center overflow-hidden">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 opacity-20"
                                >
                                    <div className="absolute top-10 left-10 w-20 h-20 border-4 border-cyan-400 rounded-full"></div>
                                    <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-cyan-300 rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-cyan-500 rounded-full"></div>
                                </motion.div>
                                <div className="text-center text-white z-10">
                                    <div className="text-8xl mb-4">{services[activeService].icon}</div>
                                    <div className="text-2xl font-bold">{services[activeService].title}</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content section is now on the right */}
                        {/* Content section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6 md:space-y-8 order-1 lg:order-2"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-200">
                                Spotlight: <span className="text-cyan-400">{services[activeService].title}</span>
                            </h2>
                            <p className="text-lg md:text-xl text-cyan-100 leading-relaxed">
                                {services[activeService].description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {services[activeService].features.map((feature, idx) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-[#003366]/50 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-cyan-400/20"
                                    >
                                        <div className="font-semibold text-cyan-200 text-sm md:text-base">{feature}</div>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full md:w-auto bg-transparent border-2 border-cyan-400 text-cyan-300 px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-cyan-400 hover:text-[#002445] transition-all duration-300"
                            >
                                Get Started Today
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section - MOBILE RESPONSIVE */}
            <section className="py-12 md:py-20 bg-gradient-to-r from-[#002445] to-[#014584]">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Our Process</h2>
                        <p className="text-lg md:text-xl text-cyan-200">How we deliver exceptional results</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Understanding your unique challenges and objectives" },
                            { step: "02", title: "Strategy", desc: "Developing tailored solutions and roadmaps" },
                            { step: "03", title: "Implementation", desc: "Executing plans with precision and expertise" },
                            { step: "04", title: "Optimization", desc: "Continuous improvement and performance monitoring" }
                        ].map((process, index) => (
                            <motion.div
                                key={process.step}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-16 h-16 md:w-20 md:h-20 bg-cyan-400 rounded-full flex items-center justify-center text-[#002445] font-bold text-lg md:text-xl mx-auto mb-4 md:mb-6"
                                >
                                    {process.step}
                                </motion.div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{process.title}</h3>
                                <p className="text-sm md:text-base text-cyan-200 px-2">{process.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - MOBILE RESPONSIVE */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-[#002445] via-[#003366] to-[#004477]">
                <div className="max-w-4xl mx-auto text-center px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-200 mb-6 md:mb-8">Ready to Get Started?</h2>
                        <p className="text-lg md:text-xl text-cyan-100 mb-8 md:mb-12 leading-relaxed px-2">
                            Let&apos;s discuss how our services can help transform your business and drive sustainable growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#06b6d4" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-cyan-400 text-[#002445] px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold text-lg md:text-xl shadow-xl"
                            >
                                Schedule Consultation
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-cyan-400 text-cyan-300 px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold text-lg md:text-xl hover:bg-cyan-400 hover:text-[#002445] transition-all duration-300"
                            >
                                Download Brochure
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
