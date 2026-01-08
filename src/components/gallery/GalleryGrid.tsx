'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { Product } from '@/data/types';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { fadeInUpVariant, staggerContainerVariant, customEasing } from '@/lib/constants';

export const GalleryGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNext = () => {
    if (!selectedProduct) return;
    const currentIndex = products.findIndex((p) => p.id === selectedProduct.id);
    const nextIndex = (currentIndex + 1) % products.length;
    setSelectedProduct(products[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedProduct) return;
    const currentIndex = products.findIndex((p) => p.id === selectedProduct.id);
    const previousIndex = (currentIndex - 1 + products.length) % products.length;
    setSelectedProduct(products[previousIndex]);
  };

  return (
    <>
      <section id="gallery" className="py-20 md:py-28 lg:py-32 px-6 md:px-8 lg:px-12 max-w-gallery mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: customEasing.easeOutQuart }}
          className="mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="font-mono text-xs text-medium-gray tracking-widest uppercase">
            Collection
          </h2>
        </motion.div>

        {/* Gallery items */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-20 md:space-y-28 lg:space-y-36"
        >
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              variants={fadeInUpVariant}
              className="w-full"
            >
              {/* Two-column staggered layout on desktop */}
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 md:gap-12 lg:gap-16 items-start lg:items-center`}
              >
                {/* Image section */}
                <div className="w-full lg:w-[62%]">
                  <ProductCard
                    product={product}
                    size="large"
                    onClick={() => setSelectedProduct(product)}
                  />
                </div>

                {/* Info section */}
                <div className="w-full lg:w-[38%] flex flex-col justify-center lg:pl-4">
                  {/* Category tag */}
                  <span className="font-mono text-xs text-medium-gray tracking-wider uppercase mb-4">
                    {product.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-mono text-2xl md:text-3xl lg:text-4xl font-normal text-charcoal tracking-tight mb-3">
                    {product.title}
                  </h3>

                  {/* Year */}
                  <p className="font-mono text-sm text-medium-gray mb-6">
                    {product.year}
                  </p>

                  {/* Description */}
                  <p className="text-base text-dark-gray leading-relaxed max-w-md">
                    {product.description}
                  </p>

                  {/* View details hint */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-8 font-mono text-xs text-charcoal tracking-wider uppercase group inline-flex items-center gap-2 focus-ring rounded"
                  >
                    <span className="border-b border-charcoal/30 group-hover:border-charcoal transition-colors duration-300">
                      View Details
                    </span>
                    <svg
                      className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </>
  );
};
