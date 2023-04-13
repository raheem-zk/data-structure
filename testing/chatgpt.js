class Node {
    constructor (data){
        this.data = data;
        this.left = this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        let tempNode = this.root;
        if (tempNode == null){
            this.root = new Node(data);
            return;
        }
        while(tempNode != null){
            if (data <tempNode.data){
                if (tempNode.left == null){
                    tempNode.left = new Node(data);
                    break
                }else{
                    tempNode = tempNode.left;
                }
            }else{
                if (tempNode.right == null){
                    tempNode.right = new Node(data);
                    break;
                }else{
                    tempNode = tempNode.right;
                }
            }
        }
    }
    searching(data){
        let tempNode = this.root;
        while(tempNode != null ){
            if (data <tempNode.data){
                tempNode = tempNode.left;
            }else if (tempNode.data <data){
                tempNode = tempNode.right;
            }else{
                return true
            }
        }
        return false;
    }
}
let tree = new BinarySearchTree ();

tree.insert(100);
tree.insert(650);
tree.insert(10);
tree.insert(60);
console.log(tree.searching(40));
console.log(tree.searching(60));