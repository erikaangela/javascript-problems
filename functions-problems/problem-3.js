// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

/* Steps
1. Define a JavaScript function that accepts a string and a letter.
2. Declare and initialize a variable, testString.
3. Define a variable, count.
4. Loop through testString, checking if letter appears using an if statement.
5. If statement returns true, increase count.
6. Return count.
*/

let testString = 'This is the given test string';
let testLetter = 't';

function numberOfTimesLetterinWord(str, ltr) {
  let splitString = str.split("");
  let count = 0;
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[0].includes(ltr)) {
      count++;
    }
  }
  return count;
}

console.log(numberOfTimesLetterinWord(testString, testLetter));



// function numberOfTimesLetterinWord(str, ltr) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[0] === ltr) {
//       count++;
//     }
//   }
//   return count;
// }
