class Node {
    constructor(val, next, prev) {
        this.val = val;
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

    //push a node in the end of the list
    push(val) {
        let newTail = new Node(val);
        if(!this.head) {
            this.head = this.tail = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;
            this.tail = newTail;
        }
        this.length++;
        return this
    }
    //pop a node from the end of the list
    pop() {
        if(!this.head) {
            return undefined;
        }
        let temp = this.tail;
        if(this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length --;
        return temp;
    }
    //shift remove node from the beginning from the list
    shift() {
        if(!this.head) {
            return undefined;
        }
        if(this.length === 1) {
            this.head = this.tail = null;
            this.length --;
            return null;
        } else {
            let temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
            this.length --;
            return temp;
        }
    }
    //unshift
    unshift(val) {
        let newHead = new Node(val);
        if(!this.head) {
            this.head = this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head.prev = newHead;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    //get the node at index i;
    get(index) {
        if(!this.head || index < 0 || index > this.length-1) {
            return undefined;
        }
        let midIndex = Math.floor(index/2);
        let counter;
        let current;
        if(index < midIndex) {
            current = this.head;
            counter = 0;
            while(counter !== index) {
                current = current.next;
                current++;
            }
            return current;
        } else {
            current = this.tail;
            counter = this.length - 1;
            while(counter !==index) {
                current = current.prev;
                counter --;
            }
            return current;
        }
    }
    //set a node value
    set(index, value) {
        let oldNode = this.get(index);
        if(oldNode) {
            oldNode.val = value;
            return true;
        } else {
            return false;
        }
    }

    //insert a node at an index
    insert(index, value) {
        if(index < 0 || index >= this.length) {
            return false;
        } else {
            if(index ===0) {
                 this.unshift(value);
                 return true
            } 
            if(index === this.length-1) {
                this.push(value);
                return true;
            }  
            let prevNode = this.get(index-1);
            let nextNode = prevNode.next;
            let newNode = new Node(value);
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            this.length++;
            return true
            
        }
    }
    //remove an element from a list
    remove(index) {
        if(index < 0 || index >= this.length) {
            return false;
        } else {
            if(index === 0) {
                
                return this.shift();
            }
            if(index === this.length-1) {
                
                return this.pop();
            }  
            let removedNode = this.get(index);
            let prevNode = removedNode.prev;
            let nextNode = removedNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            removedNode.prev = null;
            removedNode.next = null;
            this.length --;
            return removedNode;
        }
    }

}
let list = new DoublyLinkedList();
list.push(1)
list.push(2)
list.push(3)