
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
/*
    checkBST(root){
        return this.checkBSTT(root,this.min(root),this.max(root));
    }
    checkBSTT(root, min, max){
        if ( root == null){
            return true;
        }
        if ( root.data <min || root.data > max){
            return false;
        }
        return (
            this.checkBSTT(root.left, min, root.data-1) &&
            this.checkBSTT(root.right, root.data+1, max) )
    }
    */
   /*
    checkBST(root) {
        return this.checkBSTUtil(root,-Infinity,Infinity);
      }
      
      checkBSTUtil(node, min, max) {
        if (node === null) {
          return true;
        }
      
        if (node.data < min || node.data > max) {
          return false;
        }
      
        return (
          this.checkBSTUtil(node.left, min, node.data - 1) &&
          this.checkBSTUtil(node.right, node.data + 1, max)
        );
      }
      */
      isBST(root) {
        return this.isBSTUtil(root, 0, 1000);
      }
      
      isBSTUtil(node, min, max) {
        // empty tree is a valid BST
        if (node === null) {
          return true;
        }
      
        // check if the current node violates BST property
        if (node.data <= min || node.data >= max) {
          return false;
        }
      
        // recursively check if the left and right subtrees are valid BSTs
        return this.isBSTUtil(node.left, min, node.data) && this.isBSTUtil(node.right, node.data, max);
      }
      
      
}
let obj = new BinerySearchTree();
/*
n
*/
obj.insert(10);
obj.insert(5);
obj.insert(20);
obj.insert(15);
obj.insert(30);
obj.insert(25);
obj.insert(35);
obj.insert(34);
// console.log(obj.contains(60))

obj.levalOrder();
// obj.inOrder(obj.root);
// console.log( "deleted 10 leaf node");
// obj.delete(50);
// obj.inOrder(obj.root);
console.log("................ checking................");
console.log(obj.isBST(obj.root))