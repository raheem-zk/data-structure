// // Counting the number of occurrences of an element in the array:

// function conuntChecking(array, value){
//     var conunt=0;
//     for(var i =0 ;i<array.length; i++){
//         if (array[i] == value){
//             conunt++;
//         }
//     }
//     return conunt;
// }

// const array=[10,20,3,40,20,30,3,3,3,3,4,5,6];
// var val=3;
// var ans = conuntChecking(array, val);
// console.log(`the ${val} conund is ${ans}`);

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0 ;
    }
    isEmpty(){
        return this.size == 0;
    }
    getSize(){
        return this.size;
    }
    getting(data){
        let newNode = new Node(data);
        this.size++;
        if (this.head == null){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    suming(){
        var sum =0;
        let temp = this.head;
        while(temp != null){
            sum += temp.data;
            temp = temp.next;
        }
        console.log(sum);
        console.log(this.size);
    }
    midle(){
        let fast = this.head;
        let slow = this.head;
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;            
        }
        return slow.data;
    }
    duplicatDeleting(){
        let temp = this.head;
        while(temp!=null){
            let next = temp.next;
            while( next!= null && temp.data == next.data ){
                next = next.next;
            }
            temp.next = next;
            if (next == null){
                this.tail = temp;
                this.tail.next =null;
            }
            temp = next;
        }
    }
    display(){
        let temp = this.head;
        while(temp!=null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
const list = new LinkedList();
// console.log(`List is empty?` ,list.isEmpty());
// console.log(`List size`, list.getSize());
list.getting(10);
list.getting(40);
list.getting(30);
list.getting(30);
list.getting(30);
list.getting(20);
list.getting(70);

list.suming();
console.log(list.midle());
console.log("duplicat deleting :");
list.duplicatDeleting();
list.display();