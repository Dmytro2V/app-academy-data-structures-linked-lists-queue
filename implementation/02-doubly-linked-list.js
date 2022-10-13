// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
           // O(1)
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            newNode.next = this.head;
            //newNode.prev = null;
            this.head.prev = newNode;            
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            newNode.prev = this.tail;
            //newNode.next = null;
            this.tail.next = newNode;            
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
          // O(1)
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return; // empty
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

    removeFromTail() {
        // Remove node at tail
        if (!this.tail) return; // empty
        let removedVal = this.tail.value;
        if (this.head === this.tail) {// 1 node
            this.head = null;
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.length--;
        return removedVal;

        // Write your hypothesis on the time complexity of this method here
           // O(1)        
    }

    peekAtHead() {
        // Return value of head node
        if (this.head) return this.head.value;

        // Write your hypothesis on the time complexity of this method here
          // O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if (this.tail) return this.tail.value;
        
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
