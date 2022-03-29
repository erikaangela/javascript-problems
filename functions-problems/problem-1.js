// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

/* Steps
1. Define a JavaScript function that accepts a string as a parameter.
2. Declare and initialize a variable, testString.
3. Use split() to create a new array of individual words of testString, split between spaces, called splitString.
4. Loop through splitString, comparing each word's length to each other.
5. Return the value at the index with the greatest length.
*/

let testString = 'This is the given test string'

function findLongestWord(str) {
  let splitString = str.split(" ");
  let longestWord = ""; // longestWord starting at length 0
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length > longestWord.length) {
      longestWord = splitString[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(testString)); // prints 'string'
