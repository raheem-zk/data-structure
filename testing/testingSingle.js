// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// class SingleLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }
//     adding(data){
//         let newNode = new Node(data);
//         if (this.head == null){
//             this.head = newNode;
//         }else{
//             this.tail.next = newNode;
//         }
//         this.tail = newNode;
//     }
//     display(){
//         if (this.head == null){
//             console.log("null ");
//         }
//         let temp = this.head;
//         while(temp != null){
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }
// }

// let obj = new SingleLinkedList();

// obj.display();
// obj.adding(10);
// obj.adding(20);
// obj.adding(30);
// obj.adding(40);
// obj.adding(50);

// obj.display();


class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    adding(data){   //init

        let newNode = new Node(data);

        if (this.head == null){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    display(){
        if (this.head == null){
            console.log("null ......");
        }
        let temp = this.head;
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    deleting(data){
        let temp = this.head;//   2 way to doing  
        let prev = null;  
        if (this.head.data == data  && this.head != null){
            this.head = this.head.next;
            return;
        }
        while(temp !=null && temp.data != data ){
            prev = temp;
            temp = temp.next;
        }
        if(temp == null ){
            return;
        }
        prev.next = temp.next;

        console.log(prev);   //eg:- Node {data: 30,next: Node { data: 50, next: Node { data: 60, next: null } }}
        console.log("JJJJJ");

        if (this.tail.data == data && this.tail != null){
            prev = this.tail;
            this.tail.next = null;
            console.log(this.tail);
            console.log(prev);
            console.log("JJJJJ");
            return;
        }
    }
}

let obj = new SingleLinkedList();
obj.display();

obj.adding(10)
obj.adding(20)
obj.adding(30)
obj.adding(40)
obj.adding(50)
obj.adding(60)

// obj.display();

obj.deleting(40);

obj.display();
