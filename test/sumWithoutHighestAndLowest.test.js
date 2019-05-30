const sumWithoutHighestAndLowest = require("../src/sumWithoutHighestAndLowest.js");
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5
// test cases

test("[6, 2, 1, 8, 10] returns 16", function() {
  expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toEqual(16);
});
test("[1, 1, 11, 2, 3] returns 5", function() {
  expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toEqual(5);
});

test("[1, 1, 11, 2, 11, 2, 3] returns 7", function() {
  expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 11, 2, 3])).toEqual(7);
});
