// 1 .sorting Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    inseting(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    display() {
        if (this.head == null) {
            console.log("no data geting!");
        }
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
        console.log("count is :"+this.size);
    }
    // Linera searching
    linearSearch(target) {
        let temp = this.head;
        while (temp != null && temp.data != target) {
            temp = temp.next;
        }
        if (temp != null && target === temp.data) {
            return true;
        } else {
            return false;
        }
    }
    //sorting
    sorting(){
        let temp =this.head;
        while(temp != null){
            let x = temp;
            let min = temp.next;
            while (min !=null ){
                if (min.data < x.data){
                    x = min;
                }
                min = min.next;
            }
            let k = x.data;
            x.data = temp.data;
            temp.data = k;

            temp = temp.next;
        }
    }
    //binarySearch
    get(index){
        let temp = this.head;
        if(index <0 || this.size <index){
            return "this is not valid!";
        }
        for (var i=0 ;i<index; i++){
            temp = temp.next;
        }
        return temp;
    }
    binarySearch(data){
        let start = 0;
        let end = this.size -1;
        while(start <= end){
            let mid = (start + end)/2;
            let minNode = this.get(mid);
            if (minNode.data === data){
                return true;
            }else if (minNode.data < data){
                start = mid+1;
            }else{
                end = mid -1;
            }
        }
        return false;
    }
    // allZeroMoveTheEnd
    zeroMovingEnd(){  // little eror
        let temp =this.head;
        while(temp !=null ){
            if (temp.data ===0  ){
                let p = this.tail.data;
                this.tail.data = temp.data;
                temp.data = p;
            }
            temp = temp.next;
        }
    }   
    deleting(data){
        let temp = this.head;
        let prev = null;
        if (temp != null&& temp.data === data){
            this.head = temp.next;
            this.size--;
            return;
        }
        while(temp!=null && temp.data != data){
            prev = temp;
            temp = temp.next;
        }
        if (temp == null){
            return;
        }
        if (this.tail.data == temp.data){
            this.tail = prev;
            this.tail.next = null;
            this.size--;
            console.log("fff")
            return;
        }else{
            prev.next = temp.next;
            this.size--;
        }

    }
    removeDuplicats(){
        let temp =this.head;
        while(temp!=null){
            let next = temp.next;
            while(next != null && next.data == temp.data) {
                next = next.next;
            }
            temp.next = next;

            if(next == null){
                this.tail = temp;
                this.tail.next = null;
                return;
            }
            temp = temp.next;
        }
    }
}

let list = new SLinkedList();
// list.display();
list.inseting(10);
list.inseting(20);
list.inseting(10);
list.inseting(40);
list.inseting(40);

// let ans = list.linearSearch(20);
// console.log(ans);
list.sorting();
// console.log(list.binarySearch(20));
// list.zeroMovingEnd();
// console.log("JJJJJJJJJJJJ");
// list.display();
// list.deleting(10);
list.removeDuplicats();
 list.display();
