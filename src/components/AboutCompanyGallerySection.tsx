import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutCompanyGallerySection() {
  return (
    <section className="w-full bg-neutral-900 flex flex-col items-center justify-center py-8 md:py-20 px-2 md:px-0 relative overflow-hidden">
      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-6 md:grid-rows-3 gap-x-0 md:gap-x-3 gap-y-2 md:gap-y-2 relative z-0">
        {/* Top row - all same height on desktop, stacked on mobile */}
        <Image src="/img1.png" alt="img1" width={400} height={300} className="row-start-1 row-end-2 md:col-start-1 md:col-end-2 object-cover rounded-2xl shadow-lg w-full aspect-[16/9] md:aspect-auto h-full min-h-[120px] md:min-h-[160px] max-h-[220px] md:max-h-[260px]" />
        <div className="row-start-2 row-end-3 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-4 flex flex-col items-center justify-center bg-neutral-900/95 md:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 p-3 md:p-10 text-center z-20 h-full min-h-[120px] md:min-h-[160px] max-h-[none] md:max-h-[260px] mt-2 md:mt-0 mb-2 md:mb-0">
          <span className="text-gray-300 text-xs md:text-base mb-1 md:mb-2">About Us</span>
          <h2 className="text-xl md:text-4xl font-bold text-white mb-2 md:mb-4">Discover Who We Are</h2>
          <p className="text-gray-300 text-xs md:text-base mb-1 md:mb-2 break-words">
            Founded in 2016, Value Founders Private Limited has grown into a multidisciplinary firm serving diverse industries globally. Our experienced leadership and talented team ensure efficiency, innovation, and excellence in every solution we provide. Trusted by Big 4 consulting firms, we aim to elevate your business to new heights.<br />
            Founded in 2016, Value Founders Private Limited has grown into a multidisciplinary firm serving diverse industries globally. Our experienced leadership and talented team ensure efficiency, innovation, and excellence in every solution we provide. Trusted by Big 4 consulting firms, we aim to elevate your business to new heights.
          </p>
        </div>
        <Image src="/img2.png" alt="img2" width={400} height={300} className="row-start-3 row-end-4 md:row-start-1 md:row-end-2 md:col-start-4 md:col-end-5 object-cover rounded-2xl shadow-lg w-full aspect-[16/9] md:aspect-auto h-full min-h-[120px] md:min-h-[160px] max-h-[220px] md:max-h-[260px]" />

        {/* Middle row */}
        <Image src="/img1.png" alt="img1" width={400} height={300} className="row-start-4 row-end-5 md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2 object-cover rounded-2xl shadow-lg w-full aspect-[16/9] md:aspect-[4/3] min-h-[100px] md:min-h-[160px]" />
        <Image src="/img4.png" alt="img4" width={400} height={300} className="row-start-5 row-end-6 md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3 object-cover rounded-2xl shadow-lg w-full aspect-[16/9] md:aspect-[4/3] min-h-[100px] md:min-h-[160px]" />
        <Link href="/about-us" passHref legacyBehavior>
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(6,182,212,0.25)' }}
            className="row-start-6 row-end-7 md:row-start-2 md:row-end-3 md:col-start-3 md:col-end-4 flex items-center justify-center bg-neutral-800 rounded-2xl shadow-xl cursor-pointer text-white text-xl md:text-2xl font-semibold select-none aspect-[16/9] md:aspect-[4/3] min-h-[80px] md:min-h-[160px] transition-all duration-200 border border-neutral-700 mt-2 md:mt-0"
            tabIndex={0}
            aria-label="Learn more about us"
          >
            Learn more <span className="ml-2">↗</span>
          </motion.a>
        </Link>
        <Image src="/img3.png" alt="img3" width={400} height={300} className="row-start-[7] row-end-[8] md:row-start-2 md:row-end-3 md:col-start-4 md:col-end-5 object-cover rounded-2xl shadow-lg w-full aspect-[16/9] md:aspect-[4/3] min-h-[100px] md:min-h-[160px]" />

        {/* Bottom row: img1.png spanning all columns */}
        <Image src="/img1.png" alt="img1" width={800} height={200} className="hidden md:block row-start-3 row-end-4 col-start-1 col-end-5 object-cover rounded-2xl shadow-lg w-full aspect-[16/3] min-h-[80px] md:min-h-[120px]" />
        <Image src="/img1.png" alt="img1" width={400} height={300} className="block md:hidden row-start-[8] row-end-[9] col-start-1 col-end-2 object-cover rounded-2xl shadow-lg w-full aspect-[16/9] min-h-[60px] mt-2" />
      </div>
    </section>
  );
} 