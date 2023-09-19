const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

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

module.exports = letterPositions;