// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = head ? 1:0
    }

    addToHead = (val) => { 
        // Add node of val to head of linked list
      let newNode = new SinglyLinkedNode(val);
      newNode.next = this.head
      this.head = newNode;
      this.length++
      return this;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        // O(n):
        if (!this.head) return 0;
        let curr = this.head;
        let length = 1;
        while (curr.next) {
            curr = curr.next;
            length++;
        }
        return length

        // O(1):
        return this.length
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        if (!this.head) return 0;
        let sum = this.head.value;
        let curr = this.head;
        
        while (curr.next) {           
            curr = curr.next;            
            sum += curr.value;
        }
        return sum;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes
        if (this.length === 0) return 0;
       return this.sumOfNodes()/this.length;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if (!this.head || n >= this.length) return null;        
        let curr = this.head;
        
        for (let i = 0; i < n; i++) {
            curr = curr.next;
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findMid() {
        // Returns the middle node
        let middle = this.length % 2 === 0 ? this.length / 2 - 1 : Math.floor(this.length / 2);
        return this.findNthNode(middle);

        // Implement this as a singly linked list then as a doubly linked list
          // double - below 
        // How do the implementation for singly and doubly vary if at all?
          // The same, because of findNthNode(n) use.          
        // Write your hypothesis on the time complexity of this method here
          // O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let revList = new SinglyLinkedList();

        //if (!this.head) return revList;        

        let curr = this.head;       

        while (curr) {                        
            revList.addToHead(curr.value);
            curr = curr.next; 
        }
        return revList;
        // Write your hypothesis on the time complexity of this method here
           //  O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let revList = this.reverse()

        this.head = null // make empty
        this.length = 0
          // copy     
        
        let currR = revList.head
        let curr = this.addToTail(currR.value)
        while (currR.next) {                       
            currR = currR.next;            
            curr = this.addToTail(currR.value);
        }

        // Write your hypothesis on the time complexity of this method here
           // O(n^2) because of tail use on every node. O(n) if using addToHead
           
    }
}

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
        let newNode = new DoublyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }
    findNthNode(n) {
        // Returns the node at the nth index from the head
        if (!this.head || n >= this.length) return null;        
        let curr = this.head;
        
        for (let i = 0; i < n; i++) {
            curr = curr.next;
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findMid() {
        // Returns the middle node
        let middle = this.length % 2 === 0 ? this.length / 2 - 1 : Math.floor(this.length / 2);
        return this.findNthNode(middle);

        // Implement this as a singly linked list then as a doubly linked list
          // Can be done with moving from 2 sides if without length
        // How do the implementation for singly and doubly vary if at all?
          // The same, because of findNthNode(n) use.
        // Write your hypothesis on the time complexity of this method here
          // O(n)
    }

    reverse() {
     // Returns a new reversed version of the linked list
     let revList = new SinglyLinkedList();

     let curr = this.head;
     
     while (curr) {            
        revList.addToHead(curr.value);
        curr = curr.next; 
     }
     return revList;
     // Write your hypothesis on the time complexity of this method here
        //  O(n)  
    }

    reverseInPlace() {
        // Reverses the linked list in-place
      let head = this.head;
      let tail = this.tail;
      while (head !== tail && head.next != tail) { 
        console.log('swap ', head.value, tail.value);
        [head.value, tail.value] = [tail.value, head.value];
        head = head.next
        tail = tail.prev
        console.log('next ', head.value, tail.value);        
      }  
      [head.value, tail.value] = [tail.value, head.value];

        // Write your hypothesis on the time complexity of this method here
           // O(n)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
