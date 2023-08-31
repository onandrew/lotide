const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false){
      console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
    else{ 
      console.log(`✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
    }
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

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false