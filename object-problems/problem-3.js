// Create an object with three items in it, then write a JavaScript function that accepts an object and tells you the length (tells you how many items are in it) of the object.

/* Steps
1. Define a JavaScript function that accepts an object.
2. Create an arbitrary object with three items.
3. Within that function, declare a count, loop through the object, and increase the count each time.
4. Return the count.
*/

const condiments = {
  ketchup: {
    color: 'red',
    flavor: 'tangy'
  },
  mustard: {
    color: 'yellow',
    flavor: 'sweet'
  },
  relish: {
    color: 'green',
    flavor: 'sweet'
  }
}

function numberOfItemsIn (object) {
  let count = 0;
  for (let item in object) {
    count++;
  }
  return count;
}

console.log(numberOfItemsIn(condiments));
