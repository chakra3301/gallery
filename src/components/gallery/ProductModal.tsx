'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/types';
import { LazyImage } from '../ui/LazyImage';
import { customEasing, imageCrossfadeVariant } from '@/lib/constants';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Get all available images (gallery + primary as fallback)
  const allImages = product.images.gallery && product.images.gallery.length > 0
    ? product.images.gallery
    : product.images.primary ? [product.images.primary] : [];

  // Ensure currentImageIndex is within bounds
  const safeIndex = Math.min(currentImageIndex, Math.max(0, allImages.length - 1));
  const currentImage = allImages[safeIndex] || allImages[0] || product.images.primary;

  // Check if current media is a video
  const isVideo = currentImage && (currentImage.toLowerCase().endsWith('.mov') || currentImage.toLowerCase().endsWith('.mp4'));

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product.id]);

  // Handle video autoplay and volume when video changes
  useEffect(() => {
    if (videoRef.current && isVideo) {
      const video = videoRef.current;
      video.volume = 0.5;
      video.currentTime = 0;
      video.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [currentImage, isVideo]);

  // Pause video when modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  const handleNextImage = useCallback(() => {
    if (currentImageIndex < allImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      onNext();
    }
  }, [currentImageIndex, allImages.length, onNext]);

  const handlePreviousImage = useCallback(() => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      onPrevious();
    }
  }, [currentImageIndex, onPrevious]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePreviousImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNextImage, handlePreviousImage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!currentImage || !isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: customEasing.easeOutQuart }}
            onClick={onClose}
            className="fixed inset-0 bg-white/98 backdrop-blur-sm z-50"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: customEasing.easeOutQuart }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-8"
          >
            <div className="w-full h-full max-w-[1600px] mx-auto flex flex-col lg:flex-row bg-white">
              {/* Image Section */}
              <div className="relative flex-1 bg-off-white flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    variants={imageCrossfadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full h-full flex items-center justify-center p-6 md:p-8 lg:p-12"
                  >
                    {isVideo ? (
                      <video
                        ref={videoRef}
                        src={currentImage}
                        autoPlay
                        loop
                        playsInline
                        muted={false}
                        className="max-w-full max-h-full object-contain"
                        style={{
                          transform: currentImage.includes('starintro.MOV') ? 'rotate(-90deg)' : 'none',
                        }}
                      />
                    ) : (
                      <LazyImage
                        src={currentImage}
                        alt={`${product.title} - Image ${currentImageIndex + 1}`}
                        width={2000}
                        height={2000}
                        sizes="100vw"
                        className="max-w-full max-h-full object-contain"
                        style={{ width: 'auto', height: 'auto' }}
                        unoptimized={true}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Image indicator dots */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-charcoal w-6'
                            : 'bg-neutral-gray/60 hover:bg-medium-gray w-1.5'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Navigation arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePreviousImage();
                  }}
                  className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-charcoal/60 hover:text-charcoal transition-colors duration-200 z-10 focus-ring rounded-full"
                  aria-label={currentImageIndex > 0 ? 'Previous image' : 'Previous product'}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-charcoal/60 hover:text-charcoal transition-colors duration-200 z-10 focus-ring rounded-full"
                  aria-label={currentImageIndex < allImages.length - 1 ? 'Next image' : 'Next product'}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 flex items-center justify-center text-charcoal/60 hover:text-charcoal transition-colors duration-200 focus-ring rounded-full"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Text Panel */}
              <div className="w-full lg:w-[380px] xl:w-[420px] p-6 md:p-8 lg:p-10 flex flex-col bg-white lg:border-l border-neutral-gray/15">
                {/* Category */}
                <span className="font-mono text-xs text-medium-gray tracking-wider uppercase mb-4">
                  {product.category}
                </span>

                {/* Title */}
                <h2 className="font-mono text-2xl md:text-3xl font-normal text-charcoal tracking-tight mb-2">
                  {product.title}
                </h2>

                {/* Year */}
                <p className="font-mono text-sm text-medium-gray mb-8">
                  {product.year}
                </p>

                {/* Description */}
                <p className="text-base text-dark-gray leading-relaxed mb-8 flex-1">
                  {product.description}
                </p>

                {/* Specifications */}
                {product.specs && (
                  <div className="space-y-5 mb-8">
                    {product.specs.materials && (
                      <div>
                        <p className="font-mono text-xs text-medium-gray tracking-wider uppercase mb-1.5">
                          Materials
                        </p>
                        <p className="text-sm text-charcoal">{product.specs.materials.join(', ')}</p>
                      </div>
                    )}

                    {product.specs.dimensions && (
                      <div>
                        <p className="font-mono text-xs text-medium-gray tracking-wider uppercase mb-1.5">
                          Dimensions
                        </p>
                        <p className="text-sm text-charcoal">{product.specs.dimensions}</p>
                      </div>
                    )}

                    {product.specs.colors && (
                      <div>
                        <p className="font-mono text-xs text-medium-gray tracking-wider uppercase mb-1.5">
                          Colors
                        </p>
                        <p className="text-sm text-charcoal">{product.specs.colors.join(', ')}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Keyboard hint */}
                <div className="pt-6 border-t border-neutral-gray/15">
                  <p className="font-mono text-xs text-medium-gray/80 text-center tracking-wide">
                    <span className="inline-block px-1.5 py-0.5 bg-light-gray rounded text-[10px]">←</span>
                    <span className="inline-block px-1.5 py-0.5 bg-light-gray rounded text-[10px] mx-1">→</span>
                    <span className="ml-1">navigate</span>
                    <span className="mx-3 text-neutral-gray">·</span>
                    <span className="inline-block px-1.5 py-0.5 bg-light-gray rounded text-[10px]">esc</span>
                    <span className="ml-1">close</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
