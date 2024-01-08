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
