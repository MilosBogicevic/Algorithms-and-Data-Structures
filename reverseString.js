// Reverse a string with for loop
function reverseString(word) {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}

console.log(reverseString("I am a reverseString function."));


// ES6 for...of loop
function reverseString2(word2) {
  let reversedWord2 = "";
  for (let char of word2) {
    reversedWord2 = char + reversedWord2;
  }
  return reversedWord2;
}

console.log(reverseString2("I am a for...of loop."));


// Reverse a string with split/reverse/join methods
const reverseString3 = word3 => word3.split("").reverse().join("");
console.log(reverseString3("We are the methods."));


// Reverse a string with recursion
function reverseString4(word4) {
  if (word4 == "") {
    return word4;
  } else {
    return reverseString4(word4.substr(1)) + word4[0];
  }
}
console.log(reverseString4("Hello from recursion."));
