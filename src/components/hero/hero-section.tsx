import { motion } from 'framer-motion';
import { HeroHeading } from './hero-heading';
import { HeroButtons } from './hero-buttons';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full text-center"
        >
          <HeroHeading />
          <HeroButtons />
        </motion.div>
      </div>
    </section>
  );
}