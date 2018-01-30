<<<<<<< HEAD
/* eslint-disable prefer-destructuring */
const { assert, expect } = require('chai');
=======
/* eslint-disable */

const assert = require('chai').assert;
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
const funcs = require('../src/project-1');
const expect = require('chai').expect;

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
<<<<<<< HEAD
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
=======
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should return 100 when passed 10', () => {
      expect(funcs.multiplyByTen(10)).to.equal(100);
    });
    it('should return a number', () => {
      expect(funcs.multiplyByTen(10)).to.be.a('number')
    });
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return 0 when passed 5', () => {
<<<<<<< HEAD
=======
      const subtractFive = funcs.subtractFive;
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
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
<<<<<<< HEAD
    it('should return false when given two unequal strings', () => {
      const { areSameLength } = funcs;
      expect(funcs.areSameLength('milk', 'bread')).to.equal(false);
=======
    it('should return false when passed two unequal strings', () => {
      expect(funcs.areSameLength('milk', 'bread')).to.equal(false);
    });
    it('should return true when passed two equal strings', () => {
      expect(funcs.areSameLength('milk', 'eggs')).to.equal(true);
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
<<<<<<< HEAD
    });
    it('should return true if both numbers passed are the same', () => {
      expect(funcs.areEqual(1, 1)).to.equal(true);
    });
    it('should return false if the numbers are different', () => {
      expect(funcs.areEqual(1, 2)).to.equal(false);
=======
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
    it('should return true if both numbers passed are the same', () => {
      expect(funcs.areEqual(1, 1)).to.equal(true);
    })
    it('should return false if both numbers passed are not equal', () => {
      expect(funcs.areEqual(1, 2)).to.equal(false);
    })
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
<<<<<<< HEAD
    it('should return true if num passed is less than 90', () => {
=======
    it('should return true of num passed is less than 90', () => {
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
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
<<<<<<< HEAD
    });
    it('should return false if num passed is less than 50', () => {
      expect(funcs.greaterThanFifty(49)).to.equal(false);
=======
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
    it('should retuen false if num passed is less than 50', () => {
      expect(funcs.greaterThanFifty(1)).to.equal(false);
    })
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
<<<<<<< HEAD
    });
    it('should return 10 when passed 5 and 5', () => {
      expect(funcs.add(5, 5)).to.equal(10);
    });
    it('should return -7 when passed -3 and -4', () => {
      expect(funcs.add(-3, -4)).to.equal(-7);
=======
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
    it('should return 10 when passed 5 and 5', () => {
      expect(funcs.add(5, 5)).to.equal(10);
    });
    it('should return a number when passed two numbers', () => {
      expect(funcs.add(5, 5)).to.be.a('number');
    })
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
<<<<<<< HEAD
    it('should return 5 when given 10 and 5', () => {
      expect(funcs.subtract(10, 5)).to.equal(5);
    });
    it('should return -8 when given 10 and 18', () => {
      expect(funcs.subtract(10, 18)).to.equal(-8);
=======
    it('should return 0 when passed 5 and 5', () => {
      expect(funcs.subtract(5, 5)).to.equal(0);
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
    it('should return a number when passed two numbers', () => {
      expect(funcs.subtract(5, 5)).to.be.a('number');
    })
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
<<<<<<< HEAD
    it('should equal 10 when given 100 and 10', () => {
      expect(funcs.divide(100, 10)).to.equal(10);
    });
    it('should equal 1.2 when given -6 and -5', () => {
      expect(funcs.divide(-6, -5)).to.equal(1.2);
=======
    it('should return 10 when passed 100 and 10', () => {
      expect(funcs.divide(100, 10)).to.equal(10);
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
    it('should return a number when passed two positve integers', () => {
      expect(funcs.divide(100, 10)).to.be.a('number');
    })
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
<<<<<<< HEAD
    it('should equal 70 when given 10 and 7 ', () => {
      expect(funcs.multiply(10, 7)).to.equal(70);
    });
    it('should equal 64 when given -8 and -8', () => {
      expect(funcs.multiply(-8, -8)).to.equal(64);
=======
    it('should return 100 when passed 10 and 10', () => {
      expect(funcs.multiply(10, 10)).to.equal(100);
    });
    it('should return a number when passed two integers', () => {
      expect(funcs.multiply(10, 10)).to.be.a('number');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
<<<<<<< HEAD
    it('should equal 1 when given 10 and 3', () => {
      expect(funcs.getRemainder(10, 3)).to.equal(1);
=======
    it('should return 5 when passed 15 and 10', () => {
      expect(funcs.getRemainder(15, 10)).to.equal(5);
    });
    it('should return a number when passed two itegers', () => {
      expect(funcs.getRemainder(15, 10)).to.be.a('number');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
<<<<<<< HEAD
    it('should equal true when given 2', () => {
      expect(funcs.isEven(2)).to.equal(true);
    });
    it('should equal false when given 5', () => {
      expect(funcs.isEven(5)).to.equal(false);
=======
    it('should return true when passed 2', () => {
      expect(funcs.isEven(2)).to.equal(true);
    });
    it('should return false when passed 3', () => {
      expect(funcs.isEven(3)).to.equal(false);
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
<<<<<<< HEAD
    it('should equal true when given 7', () => {
      expect(funcs.isOdd(7)).to.equal(true);
    });
    it('should equal false when given 10', () => {
      expect(funcs.isOdd(10)).to.equal(false);
=======
    it('should return true when passed 3', () => {
      expect(funcs.isOdd(3)).to.equal(true);
    });
    it('should return false when passed 2', () => {
      expect(funcs.isOdd(2)).to.equal(false);
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
<<<<<<< HEAD
    it('should return 9 when given 3', () => {
      expect(funcs.square(3)).to.equal(9);
    });
    it('should return 25 when given -5', () => {
      expect(funcs.square(-5)).to.equal(25);
=======
    it('should return 4 when passed 2', () => {
      expect(funcs.square(2)).to.equal(4);
    });
    it('should return a number when passed an integer', () => {
      expect(funcs.square(2)).to.be.a('number');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
<<<<<<< HEAD
    it('should return 27 when given 3', () => {
      expect(funcs.cube(3)).to.equal(27);
    });
    it('should return -125 when given -55', () => {
      expect(funcs.cube(-5)).to.equal(-125);
=======
    it('should return 8 when passed 2', () => {
      expect(funcs.cube(2)).to.equal(8);
    });
    it('should return a number when passed am integer', () => {
      expect(funcs.cube(2)).to.be.a('number');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
<<<<<<< HEAD
    it('should equal 64 when given 4 and 3', () => {
      expect(funcs.raiseToPower(4, 3)).to.equal(64);
    });
    it('should equal -32 when given -2 and 5', () => {
      expect(funcs.raiseToPower(-2, 5)).to.equal(-32);
=======
    it('should return 4 when passed 2 and 2', () => {
      expect(funcs.raiseToPower(2, 2)).to.equal(4);
    });
    it('should return a number when passed an integer', () => {
      expect(funcs.raiseToPower(2, 2)).to.be.a('number');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
<<<<<<< HEAD
    it('should equal 7 when given 6.584', () => {
      expect(funcs.roundNumber(6.584)).to.equal(7);
    });
    it('should equal 9 when given 9.49999', () => {
      expect(funcs.roundNumber(9.49999)).to.equal(9);
=======
    it('should return 1 when passed 1.2', () => {
      expect(funcs.roundNumber(1.2)).to.equal(1);
    });
    it('should return a number when passed a number', () => {
      expect(funcs.roundNumber(1.2)).to.be.a('number');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
<<<<<<< HEAD
    it('should equal 2 when given 1.0001', () => {
      expect(funcs.roundUp(1.0001)).to.equal(2);
    });
    it('should equal 5 when given 5', () => {
      expect(funcs.roundUp(5)).to.equal(5);
=======
    it('should return 2 when passed 1.7', () => {
      expect(funcs.roundUp(1.7)).to.equal(2);
    });
    it('should return a number when passed a number', () => {
      expect(funcs.roundUp(1.7)).to.be.a('number');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
<<<<<<< HEAD
    it('should equal "hello!" when given "hello"', () => {
      expect(funcs.addExclamationPoint('hello')).to.equal('hello!');
    });
    it('should equal ! when given an empty string', () => {
      expect(funcs.addExclamationPoint('')).to.equal('!');
=======
    it('should return pizza! when passed pizza', () => {
      expect(funcs.addExclamationPoint('pizza')).to.equal('pizza!');
    });
    it('should return a string when passed a string', () => {
      expect(funcs.addExclamationPoint('pizza')).to.be.a('string');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
<<<<<<< HEAD
    it('should equal "Kanye West" when given "Kanye" and "West"', () => {
      expect(funcs.combineNames('Kanye', 'West')).to.equal('Kanye West');
    });
    it('should equal "John Doe" when given "John" and "Doe', () => {
      expect(funcs.combineNames('John', 'Doe')).to.equal('John Doe');
=======
    it('should return patrick sandoval when passed patrick and sandoval', () => {
      expect(funcs.combineNames('patrick', 'sandoval')).to.equal('patrick sandoval');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
    it('should return a string when passed two strings', () => {
      expect(funcs.combineNames('patrick', 'sandoval')).to.be.a('string');
    })
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
<<<<<<< HEAD
    it('should return "Hello World!" when given "World"', () => {
      expect(funcs.getGreeting('World')).to.equal('Hello World!');
=======
    it('should return Hello patrick! when passed patrick', () => {
      expect(funcs.getGreeting('patrick')).to.equal('Hello patrick!');
    });
    it('should return a string when passed a string', () => {
      expect(funcs.getGreeting('patrick')).to.be.a('string');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
<<<<<<< HEAD
    it('should equal 24 when given 6 and 4', () => {
      expect(funcs.getRectangleArea(6, 4)).to.equal(24);
    });
    it('should equal 0 when given 7 and 0', () => {
      expect(funcs.getRectangleArea(7, 0)).to.equal(0);
=======
    it('should return 4 when passed 2 and 2', () => {
      expect(funcs.getRectangleArea(2, 2)).to.equal(4);
    });
    it('should return a number when passed two integers', () => {
      expect(funcs.getRectangleArea(2, 2)).to.be.a('number');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
<<<<<<< HEAD
    it('should equal 25 when given a 10 base and 5 height', () => {
      expect(funcs.getTriangleArea(10, 5)).to.equal(25);
    });
    it('should equal 0 when given a 0 base and 99 height', () => {
      expect(funcs.getTriangleArea(0, 99)).to.equal(0);
=======
    it('should return 2 when passed 2 and 2', () => {
      expect(funcs.getTriangleArea(2, 2)).to.equal(2);
    });
    it('should return a number when passed two integers', () => {
      expect(funcs.getTriangleArea(2, 2)).to.be.a('number');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
<<<<<<< HEAD
    it('should approximately equal 12.56 when given 2', () => {
      assert.approximately(funcs.getCircleArea(2), 12.56, 0.01);
    });
    it('should equal 0 when given 0', () => {
      expect(funcs.getCircleArea(0)).to.equal(0);
=======
    it('should return calculated area when passed 10', () => {
      expect(funcs.getCircleArea(10)).to.equal(Math.PI * 100);
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
    it('should return a number when passed an integer', () => {
      expect(funcs.getCircleArea(10)).to.be.a('number');
    })
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
<<<<<<< HEAD
    it('should equal 50 when given a width of 5, height of 2, and length of 5', () => {
      expect(funcs.getRectangularPrismVolume(5, 2, 5)).to.equal(50);
    });
    it('should equal 0 when given a width of 0, a height of 99, and length of 777', () => {
      expect(funcs.getRectangularPrismVolume(0, 99, 777)).to.equal(0);
=======
    it('should return 8 when passed 2, 2, and 2', () => {
      expect(funcs.getRectangularPrismVolume(2, 2, 2)).to.equal(8);
    });
    it('should return a number when passed 3 integers', () => {
      expect(funcs.getRectangularPrismVolume(2, 2, 2)).to.be.a('number');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });
});
