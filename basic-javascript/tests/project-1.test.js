/* eslint-disable prefer-destructuring */
const { assert, expect } = require('chai');
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const { multiplyByTen } = funcs;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return 100 when passed 10', () => {
      const { multiplyByTen } = funcs;
      expect(multiplyByTen(10)).to.equal(100);
    });
    it('should return a number', () => {
      expect(funcs.multiplyByTen(10)).to.be.a('number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return 0 when passed 5', () => {
      expect(funcs.subtractFive(5)).to.equal(0);
    });
    it('should return a number', () => {
      expect(funcs.subtractFive(5)).to.be.a('number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return false when given two unequal strings', () => {
      const { areSameLength } = funcs;
      expect(funcs.areSameLength('milk', 'bread')).to.equal(false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if both numbers passed are the same', () => {
      expect(funcs.areEqual(1, 1)).to.equal(true);
    });
    it('should return false if the numbers are different', () => {
      expect(funcs.areEqual(1, 2)).to.equal(false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if num passed is less than 90', () => {
      expect(funcs.lessThanNinety(1)).to.equal(true);
    });
    it('should return false if num passed is greater than 90', () => {
      expect(funcs.lessThanNinety(91)).to.equal(false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if num passed is greater than 50', () => {
      expect(funcs.greaterThanFifty(51)).to.equal(true);
    });
    it('should return false if num passed is less than 50', () => {
      expect(funcs.greaterThanFifty(49)).to.equal(false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return 10 when passed 5 and 5', () => {
      expect(funcs.add(5, 5)).to.equal(10);
    });
    it('should return -7 when passed -3 and -4', () => {
      expect(funcs.add(-3, -4)).to.equal(-7);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return 5 when given 10 and 5', () => {
      expect(funcs.subtract(10, 5)).to.equal(5);
    });
    it('should return -8 when given 10 and 18', () => {
      expect(funcs.subtract(10, 18)).to.equal(-8);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should equal 10 when given 100 and 10', () => {
      expect(funcs.divide(100, 10)).to.equal(10);
    });
    it('should equal 1.2 when given -6 and -5', () => {
      expect(funcs.divide(-6, -5)).to.equal(1.2);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should equal 70 when given 10 and 7 ', () => {
      expect(funcs.multiply(10, 7)).to.equal(70);
    });
    it('should equal 64 when given -8 and -8', () => {
      expect(funcs.multiply(-8, -8)).to.equal(64);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should equal 1 when given 10 and 3', () => {
      expect(funcs.getRemainder(10, 3)).to.equal(1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should equal true when given 2', () => {
      expect(funcs.isEven(2)).to.equal(true);
    });
    it('should equal false when given 5', () => {
      expect(funcs.isEven(5)).to.equal(false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should equal true when given 7', () => {
      expect(funcs.isOdd(7)).to.equal(true);
    });
    it('should equal false when given 10', () => {
      expect(funcs.isOdd(10)).to.equal(false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return 9 when given 3', () => {
      expect(funcs.square(3)).to.equal(9);
    });
    it('should return 25 when given -5', () => {
      expect(funcs.square(-5)).to.equal(25);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return 27 when given 3', () => {
      expect(funcs.cube(3)).to.equal(27);
    });
    it('should return -125 when given -55', () => {
      expect(funcs.cube(-5)).to.equal(-125);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should equal 64 when given 4 and 3', () => {
      expect(funcs.raiseToPower(4, 3)).to.equal(64);
    });
    it('should equal -32 when given -2 and 5', () => {
      expect(funcs.raiseToPower(-2, 5)).to.equal(-32);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should equal 7 when given 6.584', () => {
      expect(funcs.roundNumber(6.584)).to.equal(7);
    });
    it('should equal 9 when given 9.49999', () => {
      expect(funcs.roundNumber(9.49999)).to.equal(9);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should equal 2 when given 1.0001', () => {
      expect(funcs.roundUp(1.0001)).to.equal(2);
    });
    it('should equal 5 when given 5', () => {
      expect(funcs.roundUp(5)).to.equal(5);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should equal "hello!" when given "hello"', () => {
      expect(funcs.addExclamationPoint('hello')).to.equal('hello!');
    });
    it('should equal ! when given an empty string', () => {
      expect(funcs.addExclamationPoint('')).to.equal('!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should equal "Kanye West" when given "Kanye" and "West"', () => {
      expect(funcs.combineNames('Kanye', 'West')).to.equal('Kanye West');
    });
    it('should equal "John Doe" when given "John" and "Doe', () => {
      expect(funcs.combineNames('John', 'Doe')).to.equal('John Doe');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return "Hello World!" when given "World"', () => {
      expect(funcs.getGreeting('World')).to.equal('Hello World!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should equal 24 when given 6 and 4', () => {
      expect(funcs.getRectangleArea(6, 4)).to.equal(24);
    });
    it('should equal 0 when given 7 and 0', () => {
      expect(funcs.getRectangleArea(7, 0)).to.equal(0);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should equal 25 when given a 10 base and 5 height', () => {
      expect(funcs.getTriangleArea(10, 5)).to.equal(25);
    });
    it('should equal 0 when given a 0 base and 99 height', () => {
      expect(funcs.getTriangleArea(0, 99)).to.equal(0);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should approximately equal 12.56 when given 2', () => {
      assert.approximately(funcs.getCircleArea(2), 12.56, 0.01);
    });
    it('should equal 0 when given 0', () => {
      expect(funcs.getCircleArea(0)).to.equal(0);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should equal 50 when given a width of 5, height of 2, and length of 5', () => {
      expect(funcs.getRectangularPrismVolume(5, 2, 5)).to.equal(50);
    });
    it('should equal 0 when given a width of 0, a height of 99, and length of 777', () => {
      expect(funcs.getRectangularPrismVolume(0, 99, 777)).to.equal(0);
    });
  });
});
