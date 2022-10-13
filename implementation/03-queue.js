const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        if (this.length > 0) {
            newNode.next = this.tail;            
            this.tail.next = newNode;            
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;


        // Write your hypothesis on the time complexity of this method here
         // O(1)
    }

    dequeue() {
        // Remove node from front of queue (linked list)
          // Remove node at head
          if (!this.head) return null; // empty
          let removedVal = this.head.value;
          if (this.head === this.tail) {// 1 node
              this.head = null;
              this.tail = null
          } else {
              this.head = this.head.next
              this.head.prev = null
          }
          this.length--;
          return removedVal;
          // Write your hypothesis on the time complexity of this method here
             // O(1)
      
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
