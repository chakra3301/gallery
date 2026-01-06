import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable optimization to fix 400 errors on Vercel
  },
  reactStrictMode: false, // Disabled for Framer Motion compatibility
};

export default nextConfig;
