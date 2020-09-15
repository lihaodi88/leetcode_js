class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    //Big O also log n
    insert(val) {
        let newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if(val === current.value) return undefined;
                if(val < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(val > current.value){
                    if(current.right ===null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    //Big O log n
    find(val) {
        if(this.root === null) {
            return false
        } else {
            let current = this.root;
            let found = false;
            while(current && !found) {
                if(val < current.val) {
                    current = current.left;
                } else if( val > current.val) {
                    current = current.right;
                } else {
                    found = true;
                }
            }
            if(!found) return false;
            return current;
        }
    }

    //BFS 
    BFS() {
        let data = [], queue = [], node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    //DFS- Preorder
    DFSPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    //DFS- Postorder
    DFSPostOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(current);
        return data;
    }
    //DFS - Inorder
    DFSInOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value)
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
