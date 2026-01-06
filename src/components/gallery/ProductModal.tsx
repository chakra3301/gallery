'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/types';
import { LazyImage } from '../ui/LazyImage';

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

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product.id]);

  // Get all available images (gallery + primary as fallback)
  const allImages = product.images.gallery && product.images.gallery.length > 0
    ? product.images.gallery
    : [product.images.primary];
  
  const currentImage = allImages[currentImageIndex];

  const handleNextImage = () => {
    if (currentImageIndex < allImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      onNext(); // Move to next product if at last image
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      onPrevious(); // Move to previous product if at first image
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        if (currentImageIndex < allImages.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        } else {
          onNext();
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentImageIndex > 0) {
          setCurrentImageIndex(currentImageIndex - 1);
        } else {
          onPrevious();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious, currentImageIndex, allImages.length]);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50"
          />

          {/* Fullscreen modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <div className="w-full h-full max-w-7xl mx-auto flex flex-col lg:flex-row bg-white">
              {/* Image Section - Fullscreen */}
              <div className="relative flex-1 bg-off-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <LazyImage
                      src={currentImage}
                      alt={`${product.title} - Image ${currentImageIndex + 1}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      unoptimized={true}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Image indicator dots */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-charcoal w-6'
                            : 'bg-neutral-gray hover:bg-dark-gray'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Navigation arrows - minimal */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePreviousImage();
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-charcoal hover:text-dark-gray transition-colors z-10"
                  aria-label={currentImageIndex > 0 ? "Previous image" : "Previous product"}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-charcoal hover:text-dark-gray transition-colors z-10"
                  aria-label={currentImageIndex < allImages.length - 1 ? "Next image" : "Next product"}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* Close button - top right */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-charcoal hover:text-dark-gray transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Text Panel - Side */}
              <div className="w-full lg:w-96 p-8 lg:p-12 flex flex-col bg-white border-l border-neutral-gray/20">
                {/* Title */}
                <h2
                  className="text-3xl md:text-4xl font-normal text-charcoal mb-2"
                  style={{ fontFamily: 'var(--font-geist-mono)' }}
                >
                  {product.title}
                </h2>

                {/* Year */}
                <p className="text-sm text-dark-gray mb-8">{product.year}</p>

                {/* Description */}
                <p className="text-base text-charcoal leading-relaxed mb-8 flex-1">
                  {product.description}
                </p>

                {/* Specifications */}
                {product.specs && (
                  <div className="mb-8 space-y-6">
                    {product.specs.materials && (
                      <div>
                        <p className="text-xs text-dark-gray uppercase tracking-wider mb-2">
                          Materials
                        </p>
                        <p className="text-sm text-charcoal">{product.specs.materials.join(', ')}</p>
                      </div>
                    )}

                    {product.specs.dimensions && (
                      <div>
                        <p className="text-xs text-dark-gray uppercase tracking-wider mb-2">
                          Dimensions
                        </p>
                        <p className="text-sm text-charcoal">{product.specs.dimensions}</p>
                      </div>
                    )}

                    {product.specs.colors && (
                      <div>
                        <p className="text-xs text-dark-gray uppercase tracking-wider mb-2">
                          Colors
                        </p>
                        <p className="text-sm text-charcoal">{product.specs.colors.join(', ')}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Minimal keyboard hint */}
                <div className="pt-6 border-t border-neutral-gray/20">
                  <p className="text-xs text-dark-gray text-center">
                    ← → navigate • ESC close
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
