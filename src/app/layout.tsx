import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { ScrollProgress } from '@/components/layout/ScrollProgress';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Archive - Original objects in original space',
  description: 'A minimalist gallery of physical design work—exploring the relationship between form, material, and function.',
  keywords: ['design', 'fashion', 'physical products', 'archive', 'collection', 'industrial', 'minimal'],
  authors: [{ name: 'Archive' }],
  icons: {
    icon: '/images/gfavi.png',
    shortcut: '/images/gfavi.png',
    apple: '/images/gfavi.png',
  },
  openGraph: {
    title: 'Archive - Original objects in original space',
    description: 'A minimalist gallery of physical design work—exploring the relationship between form, material, and function.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
