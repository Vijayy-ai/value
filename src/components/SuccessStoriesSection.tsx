import { useEffect, useRef } from 'react';

export default function SuccessStoriesSection() {
  // Animate the dotted line dash offset
  const lineRef = useRef<SVGPolylineElement>(null);
  useEffect(() => {
    let frame: number;
    let offset = 0;
    function animate() {
      offset = (offset + 1.5) % 100;
      if (lineRef.current) {
        lineRef.current.setAttribute('stroke-dashoffset', offset.toString());
      }
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="w-full bg-[#181e5a] py-28 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Glassmorphism Card */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 mt-10 w-[700px] max-w-[95vw] h-[420px] bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl z-0 border border-white/20" />
      {/* Soft background glow behind SVG */}
      <div className="absolute left-1/2 top-32 -translate-x-1/2 w-[600px] h-[260px] bg-cyan-400/20 blur-3xl rounded-full z-0" />
      <div className="text-white text-sm mb-4 opacity-80 z-10">Success Stories</div>
      {/* Bold Metric */}
      <div className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-2 z-10 drop-shadow-lg tracking-tight">120+ Success Stories</div>
      {/* Glowing Hollow Triangles and Stepped Line */}
      <div className="flex justify-center items-center mb-12 z-10">
        <svg width="600" height="260" viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full">
          {/* Stepped Dotted Line */}
          <polyline
            ref={lineRef}
            points="100,200 100,120 250,120 250,60 400,60 400,120 500,120 500,40"
            fill="none"
            stroke="#fff"
            strokeDasharray="4 8"
            strokeWidth="3"
            opacity="0.7"
            filter="url(#glow)"
            style={{ transition: 'stroke-dashoffset 0.2s' }}
          />
          {/* Hollow Glowing Triangles with pulsing glow */}
          <g filter="url(#glow)">
            <polygon points="80,220 100,180 120,220" fill="none" stroke="#1cc6e6" strokeWidth="4" opacity="0.9" className="animate-pulse-glow" />
            <polygon points="230,140 250,100 270,140" fill="none" stroke="#1cc6e6" strokeWidth="4" opacity="0.9" className="animate-pulse-glow" />
            <polygon points="230,220 250,180 270,220" fill="none" stroke="#1cc6e6" strokeWidth="4" opacity="0.9" className="animate-pulse-glow" />
            <polygon points="380,80 400,40 420,80" fill="none" stroke="#1cc6e6" strokeWidth="4" opacity="0.9" className="animate-pulse-glow" />
            <polygon points="380,140 400,100 420,140" fill="none" stroke="#1cc6e6" strokeWidth="4" opacity="0.9" className="animate-pulse-glow" />
            <polygon points="480,140 500,100 520,140" fill="none" stroke="#1cc6e6" strokeWidth="4" opacity="0.9" className="animate-pulse-glow" />
            <polygon points="480,60 500,20 520,60" fill="none" stroke="#1cc6e6" strokeWidth="4" opacity="0.9" className="animate-pulse-glow" />
            {/* Large glowing triangle */}
            <polygon points="300,180 350,80 400,180" fill="none" stroke="#1cc6e6" strokeWidth="7" opacity="1" className="animate-pulse-glow" style={{ filter: 'drop-shadow(0 0 30px #1cc6e6)' }} />
          </g>
          {/* SVG Glow Filter */}
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
      <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 z-10 drop-shadow-lg tracking-tight">Lorem ipsum dolor sit amet,</h2>
      <p className="text-white text-base md:text-lg opacity-90 mb-10 max-w-2xl mx-auto z-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
      </p>
      <button className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-500 hover:to-yellow-400 text-[#181e5a] font-semibold px-10 py-4 rounded-full text-lg flex items-center gap-3 shadow-2xl transition-all duration-200 mx-auto z-10 group border-2 border-yellow-300 hover:border-yellow-400">
        ALL SERVICES
        <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
          <svg width="22" height="22" fill="none" viewBox="0 0 20 20"><path d="M7 13l5-5m0 0l-5-5m5 5H2" stroke="#181e5a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </button>
      <style jsx>{`
        .animate-pulse-glow {
          filter: drop-shadow(0 0 16px #1cc6e6) drop-shadow(0 0 8px #1cc6e6);
          animation: pulse-glow 2.5s infinite alternate;
        }
        @keyframes pulse-glow {
          0% { filter: drop-shadow(0 0 8px #1cc6e6) drop-shadow(0 0 2px #1cc6e6); }
          100% { filter: drop-shadow(0 0 32px #1cc6e6) drop-shadow(0 0 16px #1cc6e6); }
        }
      `}</style>
    </section>
  );
} 