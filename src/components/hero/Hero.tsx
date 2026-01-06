'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInVariant } from '@/lib/constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Banner Image */}
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-6xl mx-auto px-6"
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
            onError={(e) => {
              console.error('Hero image failed to load:', e);
            }}
          />
        </div>

        {/* Optional subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-neutral-gray"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
