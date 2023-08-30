const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false){
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

const letterPositions = function(sentence) {
  const results = {};
  for (let x = 0; x < sentence.length ; x++){
    if (sentence[x] !== " "){
      if (results[sentence[x]]){
        results[sentence[x]].push(x);
      }
      else{
        results[sentence[x]] = [x];
      }
    }
  }  
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").l, [1]);