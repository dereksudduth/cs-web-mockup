'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';
import { CaretRight } from '@phosphor-icons/react';

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] w-full items-center justify-center px-4">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm font-medium tracking-wider text-neutral-600"
        >
          REVOLUTIONIZING WASTE MANAGEMENT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-semibold tracking-tight md:text-7xl"
        >
          Smart solutions for a
          <span className="mt-2 block text-neutral-600">cleaner future</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/register">
            <Button
              size="lg"
              className="h-12 w-48 rounded-full bg-black text-base font-medium text-white hover:bg-black/90"
            >
              Get Started <CaretRight className="ml-2 h-4 w-4" weight="bold" />
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="h-12 w-48 rounded-full border-neutral-200 text-base font-medium hover:bg-neutral-50"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}