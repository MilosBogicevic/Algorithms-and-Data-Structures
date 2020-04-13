let array = [285, 82, 52, 68, 112, 542, 5, 1280, 54, 65, 98, 1540];
let smallest = array[0];

for (i = 0; i < array.length; i++) {
  if (array[i] < smallest) {
    smallest = array[i];
  }
}

console.log(smallest);
