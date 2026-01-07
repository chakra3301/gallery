'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInVariant } from '@/lib/constants';

const videos = [
  '/images/products/ark/IMG_0095.MOV',
  '/images/products/ark/91a80c580be34da1a6ba176ffd3dd4b2.MOV',
  '/images/products/ark/export_1696307872277.MOV',
  '/images/products/ark/copy_1B04D09E-4422-4117-855E-556881CB0FF5.MOV',
  '/images/products/ark/IMG_0306.MOV',
];

export const VideoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section id="video" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl font-normal text-charcoal mb-12 text-center"
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            Video
          </h2>

          {/* Video Carousel */}
          <div className="relative w-full min-h-[400px] bg-off-white flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full max-w-full max-h-[80vh] flex items-center justify-center"
              >
                <video
                  src={videos[currentIndex]}
                  controls
                  className="w-full h-full max-w-full max-h-[80vh] object-contain"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            {videos.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-charcoal hover:text-dark-gray transition-colors z-10"
                  aria-label="Previous video"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-charcoal hover:text-dark-gray transition-colors z-10"
                  aria-label="Next video"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}

            {/* Video indicator dots */}
            {videos.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-charcoal w-6'
                        : 'bg-neutral-gray hover:bg-dark-gray'
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

