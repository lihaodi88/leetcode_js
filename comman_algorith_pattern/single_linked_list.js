class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    //console all the element from the linked list
    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
    //push an element from then end of the linked list
    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            let temp = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;

        return this;
    }
    //remove an element from the end of the linked list
    pop() {
        if(!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;  
        if(this.length ===0 ){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    //remove the head element in linked list
    shift() {
        if(!this.head) {
            return undefined;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length --;
        if(this.length == 0) {
            this.tail = null;
        }
        return currentHead;
    }
    //push a node at the beginning of the linked list
    unshift(val) {
        let newHead = new Node(val);
        if(!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this
    }
    //get a node by its position
    get(index) {
        if(index < 0 || index > this.length) {
            return null;
        } else {
            let counter = 0;
            let current = this.head;
            while(counter !== index) {
                current = current.next;
                counter++;
            }
            return current;

        }
    }
    //set the node value 
    set(index, value) {
        let node = this.get(index);
        if(node) {
            node.val = value;
            return true;
        } else {
            return false;
        }
    }
    //insert the node at index i
    insert(index, val) {
        if(index < 0 || index > this.length) {
            return false;
        }
        if(index === this.length) {
            this.push(val);
            return true;
        }
        if(index === 0) {
            this.unshift(val);
            return true
        }
        var newNode = new Node(val);
        var prev = this.get(index-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    //remove the node at index i
    remove(index) {
        if(index<0 || index > this.length) {
            return undefined;
        }
        if(index === this.length-1) {
            return this.pop();
        }
        if(index === 0) {
            return this.shift();
        }
        let prev = this.get(index);
        prev.next = prev.next.next;
        this.length--;
        return prev.next.next;
    }

    //print all the values in order for the linked list
    print() {
        var arr = [];
        var current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr)
    }

    //reverse the link list
 }