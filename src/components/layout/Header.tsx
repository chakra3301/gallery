'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { customEasing } from '@/lib/constants';

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Track if user has scrolled at all (for subtle background)
          setHasScrolled(currentScrollY > 20);

          // Hide on scroll down, show on scroll up
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: customEasing.easeOutQuart }}
          className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
            hasScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
          }`}
        >
          <nav className="max-w-gallery mx-auto px-6 md:px-8 lg:px-12 py-5 md:py-6 flex items-center justify-between">
            {/* Brand */}
            <a
              href="#"
              className="font-mono text-sm tracking-wide text-charcoal hover:text-dark-gray transition-colors duration-300 focus-ring rounded"
            >
              Archive
            </a>

            {/* Navigation */}
            <div className="flex items-center gap-6 md:gap-10">
              <a
                href="#gallery"
                className="font-mono text-sm tracking-wide text-charcoal/70 hover:text-charcoal transition-colors duration-300 focus-ring rounded"
              >
                Gallery
              </a>
              <a
                href="#about"
                className="font-mono text-sm tracking-wide text-charcoal/70 hover:text-charcoal transition-colors duration-300 focus-ring rounded"
              >
                About
              </a>
              <a
                href="#contact"
                className="font-mono text-sm tracking-wide text-charcoal/70 hover:text-charcoal transition-colors duration-300 focus-ring rounded"
              >
                Contact
              </a>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
