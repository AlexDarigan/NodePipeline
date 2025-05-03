const { equal } = require('assert');
const { add, subtract } = require('../../src/calculator/calculator')

describe("Calculator", function() {
  describe("add", function() {
    it('should return 3 when given 1 + 2', function () {
      equal(add(1, 2), 3);
    });
  });

  describe("subtract", function() {
    it('should return 1 when given 3 - 2', function() {
      equal(subtract(3, 2), 1);
    });
  });
});

