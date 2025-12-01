/**
 * Design system theme constants
 * 
 * @description Defines visual styling tokens for consistent brutalist design.
 * All gradients and borders should be imported from here to maintain consistency.
 */

/**
 * Gradient definitions for backgrounds
 * @constant
 */
export const GRADIENTS = {
  /** 
   * Main app background gradient - warm yellow to cool blue transition
   * Creates a subtle, cheerful backdrop that doesn't compete with content
   */
  main: 'linear-gradient(135deg, hsl(48, 95%, 90%) 0%, hsl(48, 90%, 94%) 25%, hsl(210, 20%, 98%) 60%, hsl(210, 20%, 98%) 100%)',
} as const;

/**
 * Border width tokens for brutalist design
 * @constant
 * @description Use these Tailwind classes for consistent bold borders.
 * All borders in the app should be black for maximum contrast.
 */
export const BORDERS = {
  /** Standard border (3px) - most common use case for cards and buttons */
  standard: 'border-3',
  /** Thick border (4px) - for extra emphasis on primary actions */
  thick: 'border-4',
} as const;

/**
 * Shadow tokens for brutalist design
 * @constant
 * @description Use these for consistent offset shadows throughout the app.
 */
export const SHADOWS = {
  /** Standard shadow (3px offset) - for buttons and interactive elements */
  standard: 'shadow-[3px_3px_0px_rgba(0,0,0,1)]',
  /** Hover shadow (5px offset) - for hover states */
  hover: 'shadow-[5px_5px_0px_rgba(0,0,0,1)]',
  /** Small shadow (2px offset) - for subtle elements like cards */
  small: 'shadow-[2px_2px_0px_rgba(0,0,0,1)]',
} as const;
