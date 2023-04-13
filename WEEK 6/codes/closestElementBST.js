class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        if (this.root == null) {
            this.root = new Node(data);
            return;
        }
        let cuentNode = this.root;
        while (true) {
            if (cuentNode.data > data) {
                if (cuentNode.left === null) {
                    cuentNode.left = new Node(data);
                    return;
                } else {
                    cuentNode = cuentNode.left;
                }
            } else {
                if (cuentNode.right === null) {
                    cuentNode.right = new Node(data);
                    return;
                } else {
                    cuentNode = cuentNode.right;
                }
            }
        }
    }
    levelOder() {
        let queue = [];
        queue.push(this.root);
        while (queue.length) {
            let temp = queue.shift();
            console.log(temp.data);
            if (temp.left) {
                queue.push(temp.left);
            }
            if (temp.right) {
                queue.push(temp.right);
            }
        }
    }
    inOder(root) {
        if (root) {
            this.inOder(root.left);
            console.log(root.data);
            this.inOder(root.right);
        }
    }
    isBST(root) {
        return this.isBSTUtil(root, 0, 10000);
    }
    isBSTUtil(root, min, max) {
        if (root == null) {
            return true;
        }
        if (root.data <= min || root.data >= max) {
            return false;
        }
        return (this.isBSTUtil(root.left, min, root.data) && this.isBSTUtil(root.right, root, max));
    }
    min(root) {
        if (!root.left) {
            return root.data;
        } else {
            return this.min(root.left);
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {
        if (root == null) {
            return root ;
        }
        if (root.data > value) {
            root.left = this.deleteNode(root.left, value);
        } else if (root.data < value) {
            root.right = this.deleteNode(root.right, value);
        }else{
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            }
            if (!root.right) {
                return root.left;
            }
            root.data = this.min(root.right);
            root.right = this.deleteNode(root.right, root.data);
        }
        return root;
    }
    closestElement(root, value){
        if (root === null){
            return null;
        }
        let minDiff = 10000;
        let closestElement ;
        while(root!=null){
            let cuentDiff = Math.abs(root.data - value);
            if (cuentDiff < minDiff){
                minDiff = cuentDiff;
                closestElement = root;
            }
            if (root.data > value){
                root = root.left;
            }else if (root.data <value){
                root = root.right;
            }else{
                break;
            }
        }
        return closestElement.data;
    }
    contains(data){
        let temp = this.root;
        while(temp!=null){
            if (temp.data > data){
                temp = temp.left;
            }else if(temp.data < data){
                temp = temp.right;
            }else{
                return true;
            }
        }
        return false;
    }

}

let obj = new BinarySearchTree();
obj.insert(50);
obj.insert(80);
obj.insert(10);
obj.insert(20);
obj.insert(30);
obj.insert(90);
obj.insert(70);

obj.levelOder();
console.log(obj.isBST(obj.root));
// obj.delete(70);
// obj.inOder(obj.root);

obj.levelOder();

// console.log(obj.closestElement(obj.root, 55));

console.log(obj.contains(50)); 