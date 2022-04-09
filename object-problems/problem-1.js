/* Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.

Your JavaScript function should take in two parameters, the object and the key/property you want to delete.
*/

/* Steps
1. Create an arbitrary object with one or more properties.
2. Define a JavaScript function that takes in two parameters, the object and key/property.
4. Within the function, remove the passed object's property.
*/

const dayObject = {
  weather: 'rainy',
  currentTimeOfDay: 6,
  color: 'yellow',
  numberOfErrands: 5
}

function removeObjectProperty (objectName, propName) {
  delete objectName[propName];
}

removeObjectProperty(dayObject, 'color');
console.log(dayObject);
