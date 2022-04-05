/* Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.

Example: If I pass in an array and the number 2, your function returns the first 2 elements in that arrays. */

/* Steps
1. Define a JavaScript function with two parameters, called arr and n.
2. Create an array with any number of elements.
3. Declare and initialize a variable, n.
4. Within the function, use a for loop and an if statement to return the first n elements of arr.
*/

const array = ['lemon', 'peach', 'mango'];
let num = 2;
let secondNum = -1;

function myFunction (arr, n) {
  if (n < 0) {
    return 'Input must be a positive number.';
  }
  if (n > arr.length) {
    return 'Input must be within range of the number of list items.';
  }
  return arr.slice(0, n);
  }

console.log(myFunction(array, num));
console.log(myFunction(array, secondNum));
