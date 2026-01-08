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

  const hasAutoHeight = className?.includes('h-auto');
  const hasObjectContain = className?.includes('object-contain');

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-light-gray',
        hasAutoHeight ? 'w-full flex items-center justify-center' : 'w-full h-full',
        hasObjectContain && 'flex items-center justify-center'
      )}
    >
      <Image
        src={error ? fallback : src}
        alt={alt}
        className={cn(
          'transition-all duration-600 ease-out-quart',
          isLoading
            ? 'scale-[1.02] opacity-0'
            : 'scale-100 opacity-100',
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        unoptimized={true}
        {...props}
      />

      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-light-gray via-warm-gray/50 to-light-gray animate-pulse-subtle" />
      )}
    </div>
  );
};
