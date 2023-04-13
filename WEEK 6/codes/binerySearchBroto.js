/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.rigth = null;
    }
}
class BinerySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        let curentNode = this.root;
        if (curentNode ==null){
            this.root = new Node(data);
            return ;
        }
        while(true){
            if (curentNode.data > data){
                if (curentNode.left == null){
                    curentNode.left = new Node(data);
                    return;
                }else{
                    curentNode = curentNode.left;
                }
            }else{
                if (curentNode.rigth == null){
                    curentNode.rigth = new Node(data);
                    return;
                }else{
                    curentNode = curentNode.rigth;
                }
            }
        }   
 
    }
    contains(data){ //search
        let curentNode = this.root;
        while( curentNode!= null){
            if (curentNode.data > data){
                curentNode = curentNode.left;
            }else if( curentNode.data < data){
                curentNode = curentNode.rigth;
            }else{
                return true;
            }
        }
        return false;
    }
    isEmpty(){
        return this.root === null;
    }    
    preOrder(root){
        if (root){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.rigth);
        }
    }
    inOrder(root){
        if (root){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.rigth);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.rigth);
            console.log(root.data);
        }
    }
    levelOrder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.data);
            if (curr.left){
                queue.push(curr.left);
            }
            if (curr.rigth){
                queue.push(curr.rigth);
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
    isBST(root){
        return this.isBSTUtil(root, 0, 10000);
    }
    isBSTUtil(root, min, max){
        if (root === null){
            return true;
        }
        if ( root.data <= min || root.data >= max){
            return false;
        }
        return (this.isBSTUtil(root.left, min , root.data) && this.isBSTUtil(root.right, root.data, max));
    }
}
let obj = new BinerySearchTree();
// console.log(obj.isEmpty());

obj.insert(50);
obj.insert(60);
obj.insert(30);
obj.insert(20);
obj.insert(40);
obj.insert(90);
obj.insert(55);
// console.log(obj.contains(10));
// obj.postOrder(obj.root);
obj.levelOrder();

console.log(`min value :`, obj.min(obj.root));
console.log(`max value :`, obj.max(obj.root));
console.log(obj.isBST(obj.root));
*/
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
      let currentNode = this.root;
      if (currentNode == null) {
        this.root = new Node(data);
        return;
      }
      while (true) {
        if (currentNode.data > data) {
          if (currentNode.left == null) {
            currentNode.left = new Node(data);
            return;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right == null) {
            currentNode.right = new Node(data);
            return;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  
    contains(data) {
      let currentNode = this.root;
      while (currentNode != null) {
        if (currentNode.data > data) {
          currentNode = currentNode.left;
        } else if (currentNode.data < data) {
          currentNode = currentNode.right;
        } else {
          return true;
        }
      }
      return false;
    }
  
    isEmpty() {
      return this.root === null;
    }
  
    preOrder(root) {
      if (root) {
        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
    }
  
    inOrder(root) {
      if (root) {
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
      }
    }
  
    postOrder(root) {
      if (root) {
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.data);
      }
    }
  
    levelOrder() {
      let queue = [];
      queue.push(this.root);
      while (queue.length) {
        let curr = queue.shift();
        console.log(curr.data);
        if (curr.left) {
          queue.push(curr.left);
        }
        if (curr.right) {
          queue.push(curr.right);
        }
      }
    }
  
    min(root) {
      if (!root.left) {
        return root.data;
      } else {
        return this.min(root.left);
      }
    }
  
    max(root) {
      if (!root.right) {
        return root.data;
      } else {
        return this.max(root.right);
      }
    }
  
    isBST(root) {
      return this.isBSTUtil(root, -Infinity, Infinity);
    }
  
    isBSTUtil(root, min, max) {
      if (root === null) {
        return true;
      }
      if (root.data <= min || root.data >= max) {
        return false;
      }
      return (
        this.isBSTUtil(root.left, min, root.data) &&
        this.isBSTUtil(root.right, root.data, max)
      );
    }
  }
  
  let obj = new BinarySearchTree();
  
  obj.insert(50);
  obj.insert(60);
  obj.insert(30);
  obj.insert(20);
  obj.insert(40);
  obj.insert(90);
  obj.insert(55);
  
//   obj.levelOrder();
  
  console.log(`min value :`, obj.min(obj.root));
  console.log(`max value :`, obj.max(obj.root));
  console.log(obj.isBST(obj.root));
console.log("lll")
  console.log(obj.contains(900));
  