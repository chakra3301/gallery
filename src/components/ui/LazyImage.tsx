'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

export interface LazyImageProps extends Omit<ImageProps, 'onLoad'> {
  fallback?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallback = '/images/products/placeholder.jpg',
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // If className includes h-auto or specific sizing, don't wrap in full-height container
  const hasAutoHeight = className?.includes('h-auto');
  const hasObjectContain = className?.includes('object-contain');
  
  return (
    <div className={cn(
      "relative overflow-hidden bg-off-white",
      hasAutoHeight ? "w-full flex items-center justify-center" : "w-full h-full",
      hasObjectContain && "flex items-center justify-center"
    )}>
      <Image
        src={error ? fallback : src}
        alt={alt}
        className={cn(
          'transition-all duration-500',
          isLoading ? 'blur-sm scale-105 opacity-0' : 'blur-0 scale-100 opacity-100',
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={(e) => {
          console.error('Image load error:', src, e);
          setError(true);
          setIsLoading(false);
        }}
        unoptimized={true}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-off-white to-light-gray animate-pulse" />
      )}
    </div>
  );
};
