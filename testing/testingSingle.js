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


// class Node {
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
//     adding(data){   //init

//         let newNode = new Node(data);

//         if (this.head == null){
//             this.head = newNode;
//         }else{
//             this.tail.next = newNode;
//         }
//         this.tail = newNode;
//     }

//     display(){ //The display method traverses
//         if (this.head == null){
//             console.log("null ......");
//         }
//         let temp = this.head;
//         while(temp != null){
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }

//     deleting(data){
//         let temp = this.head;//   2 way to doing  
//         let prev = null;  
//         if (this.head.data == data  && this.head != null){  //head checking
//             this.head = this.head.next;
//             return;
//         }
//         while(temp !=null && temp.data != data ){ //traverse
//             prev = temp;
//             temp = temp.next;
//         }
//         if(temp == null ){ 
//             return;
//         }
//         prev.next = temp.next;

//         // console.log(prev);   //eg:- Node {data: 30,next: Node { data: 50, next: Node { data: 60, next: null } }}
//         // console.log("JJJJJ");

//         if (this.tail.data == data && this.tail != null){  //tail checking 
//             prev = this.tail;
//             // this.tail.next = null;
//             console.log(this.tail);
//             // console.log("JJJJJ");
//             return;
//         }
//     }

//     insertAfter(nextTo,data){
//         let newNode = new Node(data);
//         let temp = this.head;
//         while(temp != null && temp.data != nextTo){
//             temp = temp.next;
//         }
//         if (temp == null ){
//             return;
//         }
//         if (temp == this.tail){ // end case
//             this.tail.next = newNode;
//             this.tail = newNode;  
//             return;
//         }
//         newNode = temp;
//         temp.next = newNode;
//     }
// }

// let obj = new SingleLinkedList();
// obj.display();

// obj.adding(10)
// obj.adding(20)
// obj.adding(30)
// obj.adding(40)
// obj.adding(50)
// obj.adding(60)

// // obj.display();

// // obj.deleting(40);
// // obj.deleting(60);


// obj.insertAfter(40,333);

// obj.display();


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
