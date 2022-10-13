// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
      let newNode = new SinglyLinkedNode(val);
      newNode.next = this.head
      this.head = newNode;
      this.length++
      return this;
        // Write your hypothesis on the time complexity of this method here
      // O(1)
    }

    addToTail(val) {
              //fixed          // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
          //O(n)
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (this.head === null) return //undefined;
        let retHead = this.head;
        this.head = this.head.next       
        
        this.length--
        return retHead;
        // Write your hypothesis on the time complexity of this method here
           // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (this.head === null) return //undefined;
        this.length--        
        // let find the tail:        
        let curr = this.head; 

        if (this.head.next === null) {// if 1 element
            this.head = null
            return curr;
        }
        while (curr.next.next) {
            curr = curr.next;
        }
        let removed = curr.next;
        curr.next = null;

        return removed;


        // Write your hypothesis on the time complexity of this method here
         // O(n)
    }

    peekAtHead() {
        // Return value of head node
        if (this.head) return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    print() {
        // Print out the linked list
        if (!this.head) return

        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }        
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
/* linkedList = new SinglyLinkedList();
console.log(linkedList.addToHead('B')); 
console.log(linkedList.addToHead('A'));
console.log('--');
console.log(linkedList.removeFromHead());
console.log(linkedList);
console.log();
console.log(linkedList.removeFromHead());
console.log(linkedList);
console.log(linkedList.removeFromHead());
console.log(linkedList); */