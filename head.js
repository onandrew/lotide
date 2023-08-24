// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let statement = '';
  if (actual === expected) {
    statement = console.log(`Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    statement = console.log(`Assertion Failed:  ${actual} !==  ${expected}`);
  }
  return statement;
};

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

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);