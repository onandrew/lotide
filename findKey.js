const assertEqual = require('./assertEqual');

const findKey = function(object, callback){
  const keys = Object.keys(object);
  for (let x = 0; x < keys.length; x++){
    if (callback(object[keys[x]])){
      return keys[x];
    }
  }
  return undefined;
}

module.exports = findKey;