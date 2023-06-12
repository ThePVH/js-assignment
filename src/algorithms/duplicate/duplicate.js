/**
 * Returns a new array containing duplicated original array values.
 * @param {Array} arr - Array of elements.
 * @returns {Array} - Duplicated array.
 */
export function duplicate(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Function "duplicate()" not implemented')
  }

  return [...arr, ...arr]
}
