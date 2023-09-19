const assert = require('chai').assert;
const countLetters   = require('../countLetters');

describe("#countLetters", () => {
  it("returns { A: 1, n: 1, d: 1, r: 1, e: 1, w: 1 } for 'Andrew'", () => {
    assert.deepEqual(countLetters("Andrew"), { A: 1, n: 1, d: 1, r: 1, e: 1, w: 1 });
  });
  it("returns { A: 1, n: 1, d: 1, r: 1, e: 1, w: 2 } for 'Andreww'", () => {
    assert.deepEqual(countLetters('Andreww'), { A: 1, n: 1, d: 1, r: 1, e: 1, w: 2 }); 
  });
  it("returns { H: 1, e: 1, l: 3, o: 2, W: 1, r: 1, d: 1) } for 'Hello World'", () => {
    assert.deepEqual(countLetters('Hello World'), { H: 1, e: 1, l: 3, o: 2, W: 1, r: 1, d: 1 });
  });
});
