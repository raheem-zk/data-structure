function change(str, key){
  var newKey = key % 26;
  var result = "";
  for (var i =0 ;i< str.length;i++){
    var letterCode = str.charCodeAt(i) + newKey;

    if (letterCode <= 122){
      result += String.fromCharCode(letterCode);
    }else{
      result += String.fromCharCode((96 +letterCode %122));
    }
  }
  return result;
}

console.log(change("hai", 3));
