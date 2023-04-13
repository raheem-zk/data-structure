// all sorting
// 1. bubble sort 
function bubbleSort(arr){
    for ( var i =0 ;i<arr.length-1; i++){
        for (var j = 0 ;j<arr.length -1 -i;j++){
            if (arr[j]> arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr);
}
// const array = [50,90,20,30,80,10,60,70,40,];
// bubbleSort(array);
// 2. inserton sort
function insertionSort(arr){
    for ( var i =1;i<arr.length; i++){
        var j = i -1;
        let temp = arr[i];
        while( j>= 0 && arr[j]> temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    console.log(arr);
}
// const array = [55,30,25,50,20,40,70,35,60,10];
// insertionSort(array);

// 3. selection sort 
function selectionSort(arr){
    for(var i = 0;i<arr.length;i++){
        let sm = i;
        for (var j =i+1 ; j <arr.length ;j++){
            if (arr[j] < arr[sm]){
                sm = j;
            }
        }
        if (i != sm){
            let temp = arr[sm];
            arr[sm] = arr[i];
            arr[i] = temp;
        }
    }
    console.log(arr);
}
// const array =[15,12,18,11,16,14,19,18,10,12];
// selectionSort(array);
// 4. quck sort 

function quckSort(arr){
    if (arr.length <= 1){
        return arr;
    }
    qucksortHelper(arr, 0, arr.length -1);
    return arr;
}
function qucksortHelper(arr, firstIdx, lastIdx){
    let pivertIdx = firstIdx;
    let startIdx = firstIdx+1;
    let endIdx = lastIdx;
    if (startIdx >= endIdx){
        return ;
    }
    while( startIdx <= endIdx){
        if (arr[startIdx] > arr[pivertIdx] && arr[endIdx] < arr[pivertIdx]){
            swap ( arr, startIdx, endIdx );
            startIdx++;
            endIdx--;
        }
        if (arr[startIdx] <= arr[pivertIdx]){
            startIdx++;
        }
        if (arr[endIdx] >= arr[pivertIdx]){
            endIdx--;
        }
    }
    swap(arr, pivertIdx, endIdx);
    qucksortHelper(arr, firstIdx, endIdx-1);
    qucksortHelper(arr, endIdx+1, lastIdx);

}
function swap(arr, i  ,j){
    [arr[i] ,arr[j]] = [arr[j], arr[i]];
}
// const array =[ 30,25,29,22,20,26,24,28];
// console.log(quckSort(array));


// 5. merge sort

function mergeSort(arr){
    if (arr.length <=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let firstHalf = arr.slice(0, mid);
    let secondHalf = arr.slice(mid);

    return join(mergeSort(firstHalf), mergeSort(secondHalf));
}
function join(lArr, rArr){
    // if(lArr.length > rArr.length){
    //     return;
    // }
    var i =0 ,j =0 , k=0;
    var newArr =[];
    while(i < lArr.length && j< rArr.length){
        if ( lArr[i] < rArr[j]){
            newArr[k++] = lArr[i++];
        }else{
            newArr[k++] = rArr[j++];
        }
    }
    while( i < lArr.length ){
        newArr[k++] = lArr[i++];
    }
    while( j < rArr.length){
        newArr[k++] = rArr[j++];
    }
    return newArr;
}
// const array =[ 30,25,29,22,20,26,24,28];
// console.log(mergeSort(array))

// hash table 

class hashTable{
    constructor (size){
        this.size = size;
        this.table = new Array(size);
    }
    hash (key){
        var total = 0;
        for (var i =0 ; i<key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size ;
    }
    set (key, value){
        let index = this.hash(key);
        let table = this.table[index];
        if (! table ){
            this.table[index] = [[key, value]];
        }else{
            let samekeyItm = table.find( x => x[0] === key);
            if (samekeyItm){
                samekeyItm[1] = value;
            }else{
                table.push([key, value]);
            }
        }
    }
    get (key){
        let index = this.hash(key);
        let table = this.table[index];
        if (table){
            let samekeyItm = table.find(x => x[0] === key);
            if (samekeyItm){
                return samekeyItm;
            }
        }
        return undefined;
    }
    remove(key){
        let index = this.hash(key);
        let table = this.table[index];
        if (table){
            let samekeyItm = table.find( x => x[0] === key);
            if (samekeyItm){
                var removedVAl = table.splice(table.indexOf(samekeyItm), 1);
            }
        }
        console.log(removedVAl);
    }
    display(){
        for( var i =0 ;i<this.table.length;i++){
            if (this.table[i]){
                console.log(i ,this.table[i]);
            }
        }
    }
}
/*
let obj =new hashTable(20);
obj.set("name","raheem");
obj.set("phone",987654321);
obj.set("age",20);
obj.set("place","mlp");
console.log(obj.get("name"));

// obj.remove("name");
obj.display();
*/
// stack 

class Node{
    constructor(data){
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
        if (this.top == null){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }
    pop(){
        let temp = this.top;
        if(this.top == null){
            console.log("empty......");
        }else{
            this.top = temp.next;
            this.size--;
        }
    }
    display(){
        let temp = this.top ;
        if (temp == null){
            console.log("empty....... stack");
        }
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
    midDelet(){
        let temp = this.top;
        let arr =[] ,  i =0;
        let mid = this.size/2;
        // while(temp != null && this.size != mid ){
        //     arr[i++] =temp;
        //     this.pop();
        //     temp = temp.next;
        // }
        for ( i =0 ; i<=mid; i++){
            arr[i] = temp.data;
            // console.log(temp.data);
            temp = temp.next;
            this.pop();
        }
        for( i =mid-1 ;i>=0 ; i--){
            this.push(arr[i]);
        }

    }
}
/*
let obj = new stack();
obj.push(10)
obj.push(20)
obj.push(30)
obj.push(40)
obj.push(50)
obj.push(60)
obj.push(70)
obj.push(80)
obj.push(90)
obj.push(100)
obj.display();

console.log("............");
obj.midDelet();

obj.display();
*/


// queue

// class Node{
//     constructor (data){
//         this.data = data;
//         this.next = null;
//     }
// }
class queue{
    constructor(){
        this.frent = null;
        this.rear = null;
    }
    enque(data){
        let newNode = new Node (data);
        if (this.frent == null){
            this.frent = this.rear = newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    deque(){
        let temp = this.frent;
        if (this.frent ==null){
            console.log("its empty.");
        }else{
            this.frent = temp.next;
        }
    }
    display(){
        let temp = this.frent;
        if (temp == null){
            console.log("empty......");
        }
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
/*
let obj = new queue();
obj.display();
obj.enque(10);
obj.enque(20);
obj.enque(30);
obj.enque(40);
obj.enque(50);
obj.display();

obj.deque();
obj.deque();
obj.display();

*/