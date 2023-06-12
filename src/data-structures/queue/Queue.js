/** Class representing a queue.  */
export class Queue {
  /**
   * Inserts a new element to the queue.
   * @param element - New element.
   */

  constructor() {
    this.items = {}
    this.firstIndex = 0
    this.lastIndex = 0
  }

  enqueue(element) {
    if (element === undefined) {
      throw new Error('Method "enqueue()" not implemented')
    }

    this.items[this.lastIndex] = element
    this.lastIndex++
    return element
  }

  /**
   * Removes the first element from the queue and returns it.
   * If the queue is empty, undefined is returned.
   * @returns - First element in the queue or undefined.
   */
  dequeue() {
    if (this.firstIndex === this.lastIndex) {
      return undefined
      // throw new Error('Method "dequeue()" not implemented')
    }

    const element = this.items[this.firstIndex]
    delete this.items[this.firstIndex]
    this.firstIndex++
    return element
  }

  /**
   * Returns the first element in the queue but does not remove it.
   * If the queue is empty, undefined is returned.
   * @returns - First element in the queue or undefined.
   */
  peek() {
    if (this.firstIndex === this.lastIndex) {
      return undefined
      // throw new Error('Method "peek()" not implemented')
    }

    return this.items[this.firstIndex]
  }
}
