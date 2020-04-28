function sortElements(numbers) {
  temp = 0;
  console.log("Original array: " + numbers);

  // Sort an array (ASCENDING)
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  console.log("Sorted array ASC: " + numbers);
}

const numbers = [15, 8, 2, 6, 5, 12, 3, 18, 16, 25, 22, 85, 43, 56];
sortElements(numbers);
