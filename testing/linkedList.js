

// class a{
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }
//         // head = null;
//         // tail = null;
//     addNode(data) {
//         let newNode = new Node(data);

//         if (this.head == null) {
//             this.head = newNode;
//         } else {
//             this.tail.next = newNode;
//         }
//         this.tail = newNode;
//     }
//     display() {
//         if (this.head == null) {
//             console.log("Nothing here");
//         }
//     }
// }

// class Node  extends a{
//     constructor(data) { // constructor
//         this.data = data;
//         this.next = null;
//     }
// }

// let list = new Node("HJIKT");
// list.display();

/*
//deleting in linkidin list
class Node {
    constructor(data) { // constructor
        this.data = data;
        this.next = null;
    }
}

class SLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    //adding  init
    addNode(data) {
        let newNode = new Node(data);
        console.log("new data added ");
        if (this.head == null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    //display 
    display() {
        if (this.head == null) {
            console.log("Nothing here");
        } else {
            let currNode = this.head;
            while (currNode != null) {
                console.log(currNode.data);
                currNode = currNode.next;
            }
        }
    }
    //deleting
    deleting(data) {
        console.log("deleted value is :" + data);

        let temp = this.head, prev = null;
        if (temp != null && temp.data == data) {   //temp.data olredy ulla data    `data = delete data`
            this.head = temp.next;  // next value moved head
            return;
        }
        while (temp != null && temp.data != data) {
            prev = temp;
            temp = temp.next;
        }
        if (temp == this.tail) {  // is it tail value then exucuting this 
            this.tail = prev;
            this.tail.next = null;
            return;
        }
        prev.next = temp.next;
    }
    // midle or last value adding 
    midleAdding(nextTo, data) {
        let newNode = new Node(data);
        let temp = this.head;
        while (temp != null && temp.data != nextTo) {
            temp = temp.next;
        }
        if (temp == null) {
            return;
        }
        if (this.tail == newNode) {
            this.tail.next = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }
}

let list = new SLinkedList();
list.display();

list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);
list.addNode(50);

// list.deleting(30);
// list.midleAdding(10,69);
// list.midleAdding(30,69);
list.midleAdding(50, 69);

list.display();
*/


//duble Linked List
class Node {
    constructor(data) { // constructor
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DobleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    //adding
    adding(data){
        let newNode = new Node(data);
        if(this.head ==null ){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
    }
    //displaying
    display(){
        let temp = this.head;
        if (temp==null){
            console.log("Null");
        }
        while( temp != null ){
            console.log(temp.data);
            temp = temp.next;
        }
    }
    //displayriverse
    displayPrev(){
        let temp = this.tail;
        while(temp != null){
            console.log(temp.data);
            temp = temp.prev;
        }
    }
    //deleting
    deleting(data){
        let temp = head;
        while( temp != null && temp.data != data ){
            temp = temp.next;
        }
        if (this.tail == data){
            prev = this.tail;
            this.tail.next = null;
            return;
        }
        // if() /////////////////////////
    }
}

let obj = new DobleLinkedList();
obj.display();

obj.adding(10);
obj.adding(20);
obj.adding(30);
obj.adding(40);
obj.adding(50);

obj.display();

obj.displayPrev();
