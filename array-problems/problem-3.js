/* Define a function that takes in an array of numbers/integers and returns the sorted version of that array, greatest to least.

Example array: const myArray = [-3,8,7,6,5,-4,3,2,1];

Hint: To solve this, look up the JavaScript array sort method, and pay close attention to how it uses it's return values of 1, 0, -1 to sort items.
*/

/* Steps
1. Define a JavaScript function that takes in an array.
2. Declare and initialize an arbitrary array of numbers/integers.
3. Within the function, return the sorted array, from greatest to least.
*/

const myArray = [2, 4, 17, 9, 25, -2, 88];

function greatestToLeast (arr) {
  let sortedArray = arr.sort(function(a, b){return a-b});
  return sortedArray.reverse();
}

console.log(greatestToLeast(myArray));
