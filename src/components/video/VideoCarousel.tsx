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
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset aspect ratio when video changes
    setAspectRatio(null);
    setIsPlaying(false);
    setShowPlayButton(true);

    const updateSize = () => {
      if (video.videoWidth && video.videoHeight) {
        const ratio = video.videoWidth / video.videoHeight;
        setAspectRatio(ratio);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setShowPlayButton(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setShowPlayButton(true);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setShowPlayButton(true);
    };

    // Try to get dimensions immediately if already loaded
    if (video.readyState >= 1) {
      updateSize();
    }

    video.addEventListener('loadedmetadata', updateSize);
    video.addEventListener('loadeddata', updateSize);
    video.addEventListener('canplay', updateSize);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadedmetadata', updateSize);
      video.removeEventListener('loadeddata', updateSize);
      video.removeEventListener('canplay', updateSize);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentIndex]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Only handle horizontal swipes (more horizontal than vertical)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe left - next video
        handleNext();
      } else {
        // Swipe right - previous video
        handlePrevious();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

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
              className="relative flex items-center justify-center cursor-pointer"
              style={{ 
                width: '100%',
                maxWidth: aspectRatio && aspectRatio < 1 ? '400px' : '100%', // Constrain width for portrait videos
                aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
                maxHeight: '80vh'
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full flex items-center justify-center"
                  onClick={handlePlayPause}
                >
                  <video
                    ref={videoRef}
                    src={videos[currentIndex]}
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

                  {/* Transparent Play Button Overlay */}
                  {showPlayButton && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayPause();
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/5 transition-colors z-10"
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    >
                      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        {isPlaying ? (
                          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                          </svg>
                        ) : (
                          <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </div>
                    </motion.button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

