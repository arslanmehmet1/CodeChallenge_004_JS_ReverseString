const reverseString = (str) => {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
let kelime = prompt(`kelime giriniz :`);
console.log(reverseString(kelime));
