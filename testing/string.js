// function change(str, key){
//   var newKey = key % 26;
//   var result = "";
//   for (var i =0 ;i< str.length;i++){
//     var letterCode = str.charCodeAt(i) + newKey;

//     if (letterCode <= 122){
//       result += String.fromCharCode(letterCode);
//     }else{
//       result += String.fromCharCode((96 +letterCode %122));
//     }
//   }
//   return result;
// }

// console.log(change("hai", 3));

/*
function change (str , key){
  key = key % 26 ;
  let result ='';
  for (let i = 0 ;i< str.length; i++){
    var letterCode = str.charCodeAt(i) + key;
    if (letterCode <= 122){
      result += String.fromCharCode(letterCode);
    }else{
      result += String.fromCharCode((96 + letterCode %122 ));
    }
  }
  return result;
}

console.log(change("raheem", 1)); //out put :sbiffn
*/

/*

function count(array) {
  let i = 0;
  while (i < array.length) {
    let j = i + 1;
    while (j < array.length && array[j] === array[i]) {
      j++;
    }
    console.log(array[i] + ' ' + (j - i));
    i = j;
  }
}

const a = ['A', 'A', 'A', 'A', 'B', 'C', 'C'];
count(a);
 */

function f(n){
  if (n<=1){
    return;
  }
  f(n-1);
    console.log(n);
  f(n-1);
}

f(5);