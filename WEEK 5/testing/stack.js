class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }   
}
class Stack {
    constructor (){
        this.top = null;
        this.size =0;
    }
    push (data){
        let newNode = new Node(data);
        if (this.top === null){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
        // console.log(this.size);
    }
    pop(){
        if (this.top === null){
            console.log("stack is empty ..");
        }else{
            this.top = this.top.next;
        }
    }
    isEmpty() {

    }
    peek(){
        if (this.data.size === 0){
            console.log("emptyllllllllllll")
        }else{
            console.log(this.top.data);
        }
    }
    display(){
        let temp = this.top;
        if (temp == null){
            console.log("emty !");
        }else{
            while(temp !=null){
                console.log(temp.data);
                temp = temp.next;
            }
        }

    }
}
let on = new Stack();
on.push(10);
on.push(20);
on.push(30);
on.push(40);

on.display();

// console.log(on.isEmpty());
on.pop()
on.pop()
on.pop()
on.pop()
console.log(on.isEmpty());

on.display();