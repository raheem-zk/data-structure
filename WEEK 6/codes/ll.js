// trie 
/*
class TrieNode{
    constructor(){
        this.children = new Map();
    }
}
class Trie{
    constructor (){
        this.root = new TrieNode();
        this.endSymbol = '*';
    }
    insert(str){
        for ( let i = 0; i<str.length; i++){
            this.subString(i, str);
        }
    }
    subString(indx, str){
        let node = this.root;
        let letter;
        for (let i = indx; i<str.length; i++){
            letter = str.charAt(i);
            if (!node.children.has(letter)){
                const newNode = new TrieNode();
                node.children.set(letter, newNode);
            }
            node = node.children.get(letter);
        }
        node.children.set(this.endSymbol, null);
    }
    contains(str){
        let node = this.root;
        let letter;
        for ( let i = 0; i<str.length; i++){
            letter = str.charAt(i);
            if (!node.children.has(letter)){
                return false;
            }
            node = node.children.get(letter);
        }
        return node.children.has(this.endSymbol);
    }
}

let obj = new Trie();

obj.insert("man");
obj.insert("mango");
obj.insert("an");
obj.insert("ant");

console.log(obj.contains("an"));
*/
// bst 
/*
class Node {
   constructor(data){
       this.data = data;
       this.left = this.right = null;
   }
}
class BST{
   constructor(){
       this.root = null;
   }
   insert (data){
       if (this.root == null){
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
               if (curentNode.right == null){
                   curentNode.right = new Node(data);
                   return;
               }else{
                   curentNode = curentNode.right;
               }
           }
       }
   }
   contains(root,data){
       while(root!=null){
           if (root.data > data){
               root = root.left;
           }else if (root.data < data){
               root = root.right;
           }else{
               return true;
           }
       }
       return false;
   }
   min(root){
       if (!root.left){
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
   isBST(root){
       return this.bstUtill(root, 0, 100000000000);
   }
   bstUtill(root, min, max){
       if (root == null){
           return true;
       }
       if (root.data < min || root.data > max){
           return false;
       }
       return (this.bstUtill(root.left,min, root.data) && this.bstUtill(root.right, root.data, max));
   }
   closestElement(root, value){
       let mindiff= 1000000000;
       let closestElement ;
       while(root!=null){
           let curentdiff = Math.abs(root.data- value);
           if (curentdiff < mindiff){
               mindiff = curentdiff;
               closestElement = root;
           }
           if (root.data > value){
               root = root.left;
           }else if (root.data < value){
               root = root.right;
           }else{
               break;
           }
       }
       return closestElement.data;
   }
   delete(data){
       this.root = this.deleteNode(this.root, data);
   }
   deleteNode(root, data){
       if (root == null){
           return ;
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
   }
   BFT(){
       let queue = [];
       queue.push(this.root);
       while(queue.length){
           let temp = queue.shift();
           console.log(temp.data);
           if (temp.left){
               queue.unshift(temp.left);
           }
           if (temp.right){
               queue.unshift(temp.right);
           }
       }
   }
   PreOrder(root){
       if (root){
           console.log(root.data);
           this.PreOrder(root.left);
           this.PreOrder(root.right);
       }
   }
   inOrder(root){
       if (root){
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
}

let obj = new BST()

obj.insert(60);
obj.insert(50);
obj.insert(70);
obj.insert(80);
obj.insert(40);
obj.insert(90);
obj.insert(30);

obj.BFT();
console.log(`closest element`,obj.closestElement(obj.root, 59));
*/
/*
class graph{
    constructor(){
        this.map = new Map();
    }
    addVertex(vertex){
        this.map.set(vertex,[]);
    }
    insert (vertex , edge, isbidirection = false){
        if (!this.map.has(vertex)){
            this.addVertex(vertex);
        }
        if (!this.map.has(edge)){
            this.addVertex(edge);
        }
        this.map.get(vertex).push(edge);
        if (isbidirection){
            this.map.get(edge).push(vertex);
        }
    }
    display(){
        // for ( let vertex in this.map.get(vertex)){
        //      console.log(vertex);
        // }
        for ( let vertex of this.map){
            console.log(vertex);
        }
    }
}

let obj = new graph();
obj.insert('A','B',true);
obj.insert('A','c',true);
obj.insert('c','d',true);
obj.insert('d','d',false);
obj.insert('d','A',false);
obj.insert('e','e',false);

obj.display();
*/
// min heap 
/*
class minHeap{ 
    constructor(heap){
        this.heap = heap;
        this.buildHeap(heap);
    }
    parant(i){
        return Math.floor((i-1)/2);
    }
    leftChild(i){
        return ((i*2)+1);
    }
    rightChild(i){
        return ((i*2)+2);
    }
    buildHeap(heap){
        for (let i = this.parant(heap.length-1); i>=0 ; i--){
            this.shiftDown(i);
        }
    }
    shiftDown(curentPIDX){
        let leftIdx = this.leftChild(curentPIDX);
        let endIdx = this.heap.length - 1;
        let idxToshift;
        while(leftIdx <= endIdx){
            let rightIdx = this.rightChild(curentPIDX);
            if (rightIdx <= endIdx && this.heap[rightIdx] <this.heap[leftIdx]){
                idxToshift = rightIdx;
            }else{
                idxToshift = leftIdx;
            }
            if (this.heap[curentPIDX] > this.heap[idxToshift]){
                [this.heap[curentPIDX], this.heap[idxToshift]] = [this.heap[idxToshift], this.heap[curentPIDX]];
                curentPIDX = idxToshift;
                leftIdx = this.leftChild(curentPIDX);
            }else{
                break;
            }
        }
    }
    display(){
        for(let i = 0 ;i<this.heap.length; i++){
            console.log(this.heap[i]);
        }
    }
}

let obj = new minHeap([50,29,11,59,39,54,600,40]);
obj.display();
*/
// maxheap 
/*
class maxHeap{
    constructor(heap){
        this.heap = heap;
        this.buildHeap (heap);
    }
    parant(i){
        return Math.floor((i-1)/2);
    }
    leftChild(i){
        return ((i*2)+1);
    }
    rightChild(i){
        return ((i*2)+2);
    }
    buildHeap(heap){
        for (let i = this.parant(heap.length-1); i>=0 ;i--){
            this.shifDown(i);
        }
    }
    shifDown(curentPIDx){
        let leftIdx = this.leftChild(curentPIDx);
        let endIdx = this.heap.length-1;
        while(leftIdx <= endIdx){
            let rightIdx = this.rightChild(curentPIDx);
            let idxToShift;
            if (rightIdx <= endIdx && this.heap[rightIdx]> this.heap[leftIdx]){
                idxToShift =rightIdx;
            }else{
                idxToShift = leftIdx;
            }
            if (this.heap[curentPIDx] < this.heap[idxToShift]){
                [this.heap[curentPIDx], this.heap[idxToShift]] = [this.heap[idxToShift], this.heap[curentPIDx]];
                curentPIDx = idxToShift;
                leftIdx = this.leftChild(curentPIDx);
            }else{
                return;
            }
        }
    }

    shiftUp(curentIdx){
        let parantIdx = this.parant(curentIdx);
        while(parantIdx >= 0 && this.heap[parantIdx] < this.heap[curentIdx]){
            [this.heap[parantIdx], this.heap[curentIdx]] = [this.heap[curentIdx],this.heap[parantIdx]];
            curentIdx = parantIdx;
            parantIdx = this.parant(curentIdx);
        }
    }
    insert (data){
        this.heap.push(data);
        this.shiftUp(this.heap.length -1);
    }
    remove(){
        this.heap.shift();
        this.heap.unshift(this.heap.pop());
        this.shifDown(0);
    }
    display(){
        for ( let i = 0 ; i<this.heap.length; i++){
            console.log(this.heap[i]);
        }
    }
}
let obj = new maxHeap([10,40,20,90,150,30,50,80,70,100]);

obj.remove();
obj.insert(200);
obj.display();
*/
// trie
/*
class trieNode{
    constructor(){
        this.children = new Map();
    }
}
class Trie{
    constructor(){
        this.root = new trieNode();
        this.endSymbol ='*';
    }
    insert(str){
        for (let i = 0 ;i<str.length; i++){
            this.subString(i,str);
        }
    }
    subString(index, str){
        let letter ;
        let node = this.root;
        for ( let i = index; i<str.length; i++){
            letter = str.charAt(i);
            if (!node.children.has(letter)){
                let newNode = new trieNode();
                node.children.set(letter, newNode);
            }
            node = node.children.get(letter);
        }
        node.children.set(this.endSymbol, null);
    }
    contains(str){
        let letter ;
        let node = this.root;
        for ( let i = 0 ;i<str.length; i++){
            letter = str.charAt(i);
            if (!node.children.has(letter)){
                return false;
            }
            node = node.children.get(letter);
        }
        return node.children.has(this.endSymbol);
    }
    delete(str){
        this.deletehelper(str, this.root, 0);
    }
    deletehelper(str, node, index){
        if (str.length === index){
            node.children.delete(this.endSymbol);
            return;
        }
        const letter = str.charAt(index);
        if (!node.children.has(letter)){
            return;
        }
        const nextNode = node.children.get(letter);
        this.deletehelper(str, nextNode, index+1);
        if (nextNode.children.size === 0 && !nextNode.children.has(this.endSymbol)){
            nextNode.children.delete(letter);
        }
    }
}


let obj = new Trie();

obj.insert("banana");
obj.insert("ban");
obj.insert("bang");
obj.insert("bancock");

obj.delete("banana");
console.log(obj.contains("ng"));
*/

/// graph 
/*
class graph {
    constructor() {
        this.map = new Map();
    }
    addVertex(vertex) {
        this.map.set(vertex, []);
    }
    insert(vertex, edge, isbidirection = false) {
        if (!this.map.has(vertex)) {
            this.addVertex(vertex);
        }
        if (!this.map.has(edge)) {
            this.addVertex(edge);
        }
        this.map.get(vertex).push(edge);
        if (isbidirection) {
            this.map.get(edge).push(vertex);
        }
    }
    delete(vertex){
        if (this.map.has(vertex)){
            let edges = this.map.get(vertex);
            console.log(edges);
            for ( let edge of edges){
                this.map.get(edge).splice(this.map.get(edge).indexOf(vertex), 1);
                // console.log(this.map.get(edge).splice(this.map.get(edge).indexOf(vertex), 1));
            }
            this.map.delete(vertex);v  
        }
    }
    
    display() {
        for (let vertex of this.map.keys()) {
            let temp = this.map.get(vertex);
            console.log(vertex, temp);
        }
    }
}
let obj = new graph();
obj.insert("A", 1);
obj.insert("B", 2);
obj.insert("C", 1,true);
obj.insert("D", 'A',true);
obj.delete("A");
// obj.display();

*/
/*
class Graph {
    constructor(numVertices) {
      this.numVertices = numVertices;
      this.matrix = new Array(numVertices);
      for (let i = 0; i < numVertices; i++) {
        this.matrix[i] = new Array(numVertices).fill(0);
      }
    }
  
    addEdge(source, destination) {
      this.matrix[source][destination] = 1;
      this.matrix[destination][source] = 1; // If the graph is undirected
    }
  
    removeEdge(source, destination) {
      this.matrix[source][destination] = 0;
      this.matrix[destination][source] = 0; // If the graph is undirected
    }
  
    printGraph() {
      for (let i = 0; i < this.numVertices; i++) {
        let row = "";
        for (let j = 0; j < this.numVertices; j++) {
          row += `${this.matrix[i][j]} `;
        }
        console.log(row);
      }
    }
  }
  
  const graph = new Graph(4);
  graph.addEdge(0, 1);
  graph.addEdge(1, 2);
  graph.addEdge(2, 0);
  graph.addEdge(0, 2);

  graph.printGraph(); // Outputs the adjacency matrix
  */

// Define the number of vertices in the graph
const numVertices = 4;

// Define the adjacency matrix as a 2D array
const adjacencyMatrix = Array.from(Array(numVertices), () => new Array(numVertices).fill(0));

// Define the edges in the graph
const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2]];

// Populate the adjacency matrix based on the edges
for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    adjacencyMatrix[u][v] = 1;
    adjacencyMatrix[v][u] = 1;
}

// Print the adjacency matrix
console.log(adjacencyMatrix);
[[0, 1, 1, 1],
[1, 0, 1, 0],
[1, 1, 0, 1],
[1, 0, 1, 0]]

