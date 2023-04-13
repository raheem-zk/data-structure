class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinerySearchTree{
    constructor(){
        this.root = null;
    }
    insert (data){
        if ( this.root == null){
            this.root = new Node(data);
            return;
        }
        let temp = this.root;
        while(true){
            if(temp.data > data){
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
    preOder(root){
        if (root){
            console.log(root.data);
            this.preOder(root.left);
            this.preOder(root.right);
        }
    }
    delete(data){
        this.root = this.deleteNode(this.root, data);
    }
    max(root){
        if(!root.right){
            return root.data;
        }else{
            return this.max(root.right);
        }
    }
    min(root){
        if(!root.left){
            return root.data;
        }else{
            return this.min(root.left);
        }
    }
    deleteNode(root, data){
        if(root == null){
            return root ;
        }
        let temp = root;
            if (temp.data > data){
                root.left = this.deleteNode(root.left, data);
            }else if(temp.data < data){
                root.right = this.deleteNode(root.right, data);
            }else{
                if (!root.left && ! root.right){
                    return null;
                }
                if (! root.left){
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

}
let obj = new BinerySearchTree();
obj.insert(50);
obj.insert(5);
obj.insert(10);
obj.insert(70);
obj.insert(60);
obj.preOder(obj.root);
console.log(`jj`,obj.min(obj.root.left));
// obj.delete(50);
// obj.preOder(obj.root);
obj.levalOrder();
