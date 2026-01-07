import { Product } from './types';

/**
 * Product data
 */
export const products: Product[] = [
  {
    id: 'prod-001',
    title: 'Starborn Hoodie',
    category: 'apparel',
    description:
      'A hand-crafted hoodie featuring chaotic hand screen printing. Each piece is unique with intricate designs and bold graphics.',
    year: 2025,
    images: {
      primary: '/images/products/iron cross.png',
      gallery: [
        '/images/products/ic 1.png',
        '/images/products/ic2.png',
        '/images/products/ic3.png',
      ],
    },
    specs: {
      materials: ['Cotton', 'Hand screen-printed graphics'],
      colors: ['Black'],
    },
    tags: ['handcrafted', 'limited', 'screen-print', 'chaotic'],
    featured: true,
  },
  {
    id: 'prod-002',
    title: 'Yu-Gi-Oh x ARK Concept Jacket',
    category: 'apparel',
    description:
      'Concept collaboration piece featuring stylized Blue-Eyes Dragon graphics and OTS branding. Light denim construction with bold white screen-printed design and customDTG print across the back. hand made in Japan',
    year: 2025,
    images: {
      primary: '/images/products/ygo.png', // ygo.png for gallery preview
      gallery: [
        '/images/products/yu-gi-oh-ark-jacket-detail.png',
        '/images/products/yugi back.png',
        '/images/products/yu-gi-oh-ark-jacket.png',
      ], // detail, back view, and jacket images for modal
    },
    specs: {
      materials: ['Denim', 'Screen-printed/ DTG printed graphics'],
      colors: ['Light blue'],
    },
    tags: ['collaboration', 'limited', 'graphic'],
  },
  {
    id: 'prod-003',
    title: 'Tokyo Abyss',
    category: 'apparel',
    description:
      'A collection showcasing Tokyo Angels and Toyoko Kids designs. Streetwear pieces featuring Japanese text, starburst graphics, and urban Tokyo aesthetics. Part of the STARSYSTEM series.',
    year: 2025,
    images: {
      primary: '/images/products/tokyo-abyss.png',
      gallery: [
        '/images/products/tokyo-angel-promo.png',
        '/images/products/toyoko-kids-promo.png',
      ],
    },
    specs: {
      materials: ['Cotton', 'Screen-printed graphics'],
      colors: ['White', 'Gray', 'Pink accents'],
    },
    tags: ['streetwear', 'tokyo', 'starsystem', 'limited'],
  },
  {
    id: 'prod-004',
    title: 'Arkturus',
    category: 'apparel',
    description:
      'A collection of 50 t-shirts made to be earned by creative minds whose aura represented that of a soul bond for divinity around the world.',
    year: 2025,
    images: {
      primary: '/images/products/arkturus.png',
      gallery: [
        '/images/products/turus back.png',
        '/images/products/turus f.png',
        '/images/products/ark/11-01895.JPG',
        '/images/products/ark/11-01900.JPG',
        '/images/products/ark/11-01903.JPG',
        '/images/products/ark/11-01910.JPG',
        '/images/products/ark/124C3C7F-90C2-41BE-85C3-7AC30CDB6266.JPG',
        '/images/products/ark/6F56D8AC-D6F3-40E1-A54D-48B44509BB33.JPG',
        '/images/products/ark/AA44872D-9DC8-44A6-8733-76129E7FC3FD.JPG',
        '/images/products/ark/C038E48F-B276-46B3-B073-C1DD3319EF3C.JPG',
        '/images/products/ark/IMG_0100.JPG',
        '/images/products/ark/IMG_0101.JPG',
        '/images/products/ark/IMG_7359.PNG',
        '/images/products/ark/IMG_8260.JPG',
        '/images/products/ark/IMG_8863.PNG',
      ],
    },
    specs: {
      materials: ['Cotton', 'Screen-printed graphics'],
      colors: ['Black'],
    },
    tags: ['limited', 'divine', 'creative', 'soul-bond'],
    featured: true,
  },
  {
    id: 'prod-005',
    title: 'Star System 444',
    category: 'apparel',
    description:
      'A collection of t-shirts featuring the STARSYSTEM design. Streetwear pieces with bold graphics and urban aesthetics.',
    year: 2025,
    images: {
      primary: '/images/products/starsys.png',
      gallery: [
        '/images/products/star/47051f19-6bb5-416a-9fe6-4214d66a688e.JPG',
        '/images/products/star/69657CC2-BBE9-48C9-8521-19ECD2026891.JPG',
        '/images/products/star/IMG_0102.JPG',
        '/images/products/star/IMG_9246.PNG',
        '/images/products/star/IMG_9247.PNG',
        '/images/products/star/IMG_9248.PNG',
        '/images/products/star/IMG_9249.PNG',
        '/images/products/star/IMG_9250.PNG',
        '/images/products/star/IMG_9251.PNG',
        '/images/products/star/copy_CD450EC2-7D5F-45DB-B914-144A1B7D0310.MOV',
        '/images/products/star/copy_ED7CA329-D822-445A-8C96-6378808BB9C6.MOV',
        '/images/products/star/copy_FF10298E-4BC2-4111-BEA0-7A4374296FE2.MOV',
      ],
    },
    specs: {
      materials: ['Cotton', 'Screen-printed graphics'],
      colors: ['Black', 'White'],
    },
    tags: ['streetwear', 'starsystem', 'limited', 'graphic'],
  },
];
