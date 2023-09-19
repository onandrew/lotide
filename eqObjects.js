const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');



const eqObjects = function(object1, object2) {
  let keysArray1 = Object.keys(object1);
  let keysArray2 = Object.keys(object2);
  if (keysArray1.length !== keysArray2.length){
    return false;
  }
  else {
    for (let x of keysArray1){
      if (Array.isArray(object1[x]) && Array.isArray(object2[x])){
        if (eqArrays(object1[x], object2[x]) === false){
          return false;
        } 
      }
      else {
        if (object1[x] !== object2[x]) {
          return false;
        }
    }
  }
  }
  return true;
};

/* const assertEqual = function(actual, expected) {
  let statement = '';
  if (actual === expected) {
    statement = console.log(`Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    statement = console.log(`Assertion Failed:  ${actual} !==  ${expected}`);
  }
  return statement;
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length){
    return false;
  }
    for (let x = 0; x < actual.length; x++){
      if (actual[x] !== expected[x]){
        return false;
      }
    }
  return true;
};
*/

const multiColorShirtObject = { colors: ["red", "blue", ], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "green" , "blue"]};
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

object1 = {
  a: 2,
  b: [3, 5],
  c: 3
}

object2 = {
  a: 2,
  b: [3, 5],
  c: 5
};
object3 = {
  a: 2,
  b: [3, 5],
  c: 5
}

object4 = {
  a: 2,
  b: [3, 5],
  c: 5
};

assertEqual(eqObjects(object1, object2), false);
assertEqual(eqObjects(object3, object4), true);

module.exports = eqObjects;