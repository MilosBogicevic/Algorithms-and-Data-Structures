function findDuplicates() {
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      if (numbers[i] == numbers[j]) {
        console.log("Duplicate: " + numbers[j]);
      }
    }
  }
}

const numbers = [1, 2, 3, 4, 5, 2, 6, 5, 7, 8, 8, 4];
findDuplicates(numbers);
