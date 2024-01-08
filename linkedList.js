import Node from "./node.js";

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

  size() {
    let current = this.listHead;
    let counter = 0;
    while (current != null) {
      counter++
      current = current.nextNode
    }
    console.log(`List Size: ${counter}`);
  }

  head() {
    if (this.listHead) {
      let firstNodeValue = this.listHead.value;
      console.log(`First Node: ${firstNodeValue}`);
    } else {
      console.log('The linked list is empty.');
    }
  }  

  print() {
    let current = this.listHead;
    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }
}
