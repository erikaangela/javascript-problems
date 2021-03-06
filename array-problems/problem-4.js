/* Write a JavaScript function to remove duplicate items from an array (consider case sensitivity).

Example array: [1,2,2,4,5,4,7,8,7,3,6]

NOTE: Do NOT use the Set method.
*/

/* Steps
1. Define a JavaScript function that accepts an array.
2. Declare and initialize a variable set to an arbitrary array with duplicate values.
3. Consider case sensitivity by converting the array to all lowercase.
4. Loop through the array and remove duplicates.
*/

const myArray = ['blue', 'Blue', 'red', 'yellow', 'bLue', 'green'];

function removeDuplicates (arr) {
  let revisedArray = [];
  arr.forEach(function fixCaseSensitivity (i) {
    if (!revisedArray.includes(i) && !revisedArray.includes(i.toLowerCase())) {
      revisedArray.push(i);
    }
  })
  return revisedArray;
}

console.log(removeDuplicates(myArray));



// function removeDuplicates (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase() === arr[i-1].toLowerCase()) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }
