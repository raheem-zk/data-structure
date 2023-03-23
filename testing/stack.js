/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.Top = null;
    } 
    push(data){  //stack pushing 
        let newNode = new Node(data);
        if (this.Top == null){
            this.Top = newNode;
        }else{
            newNode.next = this.Top;
            this.Top = newNode;
        }
    }
    pop(){
        if (this.Top == null){
            console.log("empty !");
        }else{
            this.Top = this.Top.next;
        }
    }
    display(){
        let temp = this.Top;
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.pop();
stack.display();
*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }
    enqueue(data){
        let newNode = new Node(data);
        if (this.front == null ){
            this.front = this.rear = newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    dequeue(){
        if (this.front == null){
            console.log("empty");
        }
        this.front = this.front.next;
        if(this.front == null ){
            this.rear =null;
        }
    }
    display(){
        let temp = this.front;
        while(temp !=null ){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.display();