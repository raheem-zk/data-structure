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
        if (this.head == null){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.size++;

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
    searching(data){
        let temp = this.head;
        while(temp!= null){
            if (temp.data == data){
                return temp.data;
            }
            temp = temp.next;
        }
        return false;
    }
    insertAtFirst(data){
        let temp = this.head;
        let newNode = new Node(data);
        this.head = newNode;
        this.head.next = temp;
    }
    insertAtEnd(data){
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.tail.next = null;
    }
    insertAfterAValue(after, data){
       let temp = this.head;
       let newNode = new Node(data);
       while(temp != null && temp.data != after){
        temp = temp.next;
       }
       if(temp == null){
        return ;
       }
       if (temp == this.tail){
        this.tail.next = newNode;
        this.tail = newNode;
        this.tail.next = null;
        return;
       }
       newNode.next = temp.next;
       temp.next =newNode;
    }
    insertBefore(before , data){
        let prev = null;
        let newNode = new Node(data);
        let temp = this.head;
        if (temp.data === before && temp!= null){
            newNode.next = temp;
            this.head = newNode;
            return;
        }
        while(temp!=null && temp.data != before){
            prev = temp;
            temp = temp.next;
        }
        if (temp == null){
            return;
        }
        newNode.next = temp;
        prev.next = newNode;
        
    }
    insertGivenPosition(pos, data){
        if (pos <0 || this.size <pos){
            console.log("its not valied ");
            return
        }
        let newNode = new Node(data);
        let temp = this.head;
        let prev = this.head;
        if(pos === 1){
            newNode.next = temp;
            this.head = newNode;
            console.log("jjj")
            console.log(this.head)
            return;
        }
        var s=0 ;
        while(s != pos ){
            prev = temp;
            temp = temp.next;
            s++;
        }
        if (pos === this.size){
            // console.log(pos,`   `,this.size);
            newNode.next = this.tail;
            prev.next = newNode;
            return;
        }
        newNode.next = temp.next;
        prev.next = newNode;
    }
    insertIndexPos(data, index){
        let newNode = new Node(data);
        let prev = this.head;
        if (index <1 || index >this.size){
            return;
        }
        if (index === 1){
            newNode.next = prev;
            this.head = newNode;
            return;
        }
        for (let i= 1 ;i<index-1;i++){
            prev = prev.next;
        }
        newNode.next = prev.next;
        prev.next = newNode;
        this.size++;
    }
    deleting(pos){
        let temp = this.head;
        let prev = null;
        if(pos <1 || pos >this.size){
            return false;
        }
        if (pos !=null && pos === 1){
            this.head = temp.next;
            this.size--;
            return;
        }
        for (let i =1 ;i<pos;i++ ){
            prev = temp;
            temp = temp.next;
        }
        if (pos === this.size){
            this.tail = prev;
            this.tail.next = null;
            this.size--;
            return;
        }
        prev.next = temp.next;
        this.size--;
    }
    avarage(){
        let temp = this.head;
        let sum =0;
        while(temp!=null){
            sum +=temp.data;
            temp = temp.next;
        }
         
        console.log(sum/this.size);
    }
    sorting(){
        let temp = this.head;
        while(temp !=null ){
            let k =null;
            let next=temp.next;
            if (next === null){
                return;
            }
            if (next.data < temp.data){
                k = next;
                next = temp;
                temp = k;
            }
            temp = temp.next;
        }
    }
    sorting1(){
        let temp = this.head;
        let se = temp.next;
        let k = temp;
        for (temp ;temp!=null ;temp.next){
            for (se ; se!=null ; se.next){
                if (temp.data < se.data){
                    k.data = temp.data;
                    temp = se.data;
                    se.data = k.data;
                }
            }
        }
        this.display();
    }
    sorting22(){
        if (!this.head || !this.head.next) {
            return this.head;
          }
        let temp = this.head;
        while(temp !=null){
            let min = temp;
            let x = temp.next;
            while(x != null){
                if (x.data <min.data){
                    min = x;
                }
                x = x.next;
            }
            let k = min.data;
            min.data = temp.data;
            temp.data = k ;
            temp = temp.next;
        }
    } 
    searchingarayElament(array,data){
        for (var i =0 ;i<array.length; i++){
            if (array[i] == data){
                return true;
            }
        }
        return false;
    }
    conuntingDuplicats(val){
        let count=0;
        const a=[1,2,3,4,5,5,5,3,3,21];
        for (var i=0 ;i<a.length;i++){
            if (a[i]=== val){
                count++;
            }
        }
        console.log(count);
    }
}

 let list = new LinkedList();
// console.log(`List is empty?` ,list.isEmpty());
// console.log(`List size`, list.getSize());
list.getting(10);
list.getting(40);
list.getting(30);
list.getting(20);
list.getting(50);

// list.suming();
// console.log(list.midle());
// console.log("duplicat deleting :");
// list.duplicatDeleting();
// console.log(list.searching(200));
// list.display();
// list.ff();
// console.log(list.midleval());
// list.insertAtFirst(2);
// list.insertAtEnd(11111);
// list.insertAfterAValue(53, 55555);
// list.insertBefore(20,3333333);
// list.insertGivenPosition(0, 4444444444444);
// console.log("Jjjjjjjjjjjjjj")
// console.log(list.tail);
// console.log(list.getSize())      
// console.log(`size is ${list.getSize()}`);
// list.insertIndexPos(59999999999, 5);
// list.deleting(3);
// list.display();
// console.log(list.getSize())      
// list.avarage();

// list.sorting22(); 

// console.log(list.searchingarayElament([1,2,3,4,5,6],7));
// list.display();

list.conuntingDuplicats(5)