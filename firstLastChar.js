function firstLastChar(word, numberOfLetters) {
  // Returns a part of string from start index 0 to end index (numberOfLetters)
  firstLetters = word.substring(0, numberOfLetters);
  // Returns a part of string from end index
  lastLetters = word.substring(word.length - numberOfLetters);
  // Returns the sum of the beginning and end of the string
  sum = firstLetters + lastLetters;
  return sum;
}

console.log(firstLastChar("Some string", 2));

/*  
  To run this file:
  1. Install code editor (Visual Studio Code) and Node.js
  2. Open file with code editor
  3. Type in terminal: node firstLastChar.js 
*/
