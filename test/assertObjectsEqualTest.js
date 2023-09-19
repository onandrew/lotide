const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true);
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3, 4]), false);
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, "3"]), false);