import { Product } from './types';

/**
 * Sample product data with placeholders
 * Replace with real product data and images as available
 */
export const products: Product[] = [
  {
    id: 'prod-001',
    title: 'Asymmetric Technical Jacket',
    category: 'apparel',
    description:
      'Deconstructed outerwear featuring modular components and adaptive ventilation systems. Precision-cut panels with hidden magnetic closures.',
    year: 2026,
    images: {
      primary: '/images/products/placeholder.jpg',
      gallery: [
        '/images/products/placeholder.jpg',
        '/images/products/placeholder.jpg',
      ],
    },
    specs: {
      materials: ['Recycled nylon', 'Gore-tex membrane', 'YKK zippers'],
      colors: ['Obsidian', 'Lunar grey'],
    },
    tags: ['technical', 'modular', 'sustainable'],
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
        '/images/products/yu-gi-oh-ark-jacket.png',
      ], // detail and jacket images for modal
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
    title: 'Modular Footwear System',
    category: 'footwear',
    description:
      'Interchangeable sole platform with magnetic upper attachment. Three upper styles included: technical mesh, canvas, and treated leather.',
    year: 2026,
    images: {
      primary: '/images/products/placeholder.jpg',
      gallery: [
        '/images/products/placeholder.jpg',
        '/images/products/placeholder.jpg',
      ],
    },
    specs: {
      materials: ['TPU sole', 'Cordura mesh', 'Full-grain leather'],
      colors: ['Core system (universal)', 'Uppers vary'],
    },
    tags: ['innovative', 'modular', 'versatile'],
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
