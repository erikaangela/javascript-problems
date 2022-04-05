/* Define a function that takes in an array of elements and joins them together into a string separated by a comma with a space after the comma.

Example array: let colors = ["Red", "Green", "White", "Black"];

Should look like: "Red, Green, White, Black"

Do NOT use the "toString" method.
*/

/* Steps
1. Define a JavaScript function that takes in an array.
2. Declare and initialize an array.
3. Within the function, declare an empty string.
4. Also within the function, use a for loop through the array, adding each element to the empty string. Separate with a comma and a space.
5. Return the "new" empty string.
*/

const myArray = ['yellow', 'blue', 'green', 'pink', 'white'];

function arrayToString (arr) {
  let txt = '';
  for (let i = 0; i < arr.length; i++) {
    txt += arr[i] + ', ';
  }
  return txt;
}

console.log(arrayToString(myArray));
