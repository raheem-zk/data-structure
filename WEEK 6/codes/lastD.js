/*
class trieNode{
    constructor(){
        this.children = new Map();
    }
}
class Trie{
    constructor(){
        this.root = new trieNode();
        this.endSymbol = '*';
    }
    insert (str){
        for ( let i = 0 ; i<str.length; i++){
            this.subString(i, str);
        }
    }
    subString(indx, str){
        let node = this.root;
        let letter ;
        for ( let i = indx; i<str.length; i++){
            letter = str.charAt(i);
            if (!node.children.has(letter)){
                let newNode = new trieNode();
                node.children.set(letter, newNode);
            }
            node = node.children.get(letter);
        }
        node.children.set(this.endSymbol, null);
    }
    contains (str){
        let letter ;
        let node = this.root;
        for (let i = 0 ; i<str.length ; i++){
            letter = str.charAt(i);
            if (!node.children.has(letter)){
                return false;
            }
            node = node.children.get(letter);
        }
        return node.children.has(this.endSymbol);
    }
    delete(str){
        this.deleteHelper(str, this.root, 0);
    }
    deleteHelper(str, node, indx){
        if (str.length === indx){
            node.children.delete(this.endSymbol);
            return;
        }
        let letter = str.charAt(indx);
        if (!node.children.has(letter)){
            return ;
        }
        let nextNode = node.children.get(letter);
        this.deleteHelper(str, nextNode, indx+1);
        if (nextNode.children.size === 0 && nextNode.children.has(this.endSymbol)){
            nextNode.children.delete(letter);
            
        }
    }
}
let obj = new Trie();
obj.insert("abu");
obj.insert("aboo");
obj.delete("u")
console.log(obj.contains("u"));
*/
// graph
/*
class graph{ // adjacency list
    constructor(){
        this.map = new Map();
    }
    addVertex(vertex){
        this.map.set(vertex, []);
    }
    insert ( vertex, edge, isbidiraction = false){
        if (!this.map.has(vertex)){
            this.addVertex(vertex);
        }
        if (!this.map.has(edge)){
            this.addVertex(edge);
        }
        this.map.get(vertex).push(edge);
        if (isbidiraction){
            this.map.get(edge).push(vertex);
        }
    }
    display(){
        for (let vertex of this.map.keys()){
            let e = this.map.get(vertex);
            console.log(vertex, e);
        }
    }
    delete(vertex){
        if (this.map.has(vertex)){
            let edges = this.map.get(vertex);   
            for (let edge of edges){
                let edgeL = this.map.get(edge);
                edgeL.splice(edgeL.indexOf(vertex),1);
            }
            this.map.delete(vertex);
        }   
        
    }
}

let obj = new graph();
obj.insert("A",1);
obj.insert("A",2,true);
obj.insert(2,2);
obj.insert(1,2);

obj.delete(1);
obj.display();
*/

// graf metrix 

class graph{
    constructor(size){
        this.size = size;
        this.matrix = new Array(size);
        for ( let i = 0 ;i<this.size; i++){
            this.matrix[i] = new Array(size).fill(0);
        }
    }
    insert (i, j){
        this.matrix[i][j] = 1;
        this.matrix[j][i] = 1;
    }
    display(){
        for ( let i = 0 ;i<this.size; i++){
            let row ='';
            for (let j = 0 ; j<this.size; j++){
                row+=this.matrix[i][j];
            }
            console.log(row);
        }
    }
    bfs(start){
        let visited = new Array(this.size).fill(false);
        let queue = [];
        visited[start] = true;
        queue.push(start);

        while(queue.length !=0 ){
            let s = queue.shift();
            console.log(s);
            for (let i = 0 ;i<this.size; i++){
                if (this.matrix[s][i] == 1 && !visited[i]){
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
    }
}
let obj = new graph(3);
obj.insert(0,1)
obj.insert(1,1)
obj.insert(2,1)
obj.display();
obj.bfs(0);