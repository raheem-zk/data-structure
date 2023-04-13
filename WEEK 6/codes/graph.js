
class Graph {
    constructor() {
        this.map = new Map(); // hash map
    }

    addVertex(data) {
        //this.map.set(key, value)
        this.map.set(data, []); // vertex adding
    }

    insert(vertex, edge, isBidirectional = false) {  // inserting new vertics , edge and  bidirection
        if (!this.map.has(vertex)) { // its checking vertex key is olredy excist or not 
            this.addVertex(vertex); // its not exist and adding a new vertex
        }
        if (!this.map.has(edge)) {  // its cheking the edge is exsit or not 
            this.addVertex(edge);   // its not exisist and creating the new hash map list
        }
        //this.map.get(vertex).push(edge)
        this.map.get(vertex).push(edge); // its vertics edge seting
        if (isBidirectional) { /// its true then bidirection edge seting
            this.map.get(edge).push(vertex);
        }
    }

    display() {
        for (let vertex of this.map.keys()) {
            const edges = this.map.get(vertex);
            console.log(`${vertex} -> ${edges.join(", ")}`);
        }
    }
}

let o = new Graph();
o.insert(5, 3);
o.insert(5, 1);
o.insert(3, 1);
o.insert(5, 4);
o.display();