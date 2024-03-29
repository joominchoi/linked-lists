# The Odin Project: Linked Lists

**Course reference pages:** 
[Project: Linked Lists](https://www.theodinproject.com/lessons/javascript-linked-lists)

## Assignment
### You will need two classes or factories:
1. LinkedList class / factory, which will represent the full list.
2. Node class / factory, containing a value property and a link to the nextNode, set both as null by default.

Build the following functions in your linked list class:

1. append(value) adds a new node containing value to the end of the list
2. prepend(value) adds a new node containing value to the start of the list
3. size returns the total number of nodes in the list
4. head returns the first node in the list
5. tail returns the last node in the list
6. at(index) returns the node at the given index
7. pop removes the last element from the list
8. contains(value) returns true if the passed in value is in the list and otherwise returns false.
9. find(value) returns the index of the node containing value, or null if not found.
10. toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

#### Extra credit
1. insertAt(value, index) that inserts a new node with the provided value at the given index.
2. removeAt(index) that removes the node at the given index.

Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.

**Thoughts:**

**Learnings:**
- prepend
  - When you prepend a new value to the linked list, the new value becomes the new head of the list, and its 'nextNode' property is set to value of the previous head. So the existing elements are pushed down the list rather than getting overwritten, staying connected through the 'nextNode' references.
- head
  - Be wary of clashes with property names. I had a problem because I also had a property named 'head'.
  - Although 'function' and 'method' are used interchangeably, it's quite common to use the term 'method' for functions within a class or an object.
- pop
  - To remove the last node from a singly linked list, you need to traverse the list until you reach the second-to-last node and update its 'nextNode' pointer, rather than setting the actual last node as null.

**Recapping:**
