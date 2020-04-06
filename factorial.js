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
