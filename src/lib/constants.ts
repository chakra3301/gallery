/**
 * Animation variants for Framer Motion
 * Refined for a premium gallery experience
 */

// Custom easing functions - smoother, more intentional
export const customEasing = {
  easeOutQuart: [0.22, 1, 0.36, 1] as const,
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  easeInOutCubic: [0.65, 0, 0.35, 1] as const,
  spring: { type: 'spring' as const, damping: 30, stiffness: 200 },
  springGentle: { type: 'spring' as const, damping: 35, stiffness: 150 },
};

// Fade in from bottom - refined timing
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: customEasing.easeOutQuart },
  },
};

// Simple fade in - longer for elegance
export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: customEasing.easeOutQuart },
  },
};

// Stagger container for grid items - refined timing
export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Scale in variant for cards - subtle
export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: customEasing.easeOutQuart },
  },
};

// Modal variants - refined
export const modalBackdropVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: customEasing.easeOutQuart }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: customEasing.easeOutQuart }
  },
};

export const modalContentVariant = {
  hidden: { opacity: 0, scale: 0.98, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: customEasing.easeOutExpo },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 8,
    transition: { duration: 0.25, ease: customEasing.easeOutQuart },
  },
};

// Image crossfade variant
export const imageCrossfadeVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: customEasing.easeOutQuart }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: customEasing.easeOutQuart }
  },
};

// Hover scale for cards
export const cardHoverVariant = {
  rest: { scale: 1 },
  hover: {
    scale: 1.015,
    transition: { duration: 0.4, ease: customEasing.easeOutQuart }
  },
};

// Image hover scale
export const imageHoverVariant = {
  rest: { scale: 1 },
  hover: {
    scale: 1.04,
    transition: { duration: 0.6, ease: customEasing.easeOutQuart }
  },
};

/**
 * Breakpoint values (must match Tailwind config)
 */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Animation durations in ms
 */
export const durations = {
  fast: 200,
  normal: 300,
  slow: 500,
  slower: 700,
} as const;
