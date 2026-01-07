'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset aspect ratio when video changes
    setAspectRatio(null);

    const updateSize = () => {
      if (video.videoWidth && video.videoHeight) {
        const ratio = video.videoWidth / video.videoHeight;
        setAspectRatio(ratio);
      }
    };

    // Try to get dimensions immediately if already loaded
    if (video.readyState >= 1) {
      updateSize();
    }

    video.addEventListener('loadedmetadata', updateSize);
    video.addEventListener('loadeddata', updateSize);
    video.addEventListener('canplay', updateSize);

    return () => {
      video.removeEventListener('loadedmetadata', updateSize);
      video.removeEventListener('loadeddata', updateSize);
      video.removeEventListener('canplay', updateSize);
    };
  }, [currentIndex]);

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
          <div className="relative w-full bg-off-white flex items-center justify-center py-8">
            <div 
              ref={containerRef}
              className="relative flex items-center justify-center"
              style={{ 
                width: '100%',
                maxWidth: aspectRatio && aspectRatio < 1 ? '400px' : '100%', // Constrain width for portrait videos
                aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
                maxHeight: '80vh'
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <video
                    ref={videoRef}
                    src={videos[currentIndex]}
                    controls
                    className="w-full h-auto max-h-[80vh]"
                    playsInline
                    preload="metadata"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      maxHeight: '80vh',
                      objectFit: 'contain'
                    }}
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
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-charcoal hover:text-dark-gray transition-colors z-10 bg-white/80 rounded-full backdrop-blur-sm"
                    aria-label="Previous video"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-charcoal hover:text-dark-gray transition-colors z-10 bg-white/80 rounded-full backdrop-blur-sm"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

