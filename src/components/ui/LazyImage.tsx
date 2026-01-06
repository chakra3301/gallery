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

  return (
    <div className="relative w-full h-full overflow-hidden bg-off-white">
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
        unoptimized={process.env.NODE_ENV === 'development'}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-off-white to-light-gray animate-pulse" />
      )}
    </div>
  );
};
