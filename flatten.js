const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

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

module.exports = flatten;