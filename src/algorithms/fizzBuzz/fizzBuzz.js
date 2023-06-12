/**
 * FizzBuzz is a group word game for children to teach them about division.
 * Players take turns to count incrementally, replacing any number divisible by three (3) with the word "Fizz",
 * and any number divisible by five (5) with the word "Buzz".
 * If the number is divisible by three and five (fifteen [15] for example) it is replaced by "FizzBuzz".
 *
 * Outputs the first `num` FizzBuzz numbers in array.
 * @param {number} num - Count of numbers.
 * @returns {Array} - Array of FizzBuzz numbers.
 */
export function fizzBuzz(num) {
  if (typeof num !== "number") {
    throw new Error('Function "fizzBuzz()" not implemented')
  }

  const result = []

  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz")
    } else if (i % 3 === 0) {
      result.push("Fizz")
    } else if (i % 5 === 0) {
      result.push("Buzz")
    } else {
      result.push(i)
    }
  }

  return result
}
