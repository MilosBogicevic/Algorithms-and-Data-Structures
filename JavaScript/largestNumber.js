let array = [2, 52, 68, 112, 542, 5, 1280, 54, 65, 98, 1540];
let largest = array[0];

for (i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}

console.log(largest);
