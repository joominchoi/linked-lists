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

  insertAt(value, index) {
    if (index < 0) {
      console.log('Index must be non-negative.');
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.listHead;
      this.listHead = newNode;
      console.log(`${value} inserted at index ${index}`);
      return;
    }

    let current = this.listHead;
    let previous = null;
    let currentIndex = 0;

    while (current && currentIndex < index) {
      previous = current;
      current = current.nextNode;
      currentIndex += 1;
    }

    if (currentIndex === index) {
      newNode.nextNode = current;
      previous.nextNode = newNode;
      console.log(`${value} inserted at index ${index}`);
    } else {
      console.log(`Index ${index} is out of bounds.`);
    }
  }

  removeAt(index) {
    if (index < 0) {
      console.log('Index must be non-negative.');
      return;
    }

    if (index === 0) {
      if (this.listHead) {
        this.listHead = this.listHead.nextNode;
        console.log(`Node at index ${index} removed.`);
      } else {
        console.log('The linked list is empty.');
      }
      return;
    }

    let current = this.listHead;
    let previous = null;
    let currentIndex = 0;

    while (current && currentIndex < index) {
      previous = current;
      current = current.nextNode;
      currentIndex += 1;
    }

    if (current && currentIndex === index) {
      // Remove in the middle or at the end
      previous.nextNode = current.nextNode;
      console.log(`Node at index ${index} removed.`);
    } else {
      console.log(`Index ${index} is out of bounds.`);
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

  contains(value) {
    if (!this.listHead) {
      console.log('The linked list is empty.');
    }

    let containsValue = false;

    let current = this.listHead;
    while (current !== null) {
      if (current.value === value) {
        containsValue = true;
        break;
      }
      current = current.nextNode;
    }

    console.log(`Contains ${value}: ${containsValue}`);
  }

  find(value) {
    if (!this.listHead) {
      console.log('The linked list is empty.');
    }

    let current = this.listHead;
    let indexPosition = 0;
    while (current !== null) {
      if (current.value === value) {
        console.log(`Index of ${value}: ${indexPosition}`);
        break;
      } else if (current.nextNode === null) {
        console.log('The linked list does not contain this value.');
        break;
      } else {
        current = current.nextNode;
        indexPosition += 1;
      }
    }
  }

  pop() {
    if (!this.listHead) {
      console.log('The linked list is empty.');
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

  isString(value) {
    return typeof value === 'string';
  }

  toString() {
    if (!this.listHead) {
      console.log('The linked list is empty.');
      return;
    }

    let current = this.listHead;
    let output = '';

    while (current !== null) {
      const valueString = this.isString(current.value)
        ? current.value
        : String(current.value);
      output += `(${valueString}) -> `;
      current = current.nextNode;
    }

    console.log(`${output}null`);
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
