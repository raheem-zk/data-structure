/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor (){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
}
let obj = new BST();
console.log(`root is empty is :`,obj.isEmpty());
*/
/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor (){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    insert(data){
        const newNode = new Node(data);
        if (this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }
    insert(data){
        if(this.root == null){
            this.root = new Node(data);
            return;
        }
        let curent = this.root;
        while(true){
            if (curent.data > data){
                if (curent.left === null){
                    curent.left = new Node(data);
                    return;
                }else{
                    curent = curent.left;
                }
            }else{
                if(curent.right == null){
                    curent.right = new Node(data);
                    return;
                }else{
                    curent = curent.right;
                }
            }

        }
    }
    preOrder(root){ 
        if (root){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if (root){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if (root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }
    contains(data){
        let temp = this.root;
        while(temp!=null){
            if ( temp.data > data){
                temp = temp.left;
            }else if ( temp.data < data){
                temp = temp.right;
            }else{
                return true;
            }
        }
        return false;
    }
    //Breadth First Search (    BFS   )
    levelOrder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let temp = queue.shift();
            console.log(temp.data);
            if(temp.left){
                queue.push(temp.left);
            }
            if (temp.right){
                queue.push(temp.right);
            }
        }
    }
}
let obj = new BST();
console.log(`root is empty is :`,obj.isEmpty());
obj.insert(50);
obj.insert(80);
obj.insert(30);
obj.insert(70);
obj.insert(10);
obj.preOrder(obj.root);
console.log(">>>>>>>>>>>>>>>>>>>");
obj.inOrder(obj.root);
console.log(">>>>>>>>>>>>>>>>>>>");
obj.postOrder(obj.root);
console.log(">>>>>>>>>>>>>>>>>>>");
console.log(obj.contains(50));
console.log(">>>>>>>>>>>>>>>>>>>");
obj.levelOrder();

// console.log(`root is empty is :`,obj.isEmpty());
*/
// testing all treversals, insert and search

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinerySearchTree{
    constructor (){
        this.root = null;
    }
    insert(data){
        if (this.root == null){
            this.root = new Node(data);
            return;
        }    
        let curentNode = this.root;
        while( true){
            if (curentNode.data > data){
                if ( curentNode.left == null){
                    curentNode.left = new Node(data);
                    return;
                }else{
                    curentNode = curentNode.left;
                }
            }else{
                if ( curentNode.right === null){
                    curentNode.right = new Node(data);
                    return;
                }else{
                    curentNode = curentNode.right;
                }
            }
        }
    }
    contains(data){
        let curentNode = this.root;
        while(curentNode != null){
            if (curentNode.data > data){
                curentNode = curentNode.left;
            }else if(curentNode.data < data){
                curentNode = curentNode.right;
            }else{
                return true;
            }
        }
        return false;
    }
    preOrder(root){
        if (root){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if (root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }
    levalOrder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let curent = queue.shift();
            console.log(curent.data);
            if (curent.left){
                queue.push(curent.left);
            }
            if (curent.right){
                queue.push(curent.right);
            }
        }
    }
    min(root){
        if (!root.left){
            return root.data;
        }else{
            return this.min(root.left);
        }
    }
    max(root){
        if (!root.rigth){
            return root.data;
        }else{
            return this.max(root.rigth);
        }
    }

    delete(data){
        this.root = this.deleteNode(this.root, data);
    }
    deleteNode(root, data){
        if (root === null){
            return root;
        }
        if (root.data > data){
            root.left = this.deleteNode(root.left, data);
        }else if(root.data < data){
            root.right = this.deleteNode(root.right, data);
        }else{
            if( !root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;          
            }
            if (!root.right){
                return root.left;
            }
            root.data = this.min(root.right);
            root.right = this.deleteNode(root.right, root.data);
        }
        return root;
    }
}
let obj = new BinerySearchTree();
obj.insert(50);
obj.insert(10);
obj.insert(80);
obj.insert(60);
obj.insert(40);

// console.log(obj.contains(60))

// obj.levalOrder();
obj.inOrder(obj.root);
console.log( "deleted 10 leaf node");
obj.delete(50);
obj.inOrder(obj.root);

console.log(obj.contains(600))