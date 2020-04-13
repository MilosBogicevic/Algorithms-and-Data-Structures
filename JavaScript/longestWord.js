// Longest word in array with for loop
function longestWord(words) {
  // Declaring a variable "longest" with the first word in the array
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    // If the new word in the array is longer than the longest, replace it
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

let words = ["I", "love", "programming", "Do", "you", "love", "it"];
console.log(longestWord(words));

// Find longest word with sort method
let words2 = ["hello", "hi", "sort", "method"];
console.log(words2.sort((a, b) => b.length - a.length)[0]);

// Find longest word with reduce method
let words3 = ["apple", "banana", "grapefruit"];
console.log(words3.reduce((a, b) => (b.length > a.length ? b : a)));

/*  
  To run this file:
  1. Install code editor (Visual Studio Code) and Node.js
  2. Open file with code editor
  3. Type in terminal: node longestWord.js 
*/
