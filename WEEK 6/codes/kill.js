/*
class Node{
    constructor (data){
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
        if(this.root == null){
            this.root = new Node(data);
            return;
        }
        let curent = this.root;
        while(true){
            if (curent.data > data){
                if(curent.left === null){
                    curent.left = new Node(data);
                    return;
                }else{
                    curent = curent.left;
                }
            }else{
                if(curent.right === null){
                    curent.right = new Node(data);
                    return;
                }else{
                    curent = curent.right;
                }
            }
        }
    }
    contains(data){
        let cuent = this.root;
        while(cuent !=null){
            if (cuent.data > data){
                cuent = cuent.left;
            }else if (cuent.data < data){
                cuent = cuent.right;
            }else{
                return true;
            }
        }
        return false;
    }
    levalOder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let temp = queue.shift();
            console.log(temp.data);
            if (temp.left){
                queue.push(temp.left);
            }
            if(temp.right){
                queue.push(temp.right);
            }
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
    delete(data){
        this.root = this.deleteNode(this.root, data);
    }
    min(root){
        if (root.left==null){
            return root.data;
        }else{
            return this.min(root.left);
        }
    }
    max(root){
        if (!root.right){
            return root.data;
        }else{
            return this.max(root.right);
        }
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
            if ( !root.left && !root.right){
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

let obj = new BinerySearchTree();
obj.insert(50);
obj.insert(70);
obj.insert(30);
obj.insert(60);
obj.insert(40);
obj.insert(20);

console.log(obj.contains(30)); 
obj.levalOder();
console.log('.....');
obj.preOder(obj.root);
console.log('.....');
obj.inOder(obj.root);
console.log('.....');
obj.postOder(obj.root);
console.log('.....//////\\\\\\......');
obj.delete(20);
obj.postOder(obj.root);
*/
// heap 


class Maxheap{
    constructor(heap){
        this.heap = heap;
        this.buildHeap(heap);
    }

    buildHeap(heap){
        for ( var i =this.parent(heap.length-1); i>=0 ;i--){
            this.shiftDown(i);
        }
    }

    shiftDown(cuentPIdx){
        let leftChild = this.leftChild(cuentPIdx);
        let endIdx = this.heap.length-1;
        while(leftChild <= endIdx){
            let rightChild = this.rightChild(cuentPIdx);
            let idxToShift ;
            if (rightChild <= endIdx && this.heap[rightChild] > this.heap[leftChild] ){
                idxToShift = rightChild;
            }else{
                idxToShift = leftChild;
            }
            if( this.heap[cuentPIdx] < this.heap[idxToShift]){
                [this.heap[cuentPIdx], this.heap[idxToShift]] = [this.heap[idxToShift], this.heap[cuentPIdx]];
                cuentPIdx = idxToShift;
                leftChild = this.leftChild(cuentPIdx);
            }else{
                return ;
            }
        }
    }
    remove(){
        this.heap.shift();
        this.heap.unshift(this.heap.pop());
        this.shiftDown(0);
    }
    shiftUp(curentIdx){
        let parent = this.parent(curentIdx);
        while( parent >= 0 && this.heap[curentIdx] > this.heap[parent]){
            [this.heap[parent], this.heap[curentIdx]] = [this.heap[curentIdx], this.heap[parent]];
            curentIdx = parent;
            parent = this.parent(curentIdx);
        }
    }
    insert (value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1);
    }
    parent(i){
        return Math.floor((i-1)/2);
    }

    leftChild(i){
        return Math.floor((i*2)+1);
    }

    rightChild(i){
        return Math.floor((i*2)+2);
    }

    display(){
        for ( var i = 0 ;i<this.heap.length; i++){
            console.log(this.heap[i]);
        }
    }

}
let obj = new Maxheap([50,20,70,60,64,30,25,80,55]);
// obj.insert(30);
obj.remove();
obj.remove();
obj.remove();
// obj.remove();
// obj.remove();
// obj.remove();
// obj.remove();
// obj.remove();
// obj.remove();
// obj.remove();


obj.display();

/*
class MinHeap {
    constructor (heap){
        this.heap = heap;
        this.buildHeap(heap)
    }
    buildHeap(heap){
        for ( var i = this.parent(heap.length-1); i>= 0 ;i--){
            this.shiftDown(i);
        }
    }

    shiftDown(curentPIdx){
        let leftIdx = this.leftChild(curentPIdx);
        let endIdx = this.heap.length-1;
        while( leftIdx <= endIdx){
            let rightIdx = this.leftChild(curentPIdx);
            let idxToShift ;
            if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]){
                idxToShift = rightIdx;
            }else{
                idxToShift = leftIdx;
            }
            if (this.heap[curentPIdx] > this.heap[idxToShift]){
                [this.heap[curentPIdx],this.heap[idxToShift]] = [this.heap[idxToShift], this.heap[curentPIdx]];
                curentPIdx = idxToShift;
                leftIdx = this.leftChild(curentPIdx);
            }else{
                return ;
            }
        }
    }

    parent(i){
        return Math.floor((i-1)/2);
    }

    leftChild (i){
        return Math.floor((i*2)+1);
    }

    rightChild(i){
        return Math.floor((i*2)+2);
    }

    display(){
        for ( var i = 0 ;i< this.heap.length ; i++){
            console.log(this.heap[i]);
        }
    }

}

let obj = new MinHeap([50,20,40,10,90,45]);
obj.display();
*/