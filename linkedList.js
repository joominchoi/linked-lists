/* eslint-disable import/extensions */
/* eslint-disable no-console */
import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.listHead) {
      this.listHead = newNode;
    } else {
      let current = this.listHead;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.listHead;
    this.listHead = newNode;
  }

  head() {
    if (this.listHead) {
      const firstNodeValue = this.listHead.value;
      console.log(`First Node: ${firstNodeValue}`);
    } else {
      console.log('The linked list is empty.');
    }
  }

  tail() {
    let current = this.listHead;

    while (current && current.nextNode) {
      current = current.nextNode;
    }

    if (current) {
      console.log(`Last Node: ${current.value}`);
    } else {
      console.log('The linked list is empty.');
    }
  }

  at(index) {
    if (index < 0) {
      console.log('Index must be non-negative.');
      return;
    }

    let current = this.listHead;
    let currentIndex = 0;

    while (current && currentIndex < index) {
      current = current.nextNode;
      currentIndex += 1;
    }

    if (current) {
      console.log(`Value at index ${index}: ${current.value}`);
    } else {
      console.log(`Index ${index} is out of bounds.`);
    }
  }

  pop() {
    if (!this.listHead) {
      console.log('The linked list is empty.');
      return;
    }

    let current = this.listHead;
    let previous = null;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    if (previous === null) {
      this.listHead = null;
    } else {
      previous.nextNode = null;
    }

    console.log('Last node removed.');
  }

  size() {
    let current = this.listHead;
    let counter = 0;
    while (current != null) {
      counter += 1;
      current = current.nextNode;
    }
    console.log(`List Size: ${counter}`);
  }

  print() {
    if (this.listHead) {
      let current = this.listHead;
      while (current) {
        console.log(current.value);
        current = current.nextNode;
      }
    } else {
      console.log('The linked list is empty.');
    }
  }
}
