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