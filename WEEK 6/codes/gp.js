
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
  /*
    isBST(node = this.root) {
      if (node === null) return true;
  
      // false if the max of the left is > than us
      if (node.left !== null && this.maxValue(node.left) > node.data) return false;
  
      // false if the min of the right is <= than us
      if (node.right !== null && this.minValue(node.right) < node.data) return false;
  
      // false if, recursively, the left or right is not a BST
      if (!this.isBST(node.left) || !this.isBST(node.right)) return false;
  
      // passing all that, it's a BST
      return true;
    }
    */
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
  
    maxValue(node) {
      if (node.right === null) return node.data;
      return this.maxValue(node.right);
    }
  
    minValue(node) {
      if (node.left === null) return node.data;
      return this.minValue(node.left);
    }
  }

  let bst = new BinerySearchTree();

  bst.insert(10);
  bst.insert(5);
  bst.insert(20);
  bst.insert(4);
  bst.insert(8);
  bst.insert(15);
  bst.insert(25);
  bst.insert(14);

  console.log(bst.maxValue(bst.root));

  console.log(bst.isBST(bst.root));