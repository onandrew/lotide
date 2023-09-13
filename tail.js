// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');


const tail = function(x) {
  let newArray = [];
  if (x.length <= 1) {
    newArray = [];
  } else {
    newArray = x.slice(1);
  }
  console.log(newArray);
  return newArray;
};

// TEST CODE
module.exports = tail;