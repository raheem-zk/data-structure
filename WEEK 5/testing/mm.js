// bubble sort
/*
function bubbleSort(arr){
    for (var i =0 ;i<arr.length -1; i++){
        for( var j = 0;j<arr.length-1-i;j++){
            if (arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    console.log(arr);
}
bubbleSort([40,60,20,10,70,50,80]);
*/
// insertion Sort
/*
function insertionSort(arr){
    for (var i =1; i<arr.length; i++){
        var j = i-1;
        var temp = arr[i];
        while( j >= 0 && arr[j] > temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    console.log(arr);
}
insertionSort([80,40,10,59,39,20,79]);
*/
// selectio sort
/*
function selectioSort(arr){
    for( var i = 0 ;i<arr.length;i++){
        var sm = i;
        for (var j =i+1; j<arr.length ;j++){
            if(arr[j] < arr[sm]){
                sm = j;
            }
        }
        if( i!== sm){
            [arr[i] , arr[sm]] = [arr[sm],arr[i]];
        }
    }
    console.log(arr);
}
selectioSort([50,10,60,30,20,70,40]);
*/
// quck sort
/*
function quckSort(arr){
    if (arr.length <=1){
        return arr;
    }

    quckSortHelper(arr, 0, arr.length-1);
    return arr;
}
function quckSortHelper(arr, startIdx , endIdx){
    if (startIdx > endIdx){
        return;
    }
    let pivortIdx = startIdx;
    let leftIdx = startIdx+1;
    let rightIdx = endIdx;
    while( leftIdx <= rightIdx){
        if (arr[leftIdx] > arr[pivortIdx] && arr[rightIdx] < arr[pivortIdx]){
            [arr[leftIdx],arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];
            leftIdx++;
            rightIdx--;
        }
        if (arr[leftIdx] <= arr[pivortIdx]){
            leftIdx++;
        }
        if (arr[rightIdx] >= arr[pivortIdx]){
            rightIdx--;
        }
    }
    [arr[pivortIdx],arr[rightIdx]] = [arr[rightIdx],arr[pivortIdx]];
    quckSortHelper(arr, startIdx, rightIdx-1);
    quckSortHelper(arr, rightIdx+1, endIdx);
}
console.log(quckSort([50,30,60,10,20,70,80]));
*/
// merge sort
/*
function mergeSort(arr){
    if (arr.length <=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let LHalf = arr.slice(0, mid);
    let RHalf = arr.slice(mid);
    return join(mergeSort(LHalf), mergeSort(RHalf));
}
function join (lArr, rArr){
    let i = 0 , j = 0 , k = 0 ;
    let newArr = [];
    while(i < lArr.length && j < rArr.length){
        if (lArr[i] < rArr[j]){
            newArr.push(lArr[i++]);
        }else{
            newArr.push(rArr[j++]);
        }
    }
    while( i < lArr.length){
        newArr.push(lArr[i++]);
    }
    while( j < rArr.length){
        newArr.push(rArr[j++]);
    }
    return newArr;
}
console.log(mergeSort([70,30,50,10,80,40,60]));
*/
// quck sort 
/*
function quckSort(arr){
    if (arr.length <=1){
        return arr;
    }
    qucksortHelper( arr, 0, arr.length-1);
    return arr;
}
function qucksortHelper(arr, startIdx, endIdx){
    if (startIdx>endIdx){
        return;
    }
    let pivertIdx = startIdx;
    let leftIdx = startIdx+1;
    let rightIdx = endIdx;
    while(leftIdx <= rightIdx){
        if (arr[leftIdx] > arr[pivertIdx] && arr[rightIdx] < arr[pivertIdx]){
            [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];
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
    [arr[rightIdx], arr[pivertIdx]] = [arr[pivertIdx] , arr[rightIdx]];
    qucksortHelper(arr, startIdx, rightIdx-1);
    qucksortHelper(arr, rightIdx+1, endIdx);
}
console.log(quckSort([60,10,20,50,30,40]));
*/
/// hadh table
/*
class hashTable{
    constructor (size){
        this.size = size;
        this.table = new Array(size);
    }
    hash (key){
        let total = 0;
        for ( var i = 0 ;i< key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set (key, value){
        let index = this.hash(key);
        let temp = this.table[index];
        if (temp == null){
            this.table[index] = [[key, value]];
        }else{
            let samekeyItm = temp.find( x=> x[0] === key);
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
            let samekeyItm = temp.find( x=> x[0] === key);
            if (samekeyItm){
                return samekeyItm;
            }
        }
        return undefined;
    }
    remove(key){
        let index = this.hash(key);
        let temp = this.table[index];
        if (temp){
            let samekeyItm = temp.find( x => x[0] === key);
            if (samekeyItm){
                let rm=temp.splice(temp.indexOf(samekeyItm),1);
                console.log(rm);
            }
        }
    }
    display(){
        if (this.table == null){
            console.log("empty");
        }
        for ( var i =0 ;i<this.table.length; i++){
            if (this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

let obj = new hashTable(20);
obj.set("name","raju1");
obj.set("name2","raju2");
obj.set("name3","raju3");
obj.set("place", "mp");
obj.display();
console.log(obj.get("ame"));
obj.remove("name");
*/

//stack 

// class stack{
//     constructor(){
//         this.array = [];
//         this.top = null;
//         this.size = 0;
//     }
//     push(data){
//         this.array[this.size] = data;
        
//     }
// }
/*
class Stack {
    constructor() {
      this.array = [];
      this.top = null;
      this.size = 0;
    }
  
    push(data) {
      this.array.push(data);
      this.top = data;
      this.size++;
    }
  
    pop() {
      if (this.size === 0) {
        return null;
      }
      const poppedData = this.array.pop();
      this.top = this.array[this.size - 2] || null;
      this.size--;
      return poppedData;
    }
  
    peek() {
      return this.top;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  }
  */
/*
  class Node {
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
        let temp = this.top;
        if (temp == null){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }
    pop (){
        // let temp = this.top;
        this.top = this.top.next;
    }
    midDeletion(){
        let slow = this.top ,fast = this.top ;
        let prev = null;
        while(fast !=null && fast.next != null){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        // console.log(prev.data);
        prev.next = slow.next;
        
    }
    display(){
        let temp = this.top;
        if (temp === null){
            console.log("empty")
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
  o.push(40);
  o.push(50);
  o.display();
  o.midDeletion();
  o.display();
*/

// queue

// enqueue and dequeue
/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class queue{
    constructor(){
        this.frent = this.rear = null;
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
        let temp = this.frent;
        if (this.frent === null){
            return false;
        }else{
            this.frent = temp.next;
            if (this.frent === null){
                this.rear = null;
            }
        }
    }
    display(){
        let temp = this.frent;
        if(temp == null){
            console.log("empty");
        }
        while(temp!= null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
let obj = new  queue();
obj.display();
obj.enqueue(10);
obj.enqueue(20);
obj.enqueue(30);
obj.enqueue(40);
obj.dequeue();
obj.dequeue();
obj.display();
*/
/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class stack{
    constructor(){
        this.top=null;
    }
    push(data){
        let newNode = new Node(data);
        if (this.top== null){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
    }
    pop (){
        //  this.top = this.top.next;
        console.log( this.top = this.top.next);
    }
    display(){
        let temp = this.top ;
        while(temp !== null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
let obj = new stack();
obj.push(10)
obj.push(20)
obj.push(30)
obj.push(40)
obj.push(50)
obj.pop();
obj.display();
*/

// hash table 
/*
class hashtable{
    constructor (size){
        this.size = size;
        this.table = new Array(size);
    }
    hash (key){
        let total= 0;
        for ( var i =0 ;i< key.length; i++){
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
            let samekeyItm = temp.find(x => x[0] === key );
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
            let samekeyItm = temp.find(x => x[0] === key );
            if (samekeyItm){
                return samekeyItm;
            }
        }
        return undefined;
    }
    remove(key){
        let index = this.hash(key);
        let temp = this.table[index];
        if (temp){
            let samekeyItm = temp.find( x => x[0] === key);
            if(samekeyItm){
                temp.splice(temp.indexOf(samekeyItm), 1);
            }
        }
    }
    display(){
        for( var i =0 ;i<this.table.length; i++){
            if (this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}
let obj = new hashtable(20);
obj.set("name", "raheem");
obj.set("place", "mlp");
obj.set("age", 20);
obj.remove("age");
obj.display();
*/
