const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length){
    statement = console.log(`Assertion Failed:  ${actual} !==  ${expected}`);
  }
    for (let x = 0; x < actual.length; x++){
      if (actual[x] !== expected[x]){
        statement = console.log(`Assertion Failed:  ${actual} !==  ${expected}`);
      }
    }
    statement = console.log(`Assertion Passed:  ${actual} ===  ${expected}`);
    return statement;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false