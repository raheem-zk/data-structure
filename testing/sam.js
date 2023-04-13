// function binerySearch(array, targey){
//     let startIndex = 0;
//     let endIndex  = array.length-1;
//     while(startIndex <= endIndex){

//         var midle = startIndex + (endIndex-startIndex)/2;

//         if (array[midle]===targey){
//             return midle;
//         }else if (array[midle] < targey){
//             startIndex = midle+1;
//         }else if (array[midle]>targey){
//             endIndex = midle-1;
//         }
//     }
//     return -1;
// }
// const a=[1,3,4,5,6,7,8];
// console.log(binerySearch(a, 3));

// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }

//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//       this.size = 0;
//     }

//     add(data) {
//       const node = new Node(data);
//       if (this.head === null) {
//         this.head = node;
//         this.tail = node;
//       } else {
//         this.tail.next = node;
//         this.tail = node;
//       }
//       this.size++;
//     }

//     get(index) {
//       if (index < 0 || index >= this.size) {
//         return null;
//       }
//       let current = this.head;
//       for (let i = 0; i < index; i++) {
//         current = current.next;
//       }
//       return current;
//     }

//     binarySearch(data) {
//       let start = 0;
//       let end = this.size - 1;
//       while (start <= end) {
//         const mid = Math.floor((start + end) / 2);
//         const midNode = this.get(mid);  /// GET METHOD 
//         if (midNode.data === data) {
//           return true;
//         } else if (midNode.data < data) {
//           start = mid + 1;
//         } else {
//           end = mid - 1;
//         }
//       }
//       return false;
//     }
//   }

//   let list = new LinkedList();
//   list.add(10);
//   list.add(20);
//   list.add(30);
//   list.add(40);
//   list.add(50);

// //   console.log(list.get(1));
//   console.log(list.binarySearch(30));
// console.log(list.size);



// function a(value) {
//   if (value == 1) {
//     return 1;
//   } else {
//     return value * a(value - 1);
//   }
// }

// console.log(a(5));



function a(value) {
  if (value == 1) {
    return 1;
  } else {
    return value + a(value - 1);
  }
}

console.log(a(5));






