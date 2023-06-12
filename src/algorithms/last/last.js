/**
 * Returns the last element of the given array or undefined.
 * @param {Array} arr - Array of elements.
 * @returns - Last element of an array or undefined.
 */
export function last(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Function "last()" not implemented')
  }

  return arr[arr.length - 1]
}
