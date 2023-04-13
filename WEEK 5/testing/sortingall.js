// bubble sort
/*
function bubbleSort(arr){
    for (var i =0 ;i<arr.length-1; i++){
        for (var j =0 ;j<arr.length-1-i;j++){
            if (arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    console.log(arr);
}
const array = [6,8,5,6,2,9,3,1,4,7];

bubbleSort(array);
*/
// INSERTION SORT
 /*
function insertionSort(arr){
    for ( var i =1 ;i<arr.length;i++){
        var j = i-1;
        var curent = arr[i];
        while(j>=0 && arr[j]>curent){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1]=curent;
    }
    console.log(arr);
}
const array = [6,8,5,6,2,9,3,1,4,7];
insertionSort(array);
*/
// selection sort 
/*
function selectionSort (arr){
    for (var i = 0; i <arr.length;i++){
        var sm = i;
        for (var j=i+1 ;j<arr.length; j++){
            if(arr[j]<arr[sm]){
                sm = j;
            }
        }
        if (sm !==i){
            [arr[sm] , arr[i]] = [ arr[i], arr[sm]];
        }
    }
    console.log(arr);
}
const array = [6,8,5,6,2,9,3,1,4,7];

selectionSort(array);
*/
// quck sort 
/*
function quckSort(arr){
    quckSortHelper(arr, 0, arr.length-1);
    return arr;
}
function quckSortHelper(arr, startIdx, endIdx){
    if (startIdx >= endIdx){
        return;
    }
    let pivotIdx = startIdx;
    let leftIdx = startIdx+1;
    let rightIdx = endIdx;

    while(leftIdx <= rightIdx){
        if(arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]){
            swap(arr, leftIdx, rightIdx);
            leftIdx++;
            rightIdx--;
        }
        if (arr[leftIdx] <= arr[pivotIdx]){
            leftIdx++;
        }
        if (arr[rightIdx] >= arr[pivotIdx]){
            rightIdx--;
        }
    }
    swap(arr, pivotIdx, rightIdx);
    quckSortHelper(arr, startIdx, rightIdx-1);
    quckSortHelper(arr, rightIdx+1, endIdx);
}
function swap(arr, i , j){
    // let temp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = temp;
    [ arr[i], arr[j]] =[ arr[j], arr[i]];
}
const array = [6,8,5,6,2,9,3,1,4,7];
console.log(quckSort(array));
*/

// merge sort 
/*
function mergeSort(arr){
    if (arr.length <=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let firstHalf = arr.slice(0, mid);
    let secondHalf = arr.slice(mid);
    return join(mergeSort(firstHalf), mergeSort(secondHalf));
    
}
function join(first, second){
    var i =0 ,j = 0 , k = 0;
    var newArray = [];
    while(i < first.length && j < second.length){
        if (first[i] < second[j]){
            newArray [k++] = first[i++];
        }else{
            newArray [k++] = second[j++];
        }
    }
    while(i <first.length){
        newArray[k++] = first[i++];
    }
    while(j < second.length){
        newArray [k++] = second[j++];
    }
    return newArray;
}
const a=[5,2,6,3,1,4];
console.log(mergeSort(a));
*/
// hashtable avoiding collusion //
/*
class hashtable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash (key){
        let total =0;
        for (var i =0 ;i<key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set (key , value){
        var index = this.hash(key);
        var bucket = this.table[index];
        if (!bucket){
            this.table[index] = [[key, value]];
        }else{
            var samekeyItm = bucket.find( x => x[0] === key);
            if(samekeyItm){
                samekeyItm[1] = value;
            }else{
                bucket.push([key, value]);
            }
        }
    }
    get(key){
        let index = this.hash(key);
        let bucket= this.table[index];
        if (bucket){
            let samekeyItm = bucket.find( x => x[0] === key );
            if (samekeyItm){
                return samekeyItm;
            }
        }
        return undefined;
    }
    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if (bucket){
            let samekeyItm = bucket.find( x => x[0] === key );
            if (samekeyItm){
                bucket.splice(bucket.indexOf(samekeyItm), 1);
            }
        }
    }
    display(){
        for (var i =0 ;i<this.table.length ;i++){
            if (this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

let hash = new hashtable(22);

hash.set("name","thara");
hash.set("email","thar@gmail.com");
hash.set("phone",9876543210);
hash.set("pla",10);

hash.display();
console.log(hash.get("mal"));
hash.remove("name");
hash.display();
*/