function countNumberOfVowels(input) {
  let count = 0;
  let words = input.toLowerCase();

  for (i = 0; i < words.length; i++) {
    if (words[i] == "a" || words[i] == "e" || words[i] == "i" || words[i] == "o" || words[i] == "u") {
      count++;
    }
  }
  console.log(count);
}

countNumberOfVowels("I love JavaScript.");
