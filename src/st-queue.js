const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.first;
  }

  isEmpty() {
    return this.first === null;
  }

  enqueue(value) {
    const prevLast = this.last;
    this.last = new ListNode(value);
    
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      prevLast.next = this.last;
    }

    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      this.last = null;
      return null;
    }

    const itemValue = this.first.value;
    this.first = this.first.next;

    this.length--;

    return itemValue;
  }
}


