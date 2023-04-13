//  binery search tree 
/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }

    insert(data){
        if (this.root === null){
            this.root = new Node(data);
            return;
        }
        let curentNode = this.root;
        while(true){
            if (curentNode.data > data){
                if (curentNode.left == null){
                    curentNode.left = new Node(data);
                    return;
                }else{
                    curentNode = curentNode.left;
                }
            }else{
                if (curentNode.right === null){
                    curentNode.right = new Node(data);
                    return;
                }else{
                    curentNode = curentNode.right;
                }
            }
        }
    }

    contains(data){
        if (this.root == null){
            return false
        }
        let curentNode = this.root;
        while(curentNode!= null){
            if(curentNode.data > data){
                curentNode = curentNode.left;
            }else if ( curentNode.data < data){
                curentNode = curentNode.right;
            }else{
                return true;
            }
        }
        return false;
    }

    min(root){
        if(!root.left){
            return root.data;
        }else{
            return this.min(root.left);
        }
    }

    max (root){
        if (!root.right){
            return root.data;
        }else{
            return this.max(root.right);
        }
    }
    delete (data){
        this.root = this.deleteNode(this.root, data);
    }
    deleteNode(root, data){
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
    BreadthFirstTraversal(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let temp = queue.shift();
            console.log(temp.data);
            if (temp.left){
                queue.push(temp.left);
            }
            if (temp.right){
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

    closestElement (root, data){
        if (root === null){
            return null;
        }
        let mindiff = 100000;
        let closestElement ;
        while(root!= null){
            let curentdiff = Math.abs(root.data - data);
            if (curentdiff < mindiff){
                mindiff = curentdiff;
                closestElement = root;
            }
            if (root.data > data){
                root = root.left;
            }else if (root.data < data){
                root = root.right;
            }else{
                break;
            }
        }
        return closestElement.data;
    }

    isBst(root){
        return this.isBstUtill( root, 0, 1000000);
    }
    isBstUtill(root, min , max){
        if (root == null){
            return true;
        }
        if (root.data < min || root.data > max){
            return  false;
        }
        return (this.isBstUtill(root.left, min, root.data) && this.isBstUtill(root.right, root.data, max));
    }
}

let obj = new BST();
obj.insert(50);
obj.insert(30);
obj.insert(40);
obj.insert(70);
obj.insert(60);
obj.insert(55);
obj.insert(80);

console.log(obj.contains(50));

// obj.delete(50);
console.log(obj.contains(50));

// obj.BreadthFirstTraversal();
// obj.preOder(obj.root);
// obj.inOder(obj.root);
obj.postOder(obj.root);

console.log(`closest enlemet`, obj.closestElement(obj.root, 56));

console.log(`is bst or not :`,obj.isBst(obj.root));
*/

// heap 
/*
class heapNode{
    constructor(){
        this.children = [];
    }
}
class minHeap{
    constructor(heap){
        this.root = new heapNode();
        this.heap = heap;
        this.buildheap(heap);
    }
    parant(i) {
        return Math.floor((i-1)/2);
    }
    leftChild (i){
        return Math.floor((i*2)+1);
    }
    rightChild (i){
        return Math.floor((i*2)+2);
    }
    buildheap (heap){
        for (let i = this.parant(heap.length -1); i>=0; i--){
            this.shiftDown(i);
        }
    }
    shiftDown(curentPIdx){
        let leftChild = this.leftChild(curentPIdx);
        let endIdx = this.heap.length-1;
        while(leftChild <= endIdx){
            let rightChild = this.rightChild(curentPIdx);
            let idxToShift ;
            if (rightChild <= endIdx && this.heap[rightChild]<this.heap[leftChild]){
                idxToShift = rightChild;
            }else{
                idxToShift = leftChild;
            }
            if (this.heap[curentPIdx] > this.heap[idxToShift]){
                [this.heap[curentPIdx], this.heap[idxToShift]] = [this.heap[idxToShift], this.heap[curentPIdx]];
                curentPIdx = idxToShift;
                leftChild = this.leftChild(curentPIdx);
            }else{
                return;
            }
        }
    }
    shiftUp(curent){
        let parantIdx = this.parant(curent);
        while( parantIdx >=0 && this.heap[parantIdx] > this.heap[curent]){
            [this.heap[parantIdx], this.heap[curent]] = [ this.heap[curent], this.heap[parantIdx]];
            curent = parantIdx;
            parantIdx = this.parant(curent);
        }
    }
    insert (value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1);
    }
    remove(){
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
    display(){
        for ( let i = 0 ;i<this.heap.length; i++){
            console.log(this.heap[i]);
        }
    }
}

let obj = new minHeap([50,10,20,30,90,89,68,33,4,5,55,64]);

obj.display();
*/

// maxHeap
/*
class heap{
    constructor(heap){
        this.heap = heap;
        this.buildheap(heap);
    }
    parat(i){
        return Math.floor((i-2)/2)
    }
    leftChild(i){
        return Math.floor((i*2)+1);
    }
    rightChild(i){
        return Math.floor((i*2)+2);
    }
    buildheap(heap){
        for ( let i = this.parat(heap.length-1); i>=0 ; i--){
            this.shiftDown(i);
        }
    }
    shiftDown(curentPIdx){
        let leftChildIdx = this.leftChild(curentPIdx);
        let endIdx = this.heap.length-1;
        while( leftChildIdx <= endIdx){
            let rightChildIdx = this.rightChild(curentPIdx);
            let idxToShift ;
            if (rightChildIdx <= endIdx && this.heap[rightChildIdx] > this.heap[leftChildIdx]){
                idxToShift = rightChildIdx;
            }else{
                idxToShift = leftChildIdx;
            }
            if (this.heap[curentPIdx] < this.heap[idxToShift]){
                [this.heap[curentPIdx], this.heap[idxToShift]] = [ this.heap[idxToShift], this.heap[curentPIdx]];
                curentPIdx = idxToShift;
                leftChildIdx = this.leftChild(curentPIdx);
            }else{
                break;
            }
        }
    }
    insert (data){
        this.heap.push(data);
        this.shiftUp(this.heap.length-1);
    }
    remove(){
        this.heap.shift();
        this.heap.unshift(this.heap.length-1);
        this.shiftDown(0);
    }
    shiftUp(curentIdx){
        let parant = this.parat(curentIdx);
        while(curentIdx > 0 && this.heap[curentIdx] > this.heap[parant]){
            [this.heap[curentIdx], this.heap[parant]] = [this.heap[parant], this.heap[curentIdx]];
            curentIdx = parant;
            parant = this.parat(curentIdx);
        }
    }
    display(){
        for ( var i = 0 ;i < this.heap.length; i++){
            console.log(this.heap[i]);
        }
    }
    
}

let obj = new heap([5,2,6,7,1,2,10]);

obj.display();
console.log('......');
obj.remove();

obj.display();
console.log('......');

obj.insert(100);
obj.display();
*/

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        if (this.root == null) {
            this.root = new Node(data);
            return;
        }
        let curentNode = this.root;
        while (true) {
            if (curentNode.data > data) {
                if (curentNode.left == null) {
                    curentNode.left = new Node(data);
                    return;
                } else {
                    curentNode = curentNode.left;
                }
            } else {
                if (curentNode.right == null) {
                    curentNode.right = new Node(data);
                    return;
                } else {
                    curentNode = curentNode.right;
                }
            }
        }
    }
    isBst(root) {
        return this.isBstUtil(root, 0, 1000000);
    }
    isBstUtil(root, min, max) {
        if (root == null) {
            return true;
        }
        if (root.data <= min || root.data >= max) {
            return false;
        }
        return (this.isBstUtil(root.left, min, root.data) && this.isBstUtil(root.right, root.data, max));
    }
    BFT(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let temp = queue.shift();
            console.log(temp.data);
            if (temp.left){
                queue.push(temp.left);
            }
            if (temp.right){
                queue.push(temp.right);
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
    postOder(root){
        if (root){
            this.postOder(root.left);
            this.postOder(root.right);
            console.log(root.data);
        }
    }
    closestElement(root, data){
        if (root == null){
            return null;
        }
        let mindiff = 10000;
        let closestElement ;
        while(root!= null){
            let curentdiff = Math.abs(root.data - data);
            if (curentdiff<mindiff){
                mindiff = curentdiff;
                closestElement = root;
            }
            if (root.data > data){
                root = root.left;
            }else if (root.data < data){
                root = root.right;
            }else{
                break;
            }
        }
        return closestElement.data;
    }
    min(root){
        if (!root.left){
            return root.data;
        }else{
            return this.min(root.left);
        }
    }
    max (root){
        if (!root){
            return root.data;
        }else{
            return this.max(root.right);
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
    contains(data){
        let temp = this.root;
        while(temp!=null){
            if (temp.data > data){
                temp = temp.left;
            }else if ( temp.data < data){
                temp = temp.right;
            }else{
                return true;
            }
        }
        return false;
    }
}

let tree = new BST();
tree.insert(50);
tree.insert(70);
tree.insert(30);
tree.insert(80);
tree.insert(60);
tree.insert(40);
tree.insert(20);

// tree.inOder(tree.root);
// console.log("..");
// tree.BFT();
// console.log("..");

// tree.delete(30);
tree.BFT();
console.log(tree.contains(30));
console.log(tree.isBst(tree.root));

console.log(tree.closestElement(tree.root,54));
*/

// // trie
// class TrieNode{
//     constructor(){
//         this.children = new Map();
//     }
// }
// class Trie{
//     constructor(){
//         this.root = new TrieNode();
//         this.endSymbol = '*';
//     }
//     insert (str){
//         for ( let i = 0; i< str.length; i++){
//             this.subString(i, str);
//         }
//     }
//     subString(index, str){
//         let node = this.root;
//         let letter;
//         for( let i = index; i<str.length;i++){
//             letter = str.charAt(i);
//             if(!node.children.has(letter)){
//                 const newNode = new TrieNode();
//                 node.children.set(letter, newNode);
//             }
//             node = node.children.get(letter);
//         }
//         node.children.set(this.endSymbol, null);
//     }

//     contains(str){
//         let node = this.root;
//         let letter;
//         for ( let i = 0 ;i< str.length; i++){
//             letter = str.charAt(i);
//             if (!node.children.has(letter)){
//                 return false;
//             }
//             node = node.children.get(letter);
//         }
//         return node.children.has(this.endSymbol);
//     }
// }

// let o = new Trie();
// o.insert("banana");
// o.insert("babu");
// o.insert("banu");

// console.log(o.contains("abu"));


class TrieNode{
    constructor(){
        this.children = new Map();
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode();
        this.endSymbol = '*';
    }
    insert (str){
        for ( let i = 0; i<str.length;i++){
            this.subString(i, str);
        }
    }
    subString(indx, str){
        let node = this.root;
        let letter;
        for ( let i = indx; i<str.length; i++){
            letter = str.charAt(i);
            if (!node.children.has(letter)){
                const newNode = new TrieNode();
                node.children.set(letter, newNode);
            }
            node = node.children.get(letter);
        }
        node.children.set(this.endSymbol, null);
    }

    contains (str){
        let node = this.root;
        let letter;
        for ( let i = 0 ;i <str.length; i++){
            letter = str.charAt(i);
            if (!node.children.has(letter)){
                return false;
            }
            node = node.children.get(letter);
        }
        return node.children.has(this.endSymbol);
    }
}

let obj= new Trie();

obj.insert("arjun");
obj.insert("arun");
obj.insert("arnu");
obj.insert("arnurag");
console.log(obj.contains("rag"));