/*class grapg {
    constructor(size){
        this.size = size;
        this.metrix = new Array(size);
        for ( let  i = 0 ;i<size; i++){
            this.metrix[i] = new Array(size).fill(0);
        }
    }
    addEdge(i, j){
        this.metrix[i][j] = 1;
        this.metrix[j][i] = 1;

    }
    print(){
        for ( let i = 0 ; i<this.size; i++){
            let row ='';
            for (let j = 0 ;j<this.size; j++){
                row +=`${this.metrix[i][j]}`;
            }
            console.log(row);
        }
    }
}

let o = new grapg(4);
o.addEdge(0,1)
o.addEdge(1,2)
o.addEdge(3,0)
o.addEdge(0,2)

o.print();
*/
class Graph {
    constructor(size) {
      this.size = size;
      this.matrix = new Array(size);
      for (let i = 0; i < size; i++) {
        this.matrix[i] = new Array(size).fill(0);
      }
    }
  
    addEdge(i, j) {
      this.matrix[i][j] = 1;
      this.matrix[j][i] = 1;
    }
  
    bfs(start) {
      let visited = new Array(this.size).fill(false);
      let queue = [];
      visited[start] = true;
      queue.push(start);
  
      while (queue.length != 0) {
        let s = queue.shift();
        console.log(s + " ");
  
        for (let i = 0; i < this.size; i++) {
          if (this.matrix[s][i] == 1 && !visited[i]) {
            visited[i] = true;
            queue.push(i);
          }
        }
      }
    }
  
    dfsUtil(vertex, visited) {
      visited[vertex] = true;
      console.log(vertex + " ");
  
      for (let i = 0; i < this.size; i++) {
        if (this.matrix[vertex][i] == 1 && !visited[i]) {
          this.dfsUtil(i, visited);
        }
      }
    }
  
    dfs(start) {
      let visited = new Array(this.size).fill(false);
      this.dfsUtil(start, visited);
    }
  
    print() {
      for (let i = 0; i < this.size; i++) {
        let row = "";
        for (let j = 0; j < this.size; j++) {
          row += `${this.matrix[i][j]}`;
        }
        console.log(row);
      }
    }
  }
  
  let g = new Graph(4);
  g.addEdge(0, 1);
  g.addEdge(1, 2);
  g.addEdge(3, 0);
  g.addEdge(0, 2);
  
  console.log("Adjacency matrix:");
  g.print();
  
  console.log("BFS traversal starting from vertex 0:");
  g.bfs(0);
  
  console.log("DFS traversal starting from vertex 0:");
  g.dfs(0);
  