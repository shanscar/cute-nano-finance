// @platform: shared
/**
 * Application-wide configuration constants
 * 
 * @description Central source of truth for app metadata and UI settings.
 * Modify these values to customize app branding and behavior.
 */

/**
 * Core application metadata
 * @constant
 */
export const APP_CONFIG = {
  /** Application display name shown in UI */
  name: 'Money Flow',
  /** Tagline displayed on main dashboard */
  tagline: 'Track your finances with ease',
  /** Currency symbol used throughout the app - Hong Kong Dollar */
  currency: 'HK$',
} as const;

/**
 * Header button styling configuration
 * @constant
 * @description Controls background colors and rotation angles for header icons
 * to create playful, asymmetric brutalist design
 */
export const HEADER_BUTTONS = {
  menu: {
    /** Background color using badge design token */
    bgColor: 'bg-badge-yellow/50',
    /** Slight counter-clockwise rotation for playful effect */
    rotation: 'rotate-[-1deg]',
  },
  profile: {
    /** Background color using badge design token */
    bgColor: 'bg-badge-pink/50',
    /** Slight clockwise rotation for asymmetry */
    rotation: 'rotate-1',
  },
  back: {
    /** Background color for back button */
    bgColor: 'bg-badge-yellow/50',
    /** Slight counter-clockwise rotation */
    rotation: 'rotate-[-1deg]',
  },
  close: {
    /** Background color for close button */
    bgColor: 'bg-badge-pink/50',
    /** Slight clockwise rotation */
    rotation: 'rotate-1',
  },
} as const;
