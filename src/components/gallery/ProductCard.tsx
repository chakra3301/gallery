'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Product, ProductSize } from '@/data/types';
import { LazyImage } from '../ui/LazyImage';
import { customEasing } from '@/lib/constants';

interface ProductCardProps {
  product: Product;
  size: ProductSize;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
}) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer group bg-light-gray w-full focus-ring rounded-sm"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      aria-label={`View ${product.title} details`}
    >
      {/* Product Image */}
      <div className="relative w-full">
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.03 },
          }}
          transition={{ duration: 0.6, ease: customEasing.easeOutQuart }}
          className="w-full"
        >
          <LazyImage
            src={product.images.primary}
            alt={product.title}
            width={1200}
            height={1200}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className="w-full h-auto object-contain"
            unoptimized={true}
          />
        </motion.div>
      </div>

      {/* Subtle overlay on hover */}
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: customEasing.easeOutQuart }}
        className="absolute inset-0 bg-gradient-to-t from-charcoal/5 to-transparent pointer-events-none"
      />

      {/* Corner indicator on hover */}
      <motion.div
        variants={{
          rest: { opacity: 0, scale: 0.9 },
          hover: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.3, ease: customEasing.easeOutQuart }}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
      >
        <svg
          className="w-4 h-4 text-charcoal"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </motion.div>
    </motion.div>
  );
};
