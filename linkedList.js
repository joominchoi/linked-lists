import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let current = this.head;
    let counter = 0;
    while (current != null) {
      counter++
      current = current.nextNode
    }
    console.log(`List Size: ${counter}`);
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }
}
