function numberToHoursAndMinutes(number) {
  let hours = Math.floor(number / 60);
  // For less than 10 hours, add "0" before.
  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = number % 60;
  // For less than 10 minutes, add "0" before.
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${hours}:${minutes}`;
}

console.log(numberToHoursAndMinutes(500));
console.log(numberToHoursAndMinutes(885));
console.log(numberToHoursAndMinutes(52));
console.log(numberToHoursAndMinutes(1180));
console.log(numberToHoursAndMinutes(184));

/*  
  To run this file:
  1. Install code editor (Visual Studio Code) and Node.js
  2. Open file with code editor
  3. Type in terminal: node numberToHoursAndMinutes.js 
*/
