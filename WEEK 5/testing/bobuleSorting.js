
///Bubble Sort
/*
var a= [9,6,2,7,8];

for (var i= 0; i<a.length; i++){
    var flag =0 ;
    for (j= 0 ;j<a.length; j++){
        if(a[j] >a[j+1]){
            let temp = a[j];
            a[j]=a[j+1];
            a[j+1] = temp;
            flag =1;
        }
    }
    if (flag==0){
        break;
    }
}
console.log(a);
*/

//insertion sorting

// var a=[5,4,6,7,3,2];

// for (var i=1 ;i<a.length;i++){
//     var value = a[i];
//     var j =i-1;
//     while(j>=0 && a[j]>value){
//         a[j+1] = a[j];
//         j--; 
//     }
//     a[j+1]=value;
// }
// console.log(a);

//
// var a=[4,6,3,1,7,5,8];
// var sm=1000;
// // for (var i =0 ;i<a.length; i++){
// //     if (a[i]<sm){
// //         sm =a[i];
// //     }
// // }
// for (var i = 0 ;i<a.length ;i++){
//     for (var j=0 ;j<a.length; j++){
//         if (a[i]<sm){
//             sm =a[i];
//         }
//     }
//     var k = a[i];
//     a[i]=sm;
//     a[j-1] =k ;
// }
// console.log(a)

// bubble sorting
/*
var a=[4,2,6,3,1,8,7,5];
for (var i =0 ; i<a.length-1; i++){
    for (var j= 0 ;j<a.length -1 -i; j++){
        if (a[j]>a[j+1]){
           [ a[j],a[j+1] ] = [ a[j+1],a[j] ];
        }
    }
}
console.log(a)
*/
// insertiion sorting
/*
const a=[5,7,4,2,6,1,8];

for (var i = 1 ;i<a.length;i++){
    let temp = a[i];
    let j = i-1;
    while(j>=0 && a[j]>temp){
        a[j+1] = a[j];
        j--;
    }
    a[j+1]=temp;
}
console.log(a);
*/

// selection sorting
/*
const array =[6,4,2,7,9,8,3];
var i, j, min;
for (i=0 ;i<array.length; i++){
    min = array[i];
    for (j=i+1 ;j<array.length; j++){
        if (array[j] <min){
            min = array[j];
            var pos = j;
        }
    }
    let temp = array[i];
    array[i] = min;
    array[pos] = temp;
}
console.log(array);
*/
//Quick sort
/*
function QuickSort(array){
    quickSortHelper(array,0 ,array.length-1);
    return array;
}

function quickSortHelper(array, startTdx, endIdx){
    if(startTdx <=endIdx){
        return;
    }
    var pivertIdx =startTdx;
    var leftIdx = startTdx +1;
    var rightIdx = endIdx;
    while(leftIdx <= rightIdx){
        if(array[leftIdx] > array[pivertIdx] && array[rightIdx] < array[pivertIdx]){
            swaping(array, leftIdx, rightIdx);
            leftIdx++;
            rightIdx--;
        }
        if (array[leftIdx] <= array[pivertIdx]){
            leftIdx++;
        }
        if (array[rightIdx] >= array[print]){
            rightIdx--;
        }
    }
    swaping(array, rightIdx, pivertIdx);
    quickSortHelper(array, leftIdx, rightIdx-1);
    quickSortHelper(array, rightIdx+1,endIdx);
} 
function swaping(array ,i ,j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

var a=QuickSort([5,3,2,6,2,67,27,37,22,20,62]);
console.log(a);
*/
/*
function QuickSort(array){
    quickSortHelper(array, 0, array.length - 1);
    return array;
}

function quickSortHelper(array, startIdx, endIdx){
    if(startIdx >= endIdx){
        return;
    }
    var pivotIdx = startIdx;
    var leftIdx = startIdx + 1;
    var rightIdx = endIdx;
    while(leftIdx <= rightIdx){
        if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]){
            swap(array, leftIdx, rightIdx);
            leftIdx++;
            rightIdx--;
        }
        if (array[leftIdx] <= array[pivotIdx]){
            leftIdx++;
        }
        if (array[rightIdx] >= array[pivotIdx]){
            rightIdx--;
        }
    }
    swap(array, pivotIdx, rightIdx);
    quickSortHelper(array, startIdx, rightIdx-1);
    quickSortHelper(array, rightIdx+1, endIdx);
} 

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

var a = QuickSort([5, 3, 2, 6, 2, 67, 27, 37, 22, 20, 62]);
console.log(a);
*/

// merge sort
/*
function merge(arr){
    if (arr.length <=1){
        return arr;
    }
    var mid = Math.floor(arr.length/2);
    var first = arr.slice( 0, mid);
    var end = arr.slice(mid);
    return join(merge(first), merge(end));
}

function join( first, end){
    let newArr = [];
    var i = 0 , j = 0 , k = 0 ;
    while( i <first.length && j < end.length){
        if( first[i]<=end[j]){
            newArr[k++]=first[i++];
        }else{
            newArr[k++]=end[j++];
        }
    }
    while( i <first.length){
        newArr[k++] = first[i++];
    }
    while( j <end.length){
        newArr[k++] = end[j++];
    }
    return newArr;
}

var ans = merge([5,9,3,2,4,7,6,8]);
console.log(ans)
*/