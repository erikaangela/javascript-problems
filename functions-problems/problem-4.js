// Write a JavaScript function that iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers that are multiples of both three and five print "FizzBuzz".

/* Steps
1. Define a JavaScript function.
2. Loop through integers from 1 to 100.
3. Use if statements to print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.
4. Call function.
*/

function fizzBuzz () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    }
  }
}

fizzBuzz();


// switch (i % 3) {
//   case (0):
//     console.log('Fizz');
//     break;
//   case (i % 5 === 0):
//     console.log('Buzz');
//     break;
//   case (i % 3 === 0):
//   case (i % 5 === 0):
//     console.log('FizzBuzz');
//     break;
//   default:
//     break;
