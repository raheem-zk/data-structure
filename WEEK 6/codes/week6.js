class Node{
    constructor(data){
        this.data = data;
        this.left = this.right = null;
    }
}
class Bst{
    constructor(){
        this.root = null;
    }
    insert(data){
        if (this.root == null){
            this.root = new Node(data);
            return;
        }
        let temp = this.root;
        while(true){
            if (temp.data > data){
                if (temp.left === null){
                    temp.left = new Node(data);
                    return;
                }else{
                    temp = temp.left;
                }
            }else{
                if (temp.right === null){
                    temp.right = new Node(data);
                    return;
                }else{
                    temp = temp.right;
                }
            }
        }
    }
    inOder(root){
        if (root){
            this.inOder(root.left);
            console.log(root.data);
            this.inOder(root.right);
        }
    }
}

let obj = new Bst();

obj.insert(50);
obj.insert(30);
obj.insert(40);
obj.insert(80);
obj.insert(10);
obj.insert(90);
obj.insert(60);
obj.inOder(obj.root);