/*
function quickSort(array){
    quickSortHelper(array, 0, array.length -1);
    return array;
}
function quickSortHelper(array, startIdx, endIdx){
    if(startIdx>endIdx){
        return;
    }
    let pirvotIdx = startIdx;
    let leftIdx = startIdx;
    let rightIdx = endIdx;
    while(leftIdx <= rightIdx){
        if(array[leftIdx] > array[pirvotIdx] && array[rightIdx] < array[pirvotIdx]){
            swap(array, leftIdx, rightIdx);
            leftIdx++;
            rightIdx--;
        }
        if (array[leftIdx] < array[pirvotIdx]){
            leftIdx++;
        }
        if (array[rightIdx] > array[pirvotIdx]){
            rightIdx--;
        }
    } 
    swap(array, pirvotIdx, rightIdx);
    quickSortHelper(array, startIdx, rightIdx-1);
    quickSortHelper(array, rightIdx+1, endIdx);
}

function swap(array,i ,j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
console.log(quickSort([6,4,2,6,27,12,26,272,7,2,8,44]));
*/

// insertion sorting
/*
var a =[5,8,3,4,1,9];

for(var i =0 ;i<a.length-1 ;i++){
    for(var j=0 ;j<a.length-1-i;j++){
        if (a[j] > a[j+1]){
            [a[j],a[j+1]] = [a[j+1],a[j]];
        }
    }
}
console.log(a);
*/
// selection sorting
/*
var a =[5,8,3,24,1,9];

for (var i = 1;i<a.length;i++){
    var temp = a[i];
    var j=i-1;
    while(j>=0 && a[j]>temp){
        a[j+1] = a[j];
        j--;
    }
    a[j+1]= temp;
}
console.log(a);
*/
// quckSorting
/*
function quckSorting(array){
    quckSortHelper(array, 0, array.length-1)
    return array;
}
function quckSortHelper(array, firstIdx, endIdx){
    if(firstIdx>endIdx){
        return;
    }
    let pivertIdx = firstIdx;
    let leftIdx = firstIdx+1;
    let rightIdx = endIdx;
    while(leftIdx<=rightIdx){
        if(array[leftIdx] > array[pivertIdx] && array[rightIdx] <array[pivertIdx]){
            swap(array, leftIdx, rightIdx);
            leftIdx++;
            rightIdx--;
        }
        if (array[leftIdx] <= array[pivertIdx]){
            leftIdx++;
        }
        if(array[rightIdx] >= array[pivertIdx]){
            rightIdx--;
        }
    }
    swap(array, pivertIdx, rightIdx);
    quckSortHelper(array , firstIdx, rightIdx-1);
    quckSortHelper(array , rightIdx+1, endIdx);
}
function swap(array , i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

console.log(quckSorting([7,5,3,9,10,2,8,1,4]));
*/
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function divideArray(arr){
//   const middle =  Math.ceil(arr.length/2)
//   const [] =firstHalf = arr.slice(0, middle)
//   const secondHalf = arr.slice(middle)
//   return { firstHalf , secondHalf }
// }

// const myArr = divideArray(arr)

// // console.log(myArr.firstHalf) 
// console.log(myArr.secondHalf[2])

//merge sort 
/*
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var midIdx = Math.floor(array.length / 2);
    var firstHalf = array.slice(0, midIdx);
    var secondHalf = array.slice(midIdx);
    return join(mergeSort(firstHalf), mergeSort(secondHalf));
}

function join(firstHalf, secondHalf) {
    var i = 0, j = 0, k = 0;
    let newArray = [];
    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] <= secondHalf[j]) {
            newArray[k++] = firstHalf;
        } else {
            newArray[k++] = secondHalf;
        }
    }
    while (i < firstHalf.length) {
        newArray[k++] = firstHalf[i++];
    }
    while (j < secondHalf.length) {
        newArray[k++] = secondHalf[j++];
    }
    return newArray;
}
const unsortedArray = [5, 2, 9, 3, 6, 8, 1, 7, 4];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
*/
/*
function mergeSort(arr) {
    if(arr.length <=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let firstHalf = arr.slice(0, mid);
    let secondHalf = arr.slice(mid);
    return join(mergeSort(firstHalf), mergeSort(secondHalf));
}
function join(firstHalf, secondHalf){
    let result =[];
    let i =0 , j= 0 , k= 0;
    while(i < firstHalf.length && j < secondHalf.length){
        if(firstHalf[i]<= secondHalf[j]){
            result[k++]= firstHalf[i++];
        }else{
            result[k++]= secondHalf[j++];
        }
    }
    while(i < firstHalf.length){
        result[k++]= firstHalf[i++];
    }
    while(j <secondHalf.length){
        result[k++]= secondHalf[j++];
    }
    return result;
}

var ans = mergeSort([7,5,2,9,3,7,1,4,8]);
console.log(ans);
*//*

// bobbule sort 

var a=[9,3,7,2,4,6,5,4,1];

function bobbuleSort(a){
    for (var i =0; i<a.length-1; i++){
        for (j=0 ;j<a.length -1-i;j++){
            if (a[j]>a[j+1]){
                [a[j+1],a[j]] = [a[j],a[j+1]];
            }
        }
    }
    console.log(a);
}
bobbuleSort(a);
*/
/*
// insertion sort
function insertionSort(arr){
    for (var i =1 ;i <arr.length ;i++){
        var value = a[i];
        var j = i-1;
        while(j>=0 && a[j]>value){
            a[j+1]= a[j];
            j--;
        }
        a[j+1] = value;
    }
    console.log(arr);
}

var a=[9,3,7,2,4,6,5,4,1];
insertionSort(a)
*/
/*
// selection sort 

function selectionSort(arr){
    for (var i =0 ;i<arr.length-1;i++){
        var sm = arr[i];
        for(var j=i+1 ;j<arr.length;j++){
            if (arr[j]<sm){
                sm = arr[j];
                var pos = j;
            }
        }
        arr[pos] = arr[i];
        arr[i] =sm;
    }
    console.log(arr);
}
var array = [6,7,3,2,8,5,9,10,4];
selectionSort(array)
*/

//quck sort 
/*
function quckSort(arr){
    quckSortHelper(arr, 0, arr.length-1);
    return arr;
}

function quckSortHelper(arr, firstIdx, endIdx){
    if(firstIdx >= endIdx){
        return;
    }
    var pivotIdx = firstIdx;
    var leftIdx = firstIdx+1;
    var rightIdx = endIdx;

    while(leftIdx <= rightIdx){
        if(arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]){
            swap( arr, leftIdx, rightIdx);
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
    swap(arr , pivotIdx, rightIdx);
    quckSortHelper(arr, firstIdx, rightIdx-1);
    quckSortHelper(arr, rightIdx+1, endIdx);
}
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(quckSort([6,4,7,8,2,3,5,1,9,1]));
*/
// merge sort
/*
function mergeSort(arr){
    if (arr.length <=1){
        return arr;
    }
    var mid = Math.floor(arr.length/2);
    var firstHalf = arr.slice( 0, mid);
    var secondHalf = arr.slice(mid);
    return join(mergeSort(firstHalf), mergeSort(secondHalf));
}

function join(first , second){
    var i =0 , j =0 , k = 0;
    var result = [];
    while(i <first.length && j < second.length){
        if (first[i] < second[j]){
            result[k++] = first[i++];
        }else{
            result[k++] = second[j++];
        }
    }
    while (i<first.length){
        result[k++] = first[i++];
    }
    while(j < second.length){
        result[k++] = second[j++];
    }
    return result;
}
console.log(mergeSort([40,10,50,70,80,20,30,80,60]));
*/

function quckSort(arr){
    quckSortHelper(arr, 0, arr.length-1);
    return arr;
}
function quckSortHelper(arr, startIdx, endIdx){
    if (startIdx >= endIdx){
        return;
    }
    let pivertIdx = startIdx;
    let leftIdx = startIdx+1;
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
    quckSortHelper(arr, startIdx, rightIdx-1 );
    quckSortHelper(arr, rightIdx+1, endIdx);

}
function swap( arr, i ,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let ar=[9,1,2,8,6,6,7,3,5,4];
console.log(quckSort(ar));