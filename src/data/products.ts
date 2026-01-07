import { Product } from './types';

/**
 * Sample product data with placeholders
 * Replace with real product data and images as available
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
    title: 'Structural Tote',
    category: 'accessories',
    description:
      'Architectural bag design with internal frame. Stands upright when empty. Hidden laptop compartment with magnetic closure.',
    year: 2025,
    images: {
      primary: '/images/products/placeholder.jpg',
    },
    specs: {
      materials: ['Waxed canvas', 'Aluminum frame', 'Leather handles'],
      dimensions: '38cm × 32cm × 12cm',
      colors: ['Charcoal', 'Navy'],
    },
    tags: ['structured', 'professional', 'architectural'],
  },
  {
    id: 'prod-006',
    title: 'Layered Overshirt',
    category: 'apparel',
    description:
      'Double-layer construction with contrast stitching throughout. Oversized fit with cinch waist detail and extended sleeves.',
    year: 2025,
    images: {
      primary: '/images/products/placeholder.jpg',
      gallery: ['/images/products/placeholder.jpg'],
    },
    specs: {
      materials: ['Japanese cotton twill', 'Corozo buttons'],
      colors: ['Ash', 'Ink'],
    },
    tags: ['contemporary', 'oversized', 'crafted'],
  },
  {
    id: 'prod-007',
    title: 'Experimental Headwear',
    category: 'experimental',
    description:
      'Sculptural headpiece exploring balance between function and form. Collapsible structure with memory wire frame.',
    year: 2026,
    images: {
      primary: '/images/products/placeholder.jpg',
    },
    specs: {
      materials: ['Shape-memory alloy', 'Technical mesh', '3D-printed joints'],
      colors: ['Matte black'],
    },
    tags: ['conceptual', 'sculptural', 'limited'],
  },
  {
    id: 'prod-008',
    title: 'Geometric Pendant',
    category: 'objects',
    description:
      'Precision-machined pendant with rotating elements. Minimal surface treatment to showcase material texture.',
    year: 2025,
    images: {
      primary: '/images/products/placeholder.jpg',
      gallery: ['/images/products/placeholder.jpg'],
    },
    specs: {
      materials: ['Brushed titanium', 'Ceramic bearings'],
      dimensions: '4cm × 4cm × 0.8cm',
    },
    tags: ['jewelry', 'minimal', 'precision'],
  },
  {
    id: 'prod-009',
    title: 'High-Top Technical Sneaker',
    category: 'footwear',
    description:
      'Performance-inspired design with exaggerated sole geometry. Seamless upper construction with integrated lacing system.',
    year: 2026,
    images: {
      primary: '/images/products/placeholder.jpg',
    },
    specs: {
      materials: ['Knit textile', 'TPU cage', 'EVA midsole'],
      colors: ['Triple white', 'Core black'],
    },
    tags: ['performance', 'futuristic', 'comfort'],
  },
  {
    id: 'prod-010',
    title: 'Archive Field Jacket',
    category: 'apparel',
    description:
      'Refined take on military surplus silhouettes. Updated with contemporary fabrics and minimal branding.',
    year: 2025,
    images: {
      primary: '/images/products/placeholder.jpg',
      gallery: [
        '/images/products/placeholder.jpg',
        '/images/products/placeholder.jpg',
      ],
    },
    specs: {
      materials: ['Cotton sateen', 'Quilted lining', 'Matte hardware'],
      colors: ['Olive drab', 'Stone'],
    },
    tags: ['heritage', 'military', 'timeless'],
  },
];
