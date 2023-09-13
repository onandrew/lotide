const assertArraysEqual = require('./assertArraysEqual');

const middle = function (testArray){
  let midArray = [];
  if (testArray.length > 2 ) {
    if (testArray.length % 2 === 0){
      midArray.push(testArray[((testArray.length)/2 - 1)]);
      midArray.push(testArray[((testArray.length)/2)]);
    }
    else {
      midArray.push(testArray[Math.floor(testArray.length/2)]);
    }
  }
  return midArray;
}
module.exports = middle;