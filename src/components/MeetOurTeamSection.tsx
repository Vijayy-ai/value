export default function MeetOurTeamSection() {
  // Placeholder image and text
  const img = '/team-member.png'; // Replace with actual image
  // const name = 'Priyanka Garg Gupta, Director (Staff Augmentation & CSR Impact)';

  // 2x3 grid: [row, col] for background-position
  const gridSquares = [
    { row: 0, col: 0 }, { row: 0, col: 1 },
    { row: 1, col: 0 }, { row: 1, col: 1 },
    { row: 2, col: 0 }, { row: 2, col: 1 },
  ];

  return (
    <section className="w-full bg-white py-20 flex flex-col items-center justify-center text-left relative">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center px-4 md:px-0">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-start relative">
          {/* SVG Hand-drawn Arrows */}
          <div className="mb-2 md:mb-4 w-full flex flex-col items-start">
            <svg width="320" height="80" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
              <path d="M30 40 Q80 10 160 30 Q240 50 310 30" stroke="#222" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M30 60 Q100 80 200 60 Q270 40 310 60" stroke="#222" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <div className="mb-2 text-sm text-gray-800 font-medium">Meet Our Team</div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">The Minds Behind Our Success</h2>
          <p className="text-gray-700 text-base md:text-lg mb-8 max-w-md">
            Our experienced leadership team ensures the highest level of expertise and dedication to our clients&apos; success.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-7 py-3 rounded-full text-base flex items-center gap-2 shadow-lg transition-all duration-200">
              Know Our Team
            </button>
            <span className="bg-yellow-400 hover:bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center ml-1 transition-all duration-200 shadow-lg">
              <svg width="22" height="22" fill="none" viewBox="0 0 20 20"><path d="M7 13l5-5m0 0l-5-5m5 5H2" stroke="#181e5a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
        </div>
        {/* Right Side: 2x3 Image Grid */}
        <div className="grid grid-rows-3 grid-cols-2 gap-0 w-full max-w-[340px] aspect-[2/3] mx-auto bg-white">
          {gridSquares.map((sq, i) => (
            <div
              key={i}
              className="relative w-full h-full overflow-hidden"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: '200% 300%',
                backgroundPosition: `${sq.col * 100}% ${sq.row * 50}%`,
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
              }}
            >
              {/* No text overlay */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 