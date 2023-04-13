// // tree


// class Node{
//     constructor(data){
//         this.data = data;
//         this.left = this.right = null;
//     }
// }

// class BinerySearch{
//     constructor(){
//         this.root = null;
//     }
//     insert(dat){
//         let curentnode = this.root;
//         if (this.root == null){
//              this.root = new Node(data);
//             return;
//         }
//         while(true){
//             if (data <curentnode.data){
//                 if (curentnode.left == null){
//                     curentnode.left = new Node(data);   
//                 }else{
//                     curentnode = curentnode.left;
//                 }
//             }else{
//                 if (curentnode.right == null){
//                     curentnode.right = new Node(data);   
//                 }else{
//                     curentnode = curentnode.right;
//                 }
//             }
//         }
//     }
//     searching(data){
//         let currentNode = this.root;
//         while( currentNode != null){
//             if(data <currentNode.data){
//                 currentNode = currentNode.left;
//             }else if(data <currentNode.data){
//                 currentNode = currentNode.left;
//                 currentNode = currentNode.rightl;
//             }else{
//                 return true;
//             }
//         }
//         return false;
//     }
// }

// let obj = new BinerySearch();
// obj.insert(1);
// obj.insert(2);
// obj.insert(3);
// obj.insert(4);
// obj.searching(2);
/*
class Node {
    constructor(data) {
      this.data = data;
      this.left = this.right = null;
    //   this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      let currentNode = this.root;
      if (!currentNode) {
        this.root = new Node(data);
        return;
      }
  
      while (true) {
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = new Node(data);
            return;
          }
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          if (!currentNode.right) {
            currentNode.right = new Node(data);
            return;
          }
          currentNode = currentNode.right;
        } else {
          return;
        }
      }
    }
  
    search(data) {
      let currentNode = this.root;
      while (currentNode) {
        if (data === currentNode.data) {
          return true;
        } else if (data < currentNode.data) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
      return false;
    }
  }
  
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  bst.insert(7);
  bst.insert(1);
  bst.insert(4);
  bst.insert(6);
  bst.insert(9);
  console.log(bst.search(6)); // true
  console.log(bst.search(8)); // false
  */