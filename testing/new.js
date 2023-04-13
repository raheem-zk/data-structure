


// class Node{
//     constructor(data){
//         this.data =data;
//         this.next = null;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head =null;
//         this.tail = null
//     }
//     passingArray(array){
//         for (let i =0 ;i<array.length; i++){
//             var data = array[i];
//             {
//                 var newNode = new Node(data);
//                 if (this.head == null){
//                     this.head = newNode;
//                     this.tail = newNode;
//                 }else{
//                     this.tail.next = newNode;
//                     this.tail = newNode;
//                 }
//             }
//         }
//     }
//     display(){
//         if (this.head == null){
//             console.log("null");
//         }
//         let temp = this.head;
//         while(temp != null){
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }
// }

// let test = new LinkedList();
// let array=[1,2,3,4,5];
// test.passingArray(array);
// test.display();

///Bubble Sort
/*
var a=[12,55,2,5,1];

for (var i =0 ;i<a.length-1; i++){
    for(var j =0 ;j<a.length-1-i; j++){
        if(a[j]>a[j+1]){
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
        }
    }
}
console.log(a);
*/
// Insertion Sort
 var target = 40;

 var a=[10,20,50,60];

 for (i = a.length; i>=2; i--){
    a[i+1]=a[i];
 }
a[2]=333;
console.log(a);
