// Write a program to remove duplicates in a sorted singly linked list

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLinkedList{
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
    removeDuplicates(){
        let curent = this.head;
        while(curent != null){
            let temp = curent.next;
            while( temp != null && temp.data == curent.data){
                temp = temp.next;
            }
            curent.next = temp;
            if (temp == null){
                this.tail = curent;
                this.tail.next = null; 
            }
            curent = curent.next;
        }
    }
    linearSearch(arr, target){
        for (var i =0 ;i<arr.length; i++){
            if (arr[i]==target){
                return true;
            }
        }
        return false;
    }
    binerySearch(array , target){
        let first =0;
        let end = array.length-1 ;
        while(first <= end){
            let mid = (first + end )/2;
            if (array[mid] === target){
                return true;
            }else if (array[mid] < target){
                first = mid+1;
            }else{
                end = mid -1;
            }
        }
        return false;
    }
    binerySearchA(arr, target){
        let start = 0;
        let end = arr.length-1;
        while(start <= end){
            let mid = (start + end)/2;
            if(arr[mid] === target){
                return true;
            }else if (arr[mid] <target){
                start = mid+1;
            }else{
                end = mid-1;
            }
        }
        return false;
    }
    binerySearchB(array, target){
        let first = 0;
        let end = array.length -1;
        while(first <= end){
            let mid = (first + end)/2;
            if (array[mid] === target){
                return true;
            }else if (array[mid] <target){
                first = mid +1;
            }else{
                end = mid -1;
            }
        }
        return false;
    }
    linearSearchA(array, target){
        for (var i=0 ;i<array.length;i++){
            if (array[i]==target){
                return true;
            }
        }
        return false;
    }
    linearSearchLinkedList(target){
        let temp = this.head;
        while(temp !=null && target!= temp){
            temp = temp.next;
        }
        if (target === temp){
            return true;
        }else{
            return false;
        }
    }
}
let list = new SLinkedList();
list.addingINIT(10);
list.addingINIT(20);
list.addingINIT(40);
list.addingINIT(30);
list.addingINIT(30);
list.addingINIT(30);
list.addingINIT(30);

// list.display();
// console.log("-------");
// list.removeDuplicates();

// list.display();

var a=list.linearSearch([1,2,3,45,6], 33);
// console.log(a);
 var arr=[1,2,3,4,5,6,7];
// var b = list.linearSearchA(arr, 4);
var v = list.linearSearchLinkedList();
console.log(v);