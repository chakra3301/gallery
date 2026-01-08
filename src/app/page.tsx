import { Hero } from '@/components/hero/Hero';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { About } from '@/components/about/About';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Gallery Section */}
      <GalleryGrid />

      {/* About/Studio Section */}
      <About />

      {/* Footer */}
      <Footer />
    </>
  );
}
