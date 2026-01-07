import { Hero } from '@/components/hero/Hero';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { VideoCarousel } from '@/components/video/VideoCarousel';
import { About } from '@/components/about/About';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Gallery Section */}
      <GalleryGrid />

      {/* Video Carousel Section */}
      <VideoCarousel />

      {/* About/Studio Section */}
      <About />

      {/* Footer */}
      <Footer />
    </>
  );
}
