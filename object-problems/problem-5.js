/* Write a JavaScript function to sort the following array of objects by title value.

Hint: Read about the JavaScript sort method.

Example array: [

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];
*/

/* Steps
1. Define a JavaScript function that accepts an array and object key as parameters.
2. Declare and initialize an array of objects.
3. Within the function, sort the array of objects by its title value.
*/

const books = [

  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

  ];

function sortBooksByTitle (arr) {
  let sortedArray = arr.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  })
  return sortedArray;
}

console.log(sortBooksByTitle(books));


// Alternative solution
// function sortBooksByTitle (a, b) {
//     //comparing the first and second elements inside our objects;
//     if (a.title < b.title) {
//     //if a is less than b, put a on the left side, which shows increasing order
//       return -1;
//     }
//     else if (a.title > b.title) {
//       return 1;
//     }
//     else {
//         return 0;
//     }
// }
//
// console.log(books.sort(sortBooksByTitle));
