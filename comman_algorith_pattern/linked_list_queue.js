class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;

    }
    enqueue(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.size === 1) {
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return temp;

    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}