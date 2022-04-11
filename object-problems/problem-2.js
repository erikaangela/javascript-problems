// Create an array of people objects with first name, last name, and age, then write a JavaScript function that takes in an array and console logs the first and last names of all the people.

/* Steps
1. Create an arbitrary array of people objects.
2. Within each person object, add first name, last name, and age properties.
3. Define a JavaScript function that takes in an array.
4. Within the function, console log the first and last name of each person.
*/

const people = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 23
  }
]

function firstLastName (arr) {
  arr.forEach(person => {
    console.log(`${person.lastName}, ${person.firstName}`);
  })
}

firstLastName(people);

// function firstLastName (arr) { // returns all properties and an undefined
//   arr.forEach(object => {
//     for (let key in object) {
//       console.log(`${key}: ${object[key]}`);
//     }
//   })
// }
