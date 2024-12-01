import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CaretRight } from "@phosphor-icons/react";

export function HeroSection() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center pt-20"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-sm font-medium tracking-wider text-neutral-600 mb-6"
        >
          REVOLUTIONIZING WASTE MANAGEMENT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight"
        >
          Smart solutions for a
          <span className="block text-neutral-600 mt-2">cleaner future</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Button
            size="lg"
            className="w-[200px] h-12 rounded-full bg-black text-white hover:bg-black/90 text-base"
          >
            Get Started <CaretRight className="ml-2 h-4 w-4" weight="bold" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-[200px] h-12 rounded-full border-neutral-200 hover:bg-neutral-50 text-base"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}