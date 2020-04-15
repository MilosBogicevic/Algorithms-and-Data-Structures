function sumOfDigits(word) {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    if (/[0-9]/.test(word[i])) {
      sum += parseInt(word[i]);
    }
  }
  return sum;
}

console.log(sumOfDigits("2example5word4"));
