let array = [2, 52, 68, 112, 542, 5, 1280, 54, 65, 98, 1540];
let largest = array[0];

for (i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}

console.log(largest);

/*  
  To run this file:
  1. Install code editor (Visual Studio Code) and Node.js
  2. Open file with code editor
  3. Type in terminal: node largestNumber.js 
*/
