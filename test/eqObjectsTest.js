const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');
const multiColorShirtObject = { colors: ["red", "blue", ], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "green" , "blue"]};

describe("#eqObjects", () => {
  it('returns true for (eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)', () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  it('returns false for (eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)', () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
});