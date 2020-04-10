// Longest word in array
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
