// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = function(x){
  let first = 0;
  let y = 0;
  if (x.length === 0) {
    first = undefined;
  }
  else {
    while(y == 0){
      first = x[y];
      y++;
    } 
  }
  return first;
};

module.exports = head;
