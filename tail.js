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
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!