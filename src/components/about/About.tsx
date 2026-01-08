'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, customEasing } from '@/lib/constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-off-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-12"
        >
          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: customEasing.easeOutQuart }}
            className="font-mono text-xs text-medium-gray tracking-widest uppercase block"
          >
            About
          </motion.span>

          {/* Title */}
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight">
            Studio
          </h2>

          {/* Content */}
          <div className="space-y-6 text-base md:text-lg text-dark-gray leading-relaxed">
            <p>
              This is a collection of physical design work—objects and garments
              created with intention, exploring the relationship between form,
              material, and function.
            </p>
            <p>
              Each piece is developed through a process of iteration and
              refinement, considering both aesthetic and practical concerns.
              The work exists in the space between art and utility, where
              everyday objects can carry meaning beyond their immediate purpose.
            </p>
            <p>
              The studio operates as a space for experimentation, where
              traditional techniques meet contemporary materials and methods.
              This archive documents the ongoing exploration of what it means to
              create objects that are both beautiful and useful.
            </p>
          </div>

          {/* Divider */}
          <div className="divider" />

          {/* Contact prompt */}
          <div className="pt-4">
            <p className="text-sm text-medium-gray">
              For inquiries and collaborations
            </p>
            <a
              href="mailto:luca47hall@gmail.com"
              className="font-mono text-sm text-charcoal hover:text-dark-gray transition-colors duration-300 mt-2 inline-block focus-ring rounded"
            >
              luca47hall@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
