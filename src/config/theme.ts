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
