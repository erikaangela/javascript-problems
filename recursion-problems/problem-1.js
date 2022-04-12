// Write a JavaScript function to calculate the factorial of a number.

/* Steps
0. Remember that the factorial of a number is the product of the number and all the numbers below it.
    n! = n(n-1)(n-2)...1
1. Define a JavaScript function that takes in a number, num.
2. Within that function, use recursion to multiply num by num then (num - 1).
3. Repeat until the stopping point where the subtraction expression equals 1.
4. Return the product.
*/

const number = 5;

function findTheFactorialOf (num) {
  if (num <= 1) {
    return num;
  }
  return num * findTheFactorialOf(num - 1);
}

// Alternative solution
// function factorial(num) { 
//   if (num === 0){
//     return 1;
//   }
//
//   return num * factorial(num - 1);
// }

console.log(findTheFactorialOf(number));
