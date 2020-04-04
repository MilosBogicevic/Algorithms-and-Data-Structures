// Reverse a string with for loop
function reverseString(word) {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}

console.log(reverseString("I am a reverseString function."));
