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
 
    addNode(data) { 
        let newNode = new Node(data); 
 
        if (this.head == null) { 
            this.head = newNode; 
        } else { 
            this.tail.next = newNode; 
        } 
        this.tail = newNode; 
    } 
 
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
     dilite(data){ 
        let temp = this.head, prev = null; 
        if(temp != null && temp.data == data ){   //temp.data olredy ulla data    data = delete data 
            this.head = temp.next;  // next value moved head 
            return; 
        } 
        while (temp!=null && temp.data != data ){ 
            prev = temp; 
            temp = temp.next; 
        } 
        if (temp == this.tail){  // is it tail value then exucuting this  
            this.tail = prev; 
            this.tail.next= null; 
            return; 
        } 
        prev.next = temp.next; 
     } 
} 
 
let list = new SLinkedList(); 
list.display(); 
 
list.addNode(10); 
list.addNode(20); 
list.addNode(30); 
list.addNode(40); 
 
list.dilite(20); 
list.display();