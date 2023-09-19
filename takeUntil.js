const takeUntil = function(array, callback) {
  let result = [];
  for (let x = 0; x < array.length; x++) {
    if (callback(array[x])){
      result = array.slice(0, x);
    }
  }
  return result;
}

module.exports = takeUntil;