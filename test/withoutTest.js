const assert = require('chai').assert;
const without   = require('../without');

describe("#without", () => {
  it('returns ["2"] for (["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"])', () => {
    assert.deepEqual(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]), ['2']);
  });
  it("returns [2, 3] for ([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1', '2'] for (['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  const words = ["hello", "world", "lighthouse"];
  it("returns [ 'hello', 'world' ] for (words, ['lighthouse'])", () => {
    assert.deepEqual(without(words, [ "lighthouse" ]), [ "hello", "world" ]);
  });
});