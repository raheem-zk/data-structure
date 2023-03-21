/*
class Node {
    constructor (data){
        this.data = data;
        this.next = null;
    }
}
class SLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    adding(data){
        let newNode = new Node(data);
        let temp = this.head;
        if (this.head ==null){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    display(){
        let temp = this.head;
        if (temp==null){
            console.log("empty");
        }
        while( temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
    deleting(data){
        // head
        let temp = this.head;
        let prev = null;
        if (temp.data == data && temp != null){
            this.head = temp.next;
            return;
        }
        while(temp != null && temp.data != data ){ //
            prev = temp;
            temp = temp.next;
        }
        if (temp == this.tail){
            this.tail = prev;
            this.tail.next = null;
            return;
        }
        prev.next = temp.next;

    }
    insertAfter(nextTo, data){
        let temp = this.head;
        let newNode = new Node(data);
        while(temp != null && temp.data != nextTo){ // treverse
            temp = temp.next;
        }
        if (temp== this.tail){ // tail insert after
            this.tail = newNode;
            temp.next = newNode;
            console.log(this.head);
            console.log(this.tail);
            return;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }
}

let obj = new SLinkedList();
obj.display();
obj.adding(10);
obj.adding(20);
obj.adding(30);
obj.adding(40);
obj.display();
console.log("_____________");

obj.deleting(20);  // set ullathine kalayunu 

obj.insertAfter(30,777); //inserting new value
obj.display();
*/

// DobleLinkedList

class Node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DobleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addNode(data){
        let newNode = new Node(data);
        if(this.head == null ){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
    // console.log(this.head);
    }
    display (){
        let temp = this.head;
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
    displayReverse(){
        let temp = this.tail;
        while(temp != null ){
            console.log(temp.data);
            temp = temp.prev;
        }
    }
    deleting(data){
        let temp = this.head;
        if (temp != null && temp.data == data){
            this.head = temp.next;
            this.head.prev = null;
            // console.log(temp);
            return;
        }
        while(temp != null && temp.data != data){
            temp = temp.next;
        }
        if (temp == null) {
            return; // If data not found, exit the method
          }
        if(temp == this.tail){
            this.tail = temp.prev;
            this.tail.next = null;
            return;
        }

        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
    }
}
let obj = new DobleLinkedList();
obj.addNode(10);
obj.addNode(20);
obj.addNode(30);
obj.addNode(40);
obj.addNode(50);

// obj.deleting(50);
obj.display();
obj.displayReverse();