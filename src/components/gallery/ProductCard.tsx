'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Product, ProductSize } from '@/data/types';
import { LazyImage } from '../ui/LazyImage';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  size: ProductSize;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  size,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer group bg-off-white w-full"
    >
      {/* Product Image - container fits to image */}
      <div className="relative w-full flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <LazyImage
            src={product.images.primary}
            alt={product.title}
            width={1200}
            height={1200}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto object-contain"
            unoptimized={true}
          />
        </motion.div>
      </div>

      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-400" />

      {/* Minimal caption - appears on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/80 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <h3
          className={cn(
            'font-normal text-charcoal mb-1',
            size === 'featured' || size === 'large'
              ? 'text-xl md:text-2xl'
              : 'text-base md:text-lg'
          )}
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          {product.title}
        </h3>
        <p className="text-sm text-dark-gray">{product.year}</p>
      </div>

      {/* Subtle shadow on hover */}
      <div className="absolute inset-0 shadow-none group-hover:shadow-soft transition-shadow duration-400 pointer-events-none" />
    </motion.div>
  );
};
