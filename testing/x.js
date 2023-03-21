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
