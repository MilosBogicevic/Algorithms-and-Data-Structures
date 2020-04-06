function factorial(number) {
  if (number == 0 || number == 1) {
    return 1;
  }

  for (let i = number - 1; i >= 1; i--) {
    number *= i;
  }
  return number;
}

console.log(factorial(5));


// Factorial with recursion
function factorial2(number) {
  if (number == 0 || number == 1) {
    return 1;
  }
  // Recursion
  return factorial2(number - 1) * number;
}

console.log(factorial2(5));

/*  
  To run this file:
  1. Install code editor (Visual Studio Code) and Node.js
  2. Open file with code editor
  3. Type in terminal: node factorial.js 
*/
