/**
 * Returns a new array containing only one copy of each element in the original array.
 * @param {Array} arr - Array of values.
 * @returns {Array} - Array of unique values.
 */
export function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Function "unique()" not implemented')
  }

  return [...new Set(arr)]
}
