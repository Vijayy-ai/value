'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white pt-12 pb-0 px-2 sm:px-4 md:px-0">
            <div className="max-w-6xl mx-auto">
                {/* Contact Header */}
                <div className="text-center mb-8 px-2">
                    <div className="text-sm opacity-80 mb-1">Contact Us</div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Let's Work Together</h2>
                    <div className="text-base opacity-80 max-w-2xl mx-auto">
                        Ready to elevate your business? Get in touch with us to explore tailored solutions for your needs.
                    </div>
                </div>
                {/* Map + Form Section */}
                <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-0 mb-12">
                    {/* Map Image + Arrow */}
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative min-h-[220px] md:min-h-[340px] mb-8 md:mb-0">
                        <div className="w-full flex justify-center items-center relative">
                            {/* World Map Image - Larger and Responsive */}
                            <div className="relative w-full flex justify-center items-center" style={{ minHeight: 180 }}>
                                <img src="/Huge Global.png" alt="World Map" className="w-full max-w-[95vw] sm:max-w-[420px] md:max-w-[600px] h-[180px] sm:h-[220px] md:h-[320px] object-contain rounded-xl" />
                                {/* Optional: Overlay arrow (SVG) */}
                                <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" viewBox="0 0 600 320" fill="none">
                                    <path d="M60 240 Q40 140 120 80 Q180 40 260 80" stroke="#fff" strokeWidth="3" fill="none" opacity="0.8" />
                                    <polygon points="255,80 270,85 260,90" fill="#fff" opacity="0.8" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* Vertical Divider */}
                    <div className="hidden md:block w-px bg-white/30 mx-4 md:mx-8" style={{ minHeight: 220, maxHeight: 320 }} />
                    {/* Contact Form */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center max-w-md mx-auto">
                        <div className="text-lg font-semibold mb-2">Say hello</div>
                        <div className="text-xs opacity-70 mb-6">Lorem Ipsum is simply dummy text of the printing.</div>
                        <form className="w-full flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input type="text" placeholder="First Name" className="w-full md:w-1/2 px-4 py-2 rounded bg-[#222] text-white placeholder-gray-400 focus:outline-none" />
                                <input type="text" placeholder="Last Name" className="w-full md:w-1/2 px-4 py-2 rounded bg-[#222] text-white placeholder-gray-400 focus:outline-none" />
                            </div>
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded bg-[#222] text-white placeholder-gray-400 focus:outline-none" />
                            <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 rounded bg-[#222] text-white placeholder-gray-400 focus:outline-none resize-none" />
                            <div className="flex justify-center md:justify-end w-full mt-2">
                                <button type="submit" className="w-full md:w-auto flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200 transition-all justify-center md:justify-end">
                                    Get in Touch
                                    <span className="inline-block bg-black text-white rounded-full w-7 h-7 flex items-center justify-center ml-2">
                                        <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M7 13l5-5m0 0l-5-5m5 5H2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Footer Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 mt-12 text-center md:text-left">
                    {/* Features */}
                    <div>
                        <div className="font-bold mb-3 text-lg">Features</div>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li>Reviews</li>
                            <li>Community</li>
                            <li>Social Media Kit</li>
                            <li>Affiliate</li>
                        </ul>
                    </div>
                    {/* Account */}
                    <div>
                        <div className="font-bold mb-3 text-lg">Account</div>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li>Refund</li>
                            <li>Security</li>
                            <li>Rewards</li>
                        </ul>
                    </div>
                    {/* Company */}
                    <div>
                        <div className="font-bold mb-3 text-lg">Company</div>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li>Career</li>
                            <li>Help Center</li>
                            <li>Media</li>
                        </ul>
                    </div>
                    {/* Get Connected */}
                    <div>
                        <div className="font-bold mb-3 text-lg">Get Connected</div>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li>Jakarta Selatan</li>
                            <li>Indonesia</li>
                            <li>0812-1225-3638</li>
                            <li>supports@metime.com</li>
                        </ul>
                    </div>
                </div>
                <hr className="border-t border-white/20 mb-6" />
                <div className="text-center text-xs opacity-80 pb-4">
                    2019 Copyright MeTime • All right reserved • Made in Jakarta
                </div>
            </div>
        </footer>
    );
}
