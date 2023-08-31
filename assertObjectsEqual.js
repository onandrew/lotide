const assertEqual = function(actual, expected) {
  let statement = '';
  if (actual === expected) {
    statement = console.log(`Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    statement = console.log(`Assertion Failed:  ${actual} !==  ${expected}`);
  }
  return statement;
};

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true);
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3, 4]), false);
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3, 4]), false);