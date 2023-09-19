const assertEqual = require('./assertEqual');

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

module.exports = countLetters;