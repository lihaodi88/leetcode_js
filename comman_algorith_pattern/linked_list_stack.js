class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = this.last = newNode;
        } else {
            let currentHead = this.first;
            this.first = newNode;
            newNode.next = currentHead;
        }
       return ++this.size;
    }
}