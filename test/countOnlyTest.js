const assert = require('chai').assert;
const countOnly   = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns { 'Jason': 1, 'Fang': 2 } for { 'Jason': true, 'Karima': true, 'Fang': true } ", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), { "Jason": 1, "Fang": 2});
  });
  it("returns { 'Karl': 1} for { 'Karl': true, 'Theo': true, 'Joe': false }}", () => {
    assert.deepEqual(countOnly(firstNames, { "Karl": true, "Theo": true, "Joe": false }), { "Karl" : 1 });
  });
});