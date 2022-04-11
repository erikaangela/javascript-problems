// Create an array of people objects with first name, last name, and age, then write a JavaScript function that takes in an array and console logs the first and last names of all the people.

/* Steps
1. Create an arbitrary array of people objects.
2. Within each person object, add first name, last name, and age properties.
3. Define a JavaScript function that takes in an array.
4. Within the function, console log the first and last name of each person.
*/

const peopleFactory = (firstName, lastName, age) => {
  return {
    firstName,
    lastName,
    age
  }
};

let profileOne = peopleFactory('Jane', 'Doe', 22);
let profileTwo = peopleFactory('John', 'Doe', 23);

let myArray = [profileOne, profileTwo];

function firstLastName (arr) {
  for (let i = 0; i < arr.length; i++) {
    { firstName } = peopleFactory;
    console.log(firstName);
  }
}
