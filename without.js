const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let x = 0; x < source.length; x++) {
    if (!itemsToRemove.includes(source[x])) {
      newArray.push(source[x]);
    }
  }
  return newArray;
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
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false){
    statement = console.log(`Assertion Failed:  ${actual} !==  ${expected}`);
  }
    else{ 
      statement = console.log(`Assertion Passed:  ${actual} ===  ${expected}`);
    }
    return statement;
};
assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

assertArraysEqual(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]) , ["2"]); 


const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

