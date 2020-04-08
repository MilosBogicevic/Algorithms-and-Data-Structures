function numberToHoursAndMinutes(number) {
  const hours = Math.floor(number / 60);
  let minutes = number % 60;
  return `${hours}:${minutes}`;
}

console.log(numberToHoursAndMinutes(500));
console.log(numberToHoursAndMinutes(52));
console.log(numberToHoursAndMinutes(180));
console.log(numberToHoursAndMinutes(184));

/*  
  To run this file:
  1. Install code editor (Visual Studio Code) and Node.js
  2. Open file with code editor
  3. Type in terminal: node numberToTime.js 
*/
