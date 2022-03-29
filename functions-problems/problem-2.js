// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

/* Steps
1. Define a JavaScript function that accepts a string as a parameter.
2. Define and initialize a variable, testString.
3. Define a variable, vowelCount.
4. Loop through the testString, checking for a vowel defined by an if statement.
5. Increase vowelCount each time if statement is true.
6. Return vowelCount.
*/

const testString = 'This is the given test string';

function countNumberOfVowels(str) {
  let splitString = str.split("");
  let vowelCount = 0;
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].includes('a') || splitString[i].includes('e') || splitString[i].includes('i') || splitString[i].includes('o') || splitString[i].includes('u')) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(countNumberOfVowels(testString));
