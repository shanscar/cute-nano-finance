// @platform: adaptable
// Note: Replace this implementation with AsyncStorage for React Native
// See CONVERSION_GUIDE.md for details

/**
 * Storage abstraction layer
 * 
 * Web implementation using localStorage.
 * For React Native, replace with AsyncStorage implementation.
 */
export const storage = {
  /**
   * Get item from storage
   */
  getItem: (key: string): string | null => {
    return localStorage.getItem(key);
  },

  /**
   * Set item in storage
   */
  setItem: (key: string, value: string): void => {
    localStorage.setItem(key, value);
  },

  /**
   * Remove item from storage
   */
  removeItem: (key: string): void => {
    localStorage.removeItem(key);
  },
};
