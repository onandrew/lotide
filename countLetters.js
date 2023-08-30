const assertEqual = function(actual, expected) {
  let statement = '';
  if (actual === expected) {
    statement = console.log(`Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    statement = console.log(`Assertion Failed:  ${actual} !==  ${expected}`);
  }
  return statement;
};

const countLetters = function(sentence){
  let results = {};
  for (const value of sentence){
    if (value !== " ") {
      if (results[value]) {
        results[value] += 1; 
      } else {
        results[value] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("Andrew"));
console.log(countLetters("Andreww"));
console.log(countLetters("Hello World"));