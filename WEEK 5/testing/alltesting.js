/*
// all sorting
// 1. bubble sort 
// 2. inserton sort 
// 3. selection sort 
// 4. quck sort 
// 5. merge sort
// hash table 
// stack && queue
*/
// 1. bubble sort 
/*
function bubbleSort(arr){
    for (var i =0 ;i<arr.length-1;i++){
        for (var j =0 ;j<arr.length - i -1; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr);
}
const arr=[20,90,50,30,70,60,10,80,];
bubbleSort(arr);
*/
// 2. inserton sort 
/*
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var j = i - 1;
        var temp = arr[i];
        while (j >= 0 && arr[j]>temp ){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    console.log(arr);
}
const arr=[20,90,50,30,70,60,10,80,];

insertionSort(arr);
*/
// 3. selection sort 
/*
function selectionSort(arr){
    for (var i = 0; i<arr.length; i++){
        var sm = i;
        for(var j = i+1; j<arr.length; j++){
            if (arr[j] < arr[sm]){
                sm = j;
            }
        }
        if (sm != i ){
            [arr[i], arr[sm]] = [arr[sm], arr[i]];
        }
    }
    console.log(arr);
}
const arr=[20,90,50,30,70,60,10,80,];
selectionSort(arr);
*/
// 4. quck sort 
/*
function quckSort (arr){
    if(arr.length <=1){
        return arr;
    }
    quckSortHelper(arr, 0, arr.length-1);
    return arr;
}
function quckSortHelper(arr, firstIdx, endIdx){
    if (firstIdx >endIdx){
        return ;
    }
    let pivertIdx = firstIdx;
    let leftIdx = firstIdx+1;
    let rightIdx = endIdx;

    while(leftIdx <= rightIdx){
        if (arr[leftIdx] > arr[pivertIdx] && arr[rightIdx] < arr[pivertIdx]){
            swap(arr, leftIdx, rightIdx);
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
    swap(arr, pivertIdx, rightIdx);
    quckSortHelper(arr, firstIdx, rightIdx-1);
    quckSortHelper(arr, rightIdx+1, endIdx);
}
function swap(arr, i, j){
    [arr[i] , arr[j]] = [arr[j], arr[i]];
}
console.log(quckSort([49,50,10, 15,40,30,20,70,66,25]));
*/
// 5. merge sort

function mergeSort(arr){
    if (arr.length <=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let firstHalf = arr.slice(0, mid);
    let secondHalf = arr.slice( mid);
    return join(mergeSort(firstHalf), mergeSort(secondHalf));
}
function join (firstArr, secondArr){
    let i = 0 , j = 0 , k = 0 ;
    newArr=[];
    while( i < firstArr.length && j< secondArr.length){
        if ( firstArr[i] < secondArr[j]){
            newArr[k++] = firstArr[i++];
        }else{
            newArr[k++] = secondArr[j++];
        }
    }
    while( i< firstArr.length){
        newArr[k++] = firstArr[i++];
    }
    while( j < secondArr.length){
        newArr[k++] = secondArr[j++];
    }
    return newArr;
}
const array =[100,150,50,300,200,400,250,350,500];
console.log(mergeSort(array));

// hash table 
/*
class hashtable{
    constructor(size){
        this.size = size;
        this.table = new Array(size);
    }
    hash (key){
        let total = 0;
        for (var i = 0 ;i<key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set (key, value){
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket){
            this.table[index] = [[key, value]];
        }else{
            let samekeyItm = bucket.find( x => x[0] === key) ;
            if (samekeyItm){
                samekeyItm[1] = value;
            }else{
                bucket.push([key,value]);
            }
        }
    }
    display(){
        for(var i =0 ;i<this.table.length ;i++){
            if (this.table[i]){
                console.log(i , this.table[i]);
            }
        }
    }
}
let o  = new hashtable(20);
o.set("name", "raheem");
o.set("age", 20);
o.set("place", "mlp");
o.display();
*/
// stack && queue
/*
class Node{
    constructor (data){
        this.data = data;
        this.next = null;
    }
}
class stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }
    push(data){
        let newNode = new Node(data);
        if( this.top == null){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
    }
    pop(){
        if (this.top == null){
            return;
        }else{
            this.top = this.top.next;
        }
    }
    display(){
        let temp = this.top;
        if (temp == null){
            console.log("empty");
            return;
        }
            while(temp !=null){
                console.log(temp.data);
                temp = temp.next;
            }
    }
}
let o = new stack();
o.push(10);
o.push(20);
o.push(30);
o.pop();
o.display();
*/
