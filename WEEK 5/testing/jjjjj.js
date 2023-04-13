// bobbule sort 
/*
function bubbleSort(arr){
    for (var i =0 ;i<arr.length -1 ; i++){
        for (var j =0 ;j<arr.length -1 -i; j++){
            if (arr[j] > arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            }
        }
    }
    console.log(arr);
}
var a=[5,3,7,9,2,4,8,6];
bubbleSort(a);
*/
// insertion sort
/*
function insertionSort(arr){
    for (var i = 1; i<arr.length ;i++){
        var temp = arr[i];
        var j = i-1;
        while(j>= 0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    console.log(arr);
}
var a=[5,3,7,9,2,4,8,6];

insertionSort(a);
*/
// selection sort
/*
function selectionSort(arr){
    for (var i =0 ;i<arr.length ;i++){
        var sm = i;
        for (var j = i+1;j<arr.length; j++){
            if (arr[j]<arr[sm]){
                sm = j;
            }
        }
        if (i !== sm ){
           [ arr[sm],arr[i]] = [arr[i],arr[sm]];
        }
    }
    console.log(arr);
}
var a=[5,3,7,9,2,4,8,6];
selectionSort(a);
*/
// quckSort 
/*
function quckSort(arr){
    if( arr <= 1){
        return arr;
    }
    quckSortHelper(arr, 0 , arr.length -1);
    return arr;
}
function quckSortHelper(arr, startIdx, endIdx){
    if (startIdx > endIdx){
        return;
    }
    let pivertIdx = startIdx ;
    let leftIdx = startIdx+1;
    let rightIdx = endIdx ;

    while(leftIdx <= rightIdx){
        if (arr[leftIdx] > arr[pivertIdx] && arr[rightIdx] < arr[pivertIdx]){
            swap  (arr, leftIdx , rightIdx);
            leftIdx++;
            rightIdx--;
        }
        if (arr[leftIdx] <= arr[pivertIdx]){
            leftIdx++;
        }
        if (arr[rightIdx] >= arr[pivertIdx]){
            rightIdx--;
        }
    }
    swap (arr, pivertIdx , rightIdx);
    quckSortHelper(arr, startIdx, rightIdx-1);
    quckSortHelper(arr, rightIdx+1, endIdx);
}
function swap(arr, i, j){
    [ arr[i], arr[j]] = [arr[j] , arr[i]];
}

var a=[5,3,7,9,2,4,8,6];

console.log(quckSort(a));
*/
// merge sort 
/*
function mergeSort(arr){
    if (arr.length <= 1){
        return arr;
    }
    var mid = Math.floor(arr.length /2);
    var LHalf = arr.slice(0 , mid);
    var RHalf = arr.slice(mid);
    return join(mergeSort(LHalf), mergeSort(RHalf));

}
function join(LHalf, RHalf){

    var i = 0 , j = 0 , k =0 ;
    var result = [];
    while(i < LHalf.length && j< RHalf.length){
        if (LHalf[i] < RHalf[j]){
            result[k++] = LHalf[i++];
        }else{
            result[k++] = RHalf[j++];
        }
    }
    while(i<LHalf.length){
        result[k++] = LHalf[i++];
    }
    while( j <RHalf.length){
        result[k++] = RHalf[j++];
    }
    return result;
}
var a=[5,3,7,9,2,4,8,6];
console.log(mergeSort(a));
*/

// hash table 
/*
class hashTable{
    constructor(size){
        this.size = size;
        this.table = new Array(size);
    }
    hash(key){
        var total =0;
        for (var i =0; i<key.length;i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set (key ,value){
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket){
            this.table[index] = [[key, value]];
        }else{
            let samekeyItm = bucket.find( x => x[0] ===key );
            if (samekeyItm){
                samekeyItm[1] = value;
            }else{
                bucket.push([key, value]);
            }
        }
    }
    display(){
        for ( var i =0 ;i<this.table.length; i++){
            if (this.table[i]){
                console.log(i , this.table[i]);
            }
        }
    }
    get (key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let samekeyItm = bucket.find( x => x[0] === key);
            if (samekeyItm){
                return samekeyItm;
            }
        }
        return undefined;
    }
    
     remove(key){
        let index = this.hash(key);
        let bubble = this.table[index];
        if (bubble){
            let samekeyItm = bubble.find( x => x[0] === key );
            if( samekeyItm){
                bubble.splice(bubble.indexOf(samekeyItm), 1);
            }
        }
    }
}

let h = new hashTable(20);
h.set("name", "raheem");
h.set("age", 20);
h.set("place", "malappuram");
h.set("phone", 9876543210);
h.display();

console.log(h.get("name"));
h.remove("age");
h.display();
*/

// stack 
/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }
    push (data){
        let newNode = new Node(data);
        if(this.top==null){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }
    pop(){
        if (this.top!=null){
            this.top = this.top.next;
            this.size--;
        }
    }
    display(){
        let temp = this.top;
        while(temp!= null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
    getSize(){
        console.log(this.size);
    }
    isEmpty(){
        return this.top === null 
    }
    peek(){
        return this.top.data;
    }
}
let o = new Stack();
o.push(10)
o.push(20)
o.push(30)
o.push(40)
// o.getSize()

o.pop();
console.log(o.peek());

// o.getSize()
// console.log(o.isEmpty())
// o.display();
*/
// queue
/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class aqueue{
    constructor(){
        this.frent = null;
        this.rear = null;
    }
    enqueue(data){
        let newNode = new Node(data);
        if (this.frent == null){
            this.frent = this.rear = newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    dequeue(){
        if (this.frent === null){
            console.log("empty node ");
        }else{
            this.frent=this.frent.next;
        }
        if (this.frent == null){
            this.rear =null;
        }
    }
    display(){
        let temp = this.frent;
        if (this.frent===null){
            console.log("empy...");
            return;
        }
        while(temp!== null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
let o = new aqueue();

o.enqueue(10)
o.enqueue(20)
o.enqueue(30)
o.display();
*/
