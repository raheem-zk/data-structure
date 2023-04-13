//Bubble sort
function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr);
}
// const array= [40,20,60,10,30,80,50,70];
// bubbleSort(array);

// Insertion sort
function insertionSort(arr){
    for( var i = 1 ;i<arr.length; i++){
        var j = i-1;
        var temp = arr[i];
        while( j >= 0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    console.log(arr);
}
// const array= [40,20,60,10,30,80,50,70];
// insertionSort(array);

//Selection sort 

function selectionSort(arr){
    for( var i = 0 ;i<arr.length ;i++){
        let sm = i;
        for(var j= i+1;j<arr.length; j++){
            if (arr[j] <arr[sm]){
                sm =j;
            }
        }
        if(i!= sm){
            [arr[i], arr[sm]] = [arr[sm], arr[i]];
        }
    }
    console.log(arr);
}
// const array= [40,120,600,100,30,80,50,70];
// selectionSort(array);

//Quick sort

function quckSort(arr){
    if (arr.length <=1){
        return arr;
    }
    qucksortHelper(arr, 0 ,arr.length-1);
    return arr;
}
function qucksortHelper(arr, firstIdx, endIdx){
    if(firstIdx >= endIdx){
        return;
    }
    let pivertIdx = firstIdx;
    let leftIdx = firstIdx+1;
    let rightIdx = endIdx;
    while( leftIdx <= rightIdx){
        if (arr[leftIdx] > arr[pivertIdx] && arr[rightIdx] < arr[pivertIdx]){
            [arr[leftIdx],arr[rightIdx]] = [arr[rightIdx],arr[leftIdx]];
            leftIdx++
            rightIdx--;
        }
        if (arr[leftIdx] <= arr[pivertIdx]){
            leftIdx++;
        }
        if (arr[rightIdx] >= arr[pivertIdx]){
            rightIdx--;
        }
    }
    [arr[pivertIdx] ,arr[rightIdx]] =[ arr[rightIdx], arr[pivertIdx]];
    qucksortHelper(arr, firstIdx, rightIdx-1);
    qucksortHelper(arr,  rightIdx+1, endIdx);   
}
// const array= [40,120,600,100,30,80,50,70];
// console.log(quckSort(array));

//Merge sort
function mergeSort(arr){
    if (arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let leftHalf = arr.slice(0, mid);
    let rightHalf = arr.slice(mid);
    return join(mergeSort(leftHalf), mergeSort(rightHalf));
}
function join(firstHalf, secondHalf){
    let i =0 , j= 0 , k =0;
    let newArr =[];
    while( i < firstHalf.length && j < secondHalf.length){
        if ( firstHalf[i] < secondHalf[j]){
            newArr[k++] = firstHalf[i++];
        }else{
            newArr[k++] = secondHalf[j++];
        }
    }
    while( i< firstHalf.length){
        newArr[k++] = firstHalf[i++];
    }
    while(j < secondHalf.length){
        newArr[k++] = secondHalf[j++];
    }
    return newArr;
}
// const array= [40,120,600,100,30,80,50,70];
// console.log(mergeSort(array));

// Stack 

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.size = null;
    }
    push(data){
        let newNode = new Node(data);
        if(this.top === null){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
    }
    pop(){
        let temp = this.top;
        if (this.top === null ){
            console.log("empty..");
        }else{
            this.top = temp.next;
        }
    }
    display(){
        let temp = this.top;
        if (temp == null){
            console.log("empty");
            return;
        }
        while(temp!== null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
/*
let obj = new Stack();
obj.display();

obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
obj.pop();
obj.display();
*/

// Queue
class queue{
    constructor(){
        this.frent = null;
        this.rear = null;
    }
    enqueue(data){
        let newNode = new Node(data);
        if (this.frent === null){
            this.frent = this.rear = newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    dequeue(){
        let temp = this.frent ;
        if (this.frent === null){
            console.log("empty...");
        }else{
            this.frent = temp.next;
        }
        if (this.frent === null){
            this.rear =null;
        }
    }
    display(){
        let temp = this.frent;
        if (temp == null){
            console.log("empty");
        }
        while(temp!= null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
/*
let obj = new queue();
obj.display();

obj.enqueue(10)
obj.enqueue(20)
obj.enqueue(30)
obj.enqueue(40)

obj.dequeue();
obj.display();
*/

// Hash 

class hashTable{
    constructor(size){
        this.size = size;
        this.table = new Array(size);
    }
    hash (key){
        let total = 0;
        for (var i =0 ;i<key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set (key, value){
        let index = this.hash(key);
        let temp = this.table[index];
        if (!temp){
            this.table[index] = [[key, value]];
        }else{
            let samekeyItm = temp.find( x => x[0] === key);
            if (samekeyItm){
                samekeyItm[1] = value;
            }else{
                temp.push([key, value]);
            }
        }
    }
    get (key){
        let index = this.hash(key);
        let temp = this.table[index];
        if (temp){
            let samekeyItm = temp.find( x => x[0] === key);
            if (samekeyItm){
                return samekeyItm;
            }
        }
        return undefined;
    }
    display(){
        for(var i =0 ;i<this.table.length; i++){
            if (this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

let obj = new hashTable(20);
obj.set("name", "raheem");
obj.set("age", 20);
obj.set("place", "mlp");
console.log(obj.get("place"))
obj.display();