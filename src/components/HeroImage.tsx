import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex justify-center items-center"
    >
      {/* Large VALUE Text as in your design */}
      <div className="flex items-center justify-center">
        {/* V */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white font-black text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] leading-none"
          style={{ fontFamily: 'Arial Black, sans-serif' }}
        >
          V
        </motion.div>

        {/* Triangle A */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.0, type: "spring" }}
          className="mx-2 md:mx-4"
        >
          <svg 
            width="280" 
            height="320" 
            viewBox="0 0 280 320" 
            className="w-[6rem] md:w-[8rem] lg:w-[12rem] xl:w-[14rem] h-[8rem] md:h-[12rem] lg:h-[16rem] xl:h-[18rem]"
          >
            <motion.path
              d="M140 20 L260 300 L20 300 Z"
              fill="#22d3ee"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            />
          </svg>
        </motion.div>

        {/* L */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white font-black text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] leading-none"
          style={{ fontFamily: 'Arial Black, sans-serif' }}
        >
          L
        </motion.div>

        {/* U */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-white font-black text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] leading-none"
          style={{ fontFamily: 'Arial Black, sans-serif' }}
        >
          U
        </motion.div>

        {/* E */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-white font-black text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] leading-none"
          style={{ fontFamily: 'Arial Black, sans-serif' }}
        >
          E
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
