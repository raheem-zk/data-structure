class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class dubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    adding(data){
        console.log("new value added ");
        let newNode = new Node(data);
        if (this.head == null){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
    }
    display(){
        let temp = this.head;
        while( temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
        console.log("end");
    }
}

let obj = new dubleLinkedList();
obj.adding(10);
obj.adding(20);
obj.adding(30);
obj.adding(40);
obj.adding(50);

obj.display();