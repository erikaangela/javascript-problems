// Write a JavaScript function to compute the sum of an array of integers.

/* Steps
1. Define a JavaScript function that takes in an array.
2. Declare and initialize an array of integers.
3. Within the function, use recursion to compute the sum of a number and a nextNumber.
4. Repeat that until we've iterated through the entire array.
5. Return the sum.
*/

const arrayOfIntegers = [44, 19, 22, 27, 0, 9];

function findTheSumOf (arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.pop() + findTheSumOf(arr);
}

console.log(findTheSumOf(arrayOfIntegers));


// function findTheSumOf (arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   return arr[arr.length] + findTheSumOf(arr.slice(1, ));
// }
