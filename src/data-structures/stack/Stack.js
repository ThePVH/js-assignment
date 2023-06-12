/** Class representing a stack.  */
export class Stack {
  /**
   * Inserts a new element to the stack.
   * @param element - New element.
   */

  constructor() {
    this.items = {}
    this.firstIndex = 0
  }

  push(element) {
    if (element === undefined) {
      throw new Error('Method "push()" not implemented')
    }

    this.items[this.firstIndex] = element
    this.firstIndex++
    return element
  }

  /**
   * Removes the most recent element from the stack and returns it.
   * If the stack is empty, undefined is returned.
   * @returns - The most recent element or undefined.
   */
  pop() {
    if (this.firstIndex === 0) {
      return undefined
      // throw new Error('Method "pop()" not implemented')
    }

    const element = this.items[this.firstIndex - 1]
    delete this.items[this.firstIndex - 1]
    this.firstIndex--
    return element
  }

  /**
   * Returns the most recent element in the stack but does not remove it.
   * If the stack is empty, undefined is returned.
   * @returns - The most recent element or undefined.
   */
  peek() {
    if (this.firstIndex === 0) {
      return undefined
      throw new Error('Method "peek()" not implemented')
    }

    return this.items[this.firstIndex - 1]
  }
}
