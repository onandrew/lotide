// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let statement = '';
  if (actual === expected) {
    statement = console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    statement = console.log("Assertion Failed: " + actual + " !== " + expected);
  }
  return statement;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);