class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkedList{
    constructor (){
        this.head = null;
        this.tail = null;
    }
    addingINIT(data){
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
        while(temp !=null ){
            console.log(temp.data);
            temp = temp.next;
        }
    }
    displayReverse(){
        let temp = this.tail;
        while(temp != null){
            console.log(temp.data);
            temp = temp.prev;
        }
    }
    deleting(data){
        let temp = this.head;
        if(temp.data == data){
            this.head = temp.next;
            this.head.prev = null;
            return;
        }
        while( temp != null && temp.data != data){
            temp = temp.next;
        }
        if (temp == null ){
            return;
        }
        if(temp == this.tail){
            this.tail = temp.prev;
            this.tail.next = null;
            return;
        }
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
    }

    repeatDeleting(){
        let temp = this.head;
        while(temp != null){
            let bob = temp.next;
            while( bob != null && bob.data === temp.data){
                bob = bob.next;
            }
            temp.next = bob;
            if (bob == null){
                this.tail = temp;
                this.tail.next = null;
            }else{
                bob.prev = temp;
            }
            temp = bob;
        }
    }
}
let list = new DoubleLinkedList();
list.addingINIT(10);
list.addingINIT(10);
list.addingINIT(10);
list.addingINIT(20);
list.addingINIT(20);
list.addingINIT(20);
list.addingINIT(30);
list.addingINIT(40);
list.addingINIT(40);
list.addingINIT(50);

// console.log(list.tail);
// list.deleting(20);
// list.display();
// console.log("----------------");
// list.displayReverse();

list.display();
console.log("----------------");

list.repeatDeleting();

// list.display();
console.log("----------------");
list.displayReverse();