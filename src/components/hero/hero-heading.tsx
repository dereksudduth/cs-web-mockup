import { motion } from 'framer-motion';

export function HeroHeading() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm font-medium tracking-wider text-neutral-600 mb-6"
      >
        REVOLUTIONIZING WASTE MANAGEMENT
      </motion.p>
      
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight"
      >
        Smart solutions for a
        <span className="text-neutral-600 block mt-2">cleaner future</span>
      </motion.h1>
    </>
  );
}