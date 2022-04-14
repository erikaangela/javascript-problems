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

// Alternative solution using for loop to find sum and product
// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-12.php#:~:text=Write%20a%20JavaScript%20program%20to,of%20an%20array%20of%20integers.&text=ES6%20Version%3A,array%5Bi%5D%3B%20%7D%20console.
// const arrayOfIntegers = [44, 19, 22, 27, 0, 9];
// let startingValueSum = 0;
// let startingValuePro = 1;
// let i;
// for (i = 0; i < array.length; i += 1)
//    {
//     startingValueSum += array[i];
//     startingValuePro *= array[i];
//     }
// console.log(`Sum : ${startingValueSum} Product :  ${startingValuePro}`);
