'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { customEasing } from '@/lib/constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Banner Image */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: customEasing.easeOutQuart }}
        className="relative w-full max-w-gallery mx-auto px-6 md:px-8 lg:px-12"
      >
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/images/hero/gen-banner.png"
            alt="GENESIS - Program your life, program your reality"
            fill
            className="object-contain"
            priority
            sizes="100vw"
            unoptimized={true}
          />
        </div>

        {/* Refined scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: customEasing.easeOutQuart }}
          className="absolute -bottom-8 md:bottom-0 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-mono text-xs text-medium-gray tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-neutral-gray to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Subtle gradient overlay at bottom for transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};
