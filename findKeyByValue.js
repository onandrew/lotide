const assertEqual = require('./assertEqual');

const findKeyByValue = function(object1, value){
  const keys = Object.keys(object1);
  for (let x of keys){
    if (object1[x] === value){
      return x;
    }
  }
}


module.exports = findKeyByValue;