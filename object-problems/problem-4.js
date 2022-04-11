// Create an object, then write a JavaScript function that checks whether an object contains the specified key.

/* Steps
1. Define a JavaScript function that accepts an object and key as parameters.
2. Declare and initialize an object with at least one key.
3. Within the function, loop through the object, checking if specified key matches object's key(s).
4. Return true if yes.
*/

const weather = {
  sunny: {
    sky: ['blue', 'white'],
  },
  rainy: {
    caution: 'slippery'
  },
  windy: {
    toBring: 'jacket'
  }
}

function checkIfKeyInObject (object, key) {
  return Object.hasOwn(object, key);
}

console.log(checkIfKeyInObject(weather, 'windy'));
