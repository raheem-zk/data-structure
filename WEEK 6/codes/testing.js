/*
class Node{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }
}
class BinerySearchTree{
    constructor (){
        this.root = null;
    }
    insert (data){
        if(this.root === null){
            this.root = new Node(data);
            return;
        }
        let curent = this.root;
        while(true){
            if ( curent.data > data){
                if ( curent.left == null){
                    curent.left = new Node(data);
                    return;
                }else{
                    curent = curent.left;
                }
            }else{
                if ( curent.right === null){
                    curent.right = new Node(data);
                    return ;
                }else{
                    curent = curent.right;
                }
            }
        }
    }
    contains(data){
        let curentNode = this.root;
        while(curentNode!=null){
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
    max (root){
        if(!root.right){
            return root.data;
        }else{
            return this.max(root.right);
        }
    }
    min(root){
        if (!root.left){
            return root.data;
        }else{
            return this.min(root.left);
        }
    }
    inOrder(root){
        if (root){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }
    preOrder(root){
        if (root){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    postOrder(root){
        if (root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }
    levelOrder(){
        let queue = []
        queue.push(this.root);
        while(queue.length){
            let curent = queue.shift();
            console.log(curent.data);
            if(curent.left){
                queue.push(curent.left);
            }
            if(curent.right){
                queue.push(curent.right);
            }
        }
    }
    delete(data){
        this.root = this.deleteNode(this.root, data);
    }
    deleteNode(root, data){
        if(root === null){
            return root;
        }
        if(root.data > data){
            root.left = this.deleteNode(root.left, data);
        }else if(root.data < data){
            root.right = this.deleteNode(root.right , data)
        }else{
            if (!root.left && !root.right){
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

let o = new BinerySearchTree();
o.insert(70);
o.insert(10);
o.insert(20);
o.insert(5);
o.insert(59);
o.insert(150);
o.insert(80);
// console.log(o.contains(49));
// console.log(o.min(o.root));
// o.inOrder(o.root);
// o.preOrder(o.root);
o.levelOrder();
console.log("deleted")
o.delete(150);
o.levelOrder();
*/
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
    insert (data){
        if (this.root == null){
            this.root = new Node(data);
            return ;
        }
        let curentNodt = this.root;
        while(true){
            if (curentNodt.data > data){
                if (curentNodt.left == null){
                    curentNodt.left = new Node(data);
                    return;
                }else{
                    curentNodt = curentNodt.left;
                }
            }else{
                if (curentNodt.right == null){
                    curentNodt.right = new Node(data);
                    return;
                }else{
                    curentNodt = curentNodt.right;
                }
            }
        }
    }
    contains(value){
        let curentNode = this.root;
        if( curentNode == null){
            return `empty`;
        }
        while(curentNode !=null){
            if (curentNode.data > value){
                curentNode = curentNode.left;
            }else if (curentNode.data < value){
                curentNode = curentNode.right;
            }else{
                return true;
            }
        }
        return false;
    }
    max(root){
        if(!root.right){
            return root.data;
        }else{
            return this.max(root.right);
        }
    }
    min(root){
        if (!root.left){
            return root.data;
        }else{
            return this.min(root.left);
        }
    }
    preOder(root){
        if (root){
            console.log(root.data);
            this.preOder(root.left);
            this.preOder(root.right);
        }
    }
    inOder(root){
        if (root){
            this.inOder(root.left);
            console.log(root.data);
            this.inOder(root.right);
        }
    }
    postOder(root){
        if (root){
            this.postOder(root.left);
            this.postOder(root.right);
            console.log(root.data);
        }
    }
    levalOrder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let curentNode = queue.shift();
            console.log(curentNode.data);
            if (curentNode.left){
                queue.push(curentNode.left);
            }
            if(curentNode.right){
                queue.push(curentNode.right);
            }
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
        }else if (root.data < data){
            root.right = this.deleteNode(root.right, data);
        }else{
            if (!root.left && !root.right){
                return null;
            }
            if (!root.left){
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
let o = new BinerySearchTree();
console.log(o.contains(3))
o.insert(50);
o.insert(10);
o.insert(30);
o.insert(80);
o.insert(70);

o.levalOrder();
console.log(`max is ::`, o.max(o.root));
console.log(`min is ::`, o.min(o.root));
console.log(o.contains(30))
// o.inOder(o.root);
// o.preOder(o.root);
// o.postOder(o.root);
console.log("......");
o.delete(50);
o.levalOrder();
