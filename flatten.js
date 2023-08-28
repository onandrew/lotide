const flatten = function(testArray){
  let newArray = [];
  for (let x = 0; x < testArray.length; x++){
    if (Array.isArray(testArray[x])){
      for (const y of testArray[x]){
        newArray.push(y);
      }
    }
    else{
      newArray.push(testArray[x]);
    }
  }
  return newArray;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected === false)){
    statement = console.log(`Assertion Failed:  ${actual} !==  ${expected}`);
  }
    else{ 
      statement = console.log(`Assertion Passed:  ${actual} ===  ${expected}`);
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
console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);