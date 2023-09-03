
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
}

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
