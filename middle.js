const middle = function (testArray){
  let midArray = [];
  if (testArray.length > 2 ){
    if (testArray.length % 2 === 0){
      midArray.push(testArray[((testArray.length)/2 - 1)]);
      midArray.push(testArray[((testArray.length)/2)]);
    }
    else{
      midArray.push(testArray[Math.floor(testArray.length/2)]);
    }
  }
  return midArray;
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

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2]
console.log(middle([1, 2, 3, 4, 5, 6]))// => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4])