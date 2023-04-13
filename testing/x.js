// /*
// class Node {
//     constructor (data){
//         this.data = data;
//         this.next = null;
//     }
// }
// class SLinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }
//     adding(data){
//         let newNode = new Node(data);
//         let temp = this.head;
//         if (this.head ==null){
//             this.head = newNode;
//         }else{
//             this.tail.next = newNode;
//         }
//         this.tail = newNode;
//     }
//     display(){
//         let temp = this.head;
//         if (temp==null){
//             console.log("empty");
//         }
//         while( temp != null){
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }
//     deleting(data){
//         // head
//         let temp = this.head;
//         let prev = null;
//         if (temp.data == data && temp != null){
//             this.head = temp.next;
//             return;
//         }
//         while(temp != null && temp.data != data ){ //
//             prev = temp;
//             temp = temp.next;
//         }
//         if (temp == this.tail){
//             this.tail = prev;
//             this.tail.next = null;
//             return;
//         }
//         prev.next = temp.next;

//     }
//     insertAfter(nextTo, data){
//         let temp = this.head;
//         let newNode = new Node(data);
//         while(temp != null && temp.data != nextTo){ // treverse
//             temp = temp.next;
//         }
//         if (temp== this.tail){ // tail insert after
//             this.tail = newNode;
//             temp.next = newNode;
//             console.log(this.head);
//             console.log(this.tail);
//             return;
//         }
//         newNode.next = temp.next;
//         temp.next = newNode;
//     }
// }

// let obj = new SLinkedList();
// obj.display();
// obj.adding(10);
// obj.adding(20);
// obj.adding(30);
// obj.adding(40);
// obj.display();
// console.log("_____________");

// obj.deleting(20);  // set ullathine kalayunu 

// obj.insertAfter(30,777); //inserting new value
// obj.display();
// */

// // DobleLinkedList

// class Node {
//     constructor(data){
//         this.data = data;
//         this.prev = null;
//         this.next = null;
//     }
// }
// class DobleLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }
//     addNode(data){
//         let newNode = new Node(data);
//         if(this.head == null ){
//             this.head = newNode;
//         }else{
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//         }
//         this.tail = newNode;
//     // console.log(this.head);
//     }
//     display (){
//         let temp = this.head;
//         while(temp != null){
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }
//     displayReverse(){
//         let temp = this.tail;
//         while(temp != null ){
//             console.log(temp.data);
//             temp = temp.prev;
//         }
//     }
//     deleting(data){
//         let temp = this.head;
//         if (temp != null && temp.data == data){
//             this.head = temp.next;
//             this.head.prev = null;
//             // console.log(temp);
//             return;
//         }
//         while(temp != null && temp.data != data){
//             temp = temp.next;
//         }
//         if (temp == null) {
//             return; // If data not found, exit the method
//           }
//         if(temp == this.tail){
//             this.tail = temp.prev;
//             this.tail.next = null;
//             return;
//         }
//         temp.prev.next = temp.next;
//         temp.next.prev = temp.prev;
//     }
//     // inserting before a value 
//     insertingBefore(befor,data){
//         let newNode = new Node(data);
//         let temp = this.head;

//         if(temp.data == befor && temp != null){
//             newNode.next = temp;
//             this.head = newNode;
//             temp.next.prev = newNode;
//             return;
//         }
//         while(temp != null && temp.data != befor){
//             temp = temp.next;
//         }
//         if (temp == null){
//             return;
//         }
//             newNode.next = temp;
//             newNode.prev = temp.prev;
//             temp.prev.next = newNode;
//             temp.prev = newNode;
//     }
//     insertingAfter(after, data){
//         let newNode = new Node(data);
//         let temp = this.head;
//         while( temp != null && temp.data != after){
//             temp = temp.next;
//         }
//         if(temp == null){
//             return;
//         }
//         if (temp == this.tail){
//             newNode.prev = temp;
//             temp.next = newNode;
//             this.tail = newNode;
//             this.tail.next = null;
//             // console.log(newNode.prev)
//             return;
//         }
//         newNode.next = temp.next;
//         temp.next.prev = newNode;
//         temp.next = newNode;
//         newNode.prev = temp;
//     }
// }
// let obj = new DobleLinkedList();
// obj.addNode(10);
// obj.addNode(20);
// obj.addNode(30);
// obj.addNode(40);
// obj.addNode(50);

// // obj.deleting(50);
// // obj.display();
// // obj.displayReverse();

// // obj.insertingBefore(50,8888);
// // obj.display();


// obj.insertingAfter(30, 7777);
// obj.displayReverse();

// console.log("-----------------");
// // obj.insertingAfter(50, 7777);
// obj.display();

/*
class Node {
    constructor(data){
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
    adding(data){
        let newNode = new Node(data);
        if ( this.head == null){
            this.head = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    display(){
        let temp = this.head;
        if (temp == null){
            console.log("empty......");
            return;
        }
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
    displayReverse(){
        let temp = this.tail;
        if (temp == null){
            console.log("empty......");
            return;
        }
        while(temp != null){
            console.log(temp.data);
            temp = temp.prev;
        }
    }
    deleting(data){
        let temp = this.head;
        if(this.head == null){
            console.log("eror")
        }
        if (temp.data == data){
            this.head=temp.next;
            this.head.prev = null;
            return;
        }
        while(temp != null && temp.data != data){
            temp = temp.next;
        }
        if (temp == null ){
            console.log("eror");
            return;
        }
        if (this.tail.data == temp.data){
            this.tail = temp.prev;
            this.tail.next = null;
            return;
        }
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
    }
    beforeAdding(data){
        let temp = this.head;
        if (temp.data === data && temp!= null){
        }
    }
}
let node = new DobleLinkedList();
node.display();
node.adding(10);
node.adding(20);
node.adding(30);
node.adding(40);
node.deleting(66);
node.display();
console.log("HHHHHHHHHHHHH");
node.displayReverse();
*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    inserting(data) {
        let curentnode = this.root;
        if (curentnode == null) {
            this.root = new Node(data);
            return;
        }

        while (true) {
            if (data < curentnode.data) {
                if (curentnode.left == null) {
                    curentnode.left = new Node(data);
                    break
                } else {
                    curentnode = curentnode.left;
                }
            } else {
                if (curentnode.right == null) {
                    curentnode.right = new Node(data);
                    break;
                } else {
                    curentnode = curentnode.right;
                }
            }
        }
    }
    constains(data){
        let temp = this.root;
        while(temp != null){
            if (data <temp.data){
                temp = temp.left;
            }else if (data >temp.data){
                temp = temp.right;
            }else{
                return true;
            }
            return false;
        }
    }
}

var obj = new BinarySearchTree();
obj.inserting(100);
obj.inserting(50);
obj.inserting(150);
obj.inserting(155);
obj.inserting(100);
obj.inserting(10);

console.log(obj.constains(10));