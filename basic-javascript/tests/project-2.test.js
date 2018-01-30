<<<<<<< HEAD
const { assert } = require('chai');
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
  it('should be a function', () => {
    const { getBiggest } = funcs;
    assert.typeOf(getBiggest, 'function');
  });
  it('should return 100 given 100 and 99', () => {
    const { getBiggest } = funcs;
    assert.equal(getBiggest(100, 99), 100);
  });
  it('should return 10 given -50 and 10', () => {
    const { getBiggest } = funcs;
    assert.equal(getBiggest(-50, 10), 10);
  });
});

describe('greeting', () => {
  it('should be a function', () => {
    const { greeting } = funcs;
    assert.typeOf(greeting, 'function');
  });
  it('should return "Hola!" when given "Spanish"', () => {
    const { greeting } = funcs;
    assert.equal(greeting('Spanish'), 'Hola!');
  });
  it('should return "Hello!" when given undefined', () => {
    const { greeting } = funcs;
    assert.equal(greeting(undefined), 'Hello!');
  });
});

describe('isTenOrFive', () => {
  it('should be a function', () => {
    const { isTenOrFive } = funcs;
    assert.typeOf(isTenOrFive, 'function');
  });
  it('should return true if given 5 or 10', () => {
    const { isTenOrFive } = funcs;
    assert.isTrue(isTenOrFive(10));
    assert.isTrue(isTenOrFive(5));
  });
  it('should return false if given a string of the number 5', () => {
    const { isTenOrFive } = funcs;
    assert.isFalse(isTenOrFive('5'));
  });
});

describe('isInRange', () => {
  it('should be a function', () => {
    const { isInRange } = funcs;
    assert.typeOf(isInRange, 'function');
  });
  it('should return true when given 30', () => {
    const { isInRange } = funcs;
    assert.isTrue(isInRange(30));
  });
  it('should return false when given 60', () => {
    const { isInRange } = funcs;
    assert.isFalse(isInRange(60));
  });
});

describe('isInteger', () => {
  it('should be a function', () => {
    const { isInteger } = funcs;
    assert.typeOf(isInteger, 'function');
  });
  it('should return true when given 10', () => {
    const { isInteger } = funcs;
    assert.isTrue(isInteger(10));
  });
  it('should return false when given 2.22', () => {
    const { isInteger } = funcs;
    assert.isFalse(isInteger(2.22));
  });
});

describe('fizzBuzz', () => {
  it('should be a function', () => {
    const { fizzBuzz } = funcs;
    assert.typeOf(fizzBuzz, 'function');
  });
  it('should return fizzbuzz when given 15', () => {
    const { fizzBuzz } = funcs;
    assert.equal(fizzBuzz(15), 'fizzbuzz');
  });
  it('should return buzz when given 10', () => {
    const { fizzBuzz } = funcs;
    assert.equal(fizzBuzz(10), 'buzz');
  });
  it('should return fizz when given 9', () => {
    const { fizzBuzz } = funcs;
    assert.equal(fizzBuzz(9), 'fizz');
  });
});

describe('isPrime', () => {
  it('should be a function', () => {
    const { isPrime } = funcs;
    assert.typeOf(isPrime, 'function');
  });
  it('should return false when given 1', () => {
    const { isPrime } = funcs;
    assert.isFalse(isPrime(1));
  });
  it('should return true when given 7', () => {
    const { isPrime } = funcs;
    assert.isTrue(isPrime(7));
  });
});

describe('returnFirst', () => {
  it('should be a function', () => {
    const { returnFirst } = funcs;
    assert.typeOf(returnFirst, 'function');
  });
  it('should return 1 when given [1,2,3]', () => {
    const { returnFirst } = funcs;
    assert.equal(returnFirst([1, 2, 3]), 1);
  });
  it('should return undefined when given an empty array', () => {
    const { returnFirst } = funcs;
    assert.equal(returnFirst([]), undefined);
  });
});

describe('returnLast', () => {
  it('should be a function', () => {
    const { returnLast } = funcs;
    assert.typeOf(returnLast, 'function');
  });

  it('should return 3 when given [1,2,3]', () => {
    const { returnLast } = funcs;
    assert.equal(returnLast([1, 2, 3]), 3);
  });

  it('should return undefined when given an empty array', () => {
    const { returnLast } = funcs;
    assert.equal(returnLast([]), undefined);
  });
});

describe('getArrayLength', () => {
  it('should be a function', () => {
    const { getArrayLength } = funcs;
    assert.typeOf(getArrayLength, 'function');
  });

  it('should return 3 when given an array ["a","b","c"]', () => {
    const { getArrayLength } = funcs;
    assert.equal(getArrayLength(['a', 'b', 'c']), 3);
  });
  
  it('should return 0 when given an empty array', () => {
    const { getArrayLength } = funcs;
    assert.equal(getArrayLength([]), 0);
  });
});

describe('incrementByOne', () => {
  it('should be a function', () => {
    const { incrementByOne } = funcs;
    assert.typeOf(incrementByOne, 'function');
  });
  
  it('should return [2,3,4] when given [1,2,3]', () => {
    const { incrementByOne } = funcs;
    assert.deepEqual(incrementByOne([1, 2, 3]), [2, 3, 4]);
  });

  it('should return an empty array given an empty array', () => {
    const { incrementByOne } = funcs;
    assert.deepEqual(incrementByOne([]), []);
  });
});

describe('addItemToArray', () => {
  it('should be a function', () => {
    const { addItemToArray } = funcs;
    assert.typeOf(addItemToArray, 'function');
  });
  it('should return [1, 2, 3, 4] when given [1,2,3] and 4', () => {
    const { addItemToArray } = funcs;
    assert.deepEqual(addItemToArray([1, 2, 3], 4), [1, 2, 3, 4]);
  });
  it('should return ["a"] when given an empty array and "a"', () => {
    const { addItemToArray } = funcs;
    assert.deepEqual(addItemToArray([], 'a'), ['a']);
  });
});

describe('addItemToFront', () => {
  it('should be a function', () => {
    const { addItemToFront } = funcs;
    assert.typeOf(addItemToFront, 'function');
  });
  it('should return [4, 1, 2, 3] when given [1, 2, 3] and 4', () => {
    const { addItemToFront } = funcs;
    assert.deepEqual(addItemToFront([1, 2, 3], 4), [4, 1, 2 ,3]);
  });
  it('should return ["a"] when given an empty array and "a"', () => {
    const { addItemToFront } = funcs;
    assert.deepEqual(addItemToFront([], 'a'), ['a']);
  });
});

describe('wordsToSentence', () => {
  it('should be a function', () => {
    const { wordsToSentence } = funcs;
    assert.typeOf(wordsToSentence, 'function');
  });
  it('should return "My name is Jeff" when given ["My","name","is","Jeff"]', () => {
    const { wordsToSentence } = funcs;
    assert.equal(wordsToSentence(['My', 'name', 'is', 'Jeff']), 'My name is Jeff');
  });
});

describe('contains', () => {
  it('should be a function', () => {
    const { contains } = funcs;
    assert.typeOf(contains, 'function');
  });
  it('should return true when searching an array of [1, 2, 3] for 2', () => {
    const { contains } = funcs;
    assert.isTrue(contains([1, 2, 3], 2));
  });
  it('should return false when searching an array of[1, 2, 3] for 4', () => {
    const { contains } = funcs;
    assert.isFalse(contains([1, 2, 3], 4));
  });
});

describe('addNumbers', () => {
  it('should be a function', () => {
    const { addNumbers } = funcs;
    assert.typeOf(addNumbers, 'function');
  });
  it('should return 6 when given [1, 2, 3]', () => {
    const { addNumbers } = funcs;
    assert.equal(addNumbers([1, 2, 3]), 6);
  });
  it('should return 5 when given [5]', () => {
    const { addNumbers } = funcs;
    assert.equal(addNumbers([5]), 5);
  });
});

describe('averageTestScore', () => {
  it('should be a function', () => {
    const { averageTestScore } = funcs;
    assert.typeOf(averageTestScore, 'function');
  });
  it('should return 80 when given [100, 80, 60]', () => {
    const { averageTestScore } = funcs;
    assert.equal(averageTestScore([100, 80, 60]), 80);
  });
  it('should return NaN when given an empty array', () => {
    const { averageTestScore } = funcs;
    assert.isNaN(averageTestScore([]));
  });
});

describe('largestNumber', () => {
  it('should be a function', () => {
    const { largestNumber } = funcs;
    assert.typeOf(largestNumber, 'function');
  });
  it('should return 3 given an array of [1, 2, 3]', () => {
    const { largestNumber } = funcs;
    assert.equal(largestNumber([1, 2, 3]), 3);
  });
  it('should return 100 given an array of [100]', () => {
    const { largestNumber } = funcs;
    assert.equal(largestNumber([100]), 100);
  });
});

=======
/* eslint-disable */

const expect = require('chai').expect;
const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
		it('should be a function', () => {
			expect(funcs.getBiggest).to.be.a('function');
		});
		it('should return 10 if passed 10 and 5', () => {
			expect(funcs.getBiggest(10, 5)).to.equal(10);
		});
		it('should return 10 if passed 5 and 10', () => {
			expect(funcs.getBiggest(5, 10)).to.equal(10);
		});
	});
	
	describe('greeting', () => {
		it('should be a function', () => {
			expect(funcs.greeting).to.be.a('function');
		});
		it('should return Guten Tag! if passed German', () => {
			expect(funcs.greeting('German')).to.equal('Guten Tag!');
		});
		it('should return Hola! if passed Spanish', () => {
			expect(funcs.greeting('Spanish')).to.equal('Hola!');
		});
		it('should return Hello! if passed any other string', () => {
			expect(funcs.greeting('French')).to.equal('Hello!');
		});
	});

	describe('isTenOrFive', () => {
		it('should be a function', () => {
			expect(funcs.isTenOrFive).to.be.a('function');
		});
		it('should return true if passed 5', () => {
			expect(funcs.isTenOrFive(5)).to.equal(true);
		});
		it('should return true if passed 10', () => {
			expect(funcs.isTenOrFive(10)).to.equal(true);
		});
		it('should return false if not passed 5 or 10', () => {
			expect(funcs.isTenOrFive(5)).to.equal(true);
		});
	});

	describe('isInRange', () => {
		it('should be a function', () => {
			expect(funcs.isInRange).to.be.a('function');
		});
		it('should return true if passed 25', () => {
			expect(funcs.isInRange(25)).to.equal(true);
		});
		it('should return false if passed 5', () => {
			expect(funcs.isInRange(5)).to.equal(false);
		});
	});

	describe('isInteger', () => {
		it('should be a function', () => {
			expect(funcs.isInteger).to.be.a('function');
		});
		it('should return true if an integer is passed', () => {
			expect(funcs.isInteger(4)).to.equal(true);
		});
		it('should return false if passed a non integer', () => {
			expect(funcs.isInteger('string')).to.equal(false);
		});
	});

	describe('fizzBuzz', () => {
		it('should be a function', () => {
			expect(funcs.fizzBuzz).to.be.a('function');
		});
		it('should return fizz if passed 9', () => {
			expect(funcs.fizzBuzz(9)).to.equal('fizz');
		});
		it('should return buzz if passed 10', () => {
			expect(funcs.fizzBuzz(10)).to.equal('buzz');
		});
		it('should return fzzbuzz if passed 30', () => {
			expect(funcs.fizzBuzz(30)).to.equal('fizzbuzz');
		});
	});

	describe('isPrime', () => {
		it('should be a function', () => {
			expect(funcs.isPrime).to.be.a('function');
		});
		it('should return true if passed 3', () => {
			expect(funcs.isPrime(3)).to.equal(true);
		});
		it('should return false if passed 4', () => {
			expect(funcs.isPrime(4)).to.equal(false);
		});
	});

	describe('returnFirst', () => {
		it('should be a function', () => {
			expect(funcs.returnFirst).to.be.a('function');
		});
		it('should return 1 if passed [1, 2, 3]', () => {
			expect(funcs.returnFirst([1, 2, 3])).to.equal(1);
		});
		it('should return a number when passed an array', () => {
			expect(funcs.returnFirst([1, 2, 3])).to.be.a('number');
		});
	});

	describe('returnLast', () => {
		it('should be a function', () => {
			expect(funcs.returnLast).to.be.a('function');
		});
		it('should return 3 if passed [1, 2, 3]', () => {
			expect(funcs.returnLast([1, 2, 3])).to.equal(3);
		});
		it('should return a number when passed an array', () => {
			expect(funcs.returnFirst([1, 2, 3])).to.be.a('number');
		});
	});

	describe('getArrayLength', () => {
		it('should be a function', () => {
			expect(funcs.getArrayLength).to.be.a('function');
		});
		it('should return 3 if passed [1, 2, 3]', () => {
			expect(funcs.getArrayLength([1, 2, 3])).to.equal(3);
		});
		it('should return a number if passed an array', () => {
			expect(funcs.getArrayLength([1, 2, 3])).to.be.a('number');
		});
	});

	describe('incrementByOne', () => {
		it('should be a function', () => {
			expect(funcs.incrementByOne).to.be.a('function');
		});
		it('should return [2, 3, 4] if passed [1, 2, 3]', () => {
			expect(funcs.incrementByOne([1, 2, 3])).to.eql([2, 3, 4]);
		});
		it('should return an array if passed an array', () => {
			expect(funcs.incrementByOne([1, 2, 3])).to.be.a('array');
		});
	});

	describe('addItemToArray', () => {
		it('should be a function', () => {
			expect(funcs.addItemToArray).to.be.a('function');
		});
		it('should return [1, 2, 3] if passed [1, 2], 3', () => {
			expect(funcs.addItemToArray([1, 2], 3)).to.eql([1, 2, 3]);
		});
		it('should return an array if passed an array', () => {
			expect(funcs.addItemToArray([1, 2], 3)).to.be.a('array');
		});
	});

	describe('addItemToFront', () => {
		it('should be a function', () => {
			expect(funcs.addItemToFront).to.be.a('function');
		});
		it('should return [1, 2, 3] if passed [2, 3], 1', () => {
			expect(funcs.addItemToFront([2, 3], 1)).to.eql([1, 2, 3]);
		});
		it('should return an array when passed an array', () => {
			expect(funcs.addItemToFront([2, 3], 1)).to.be.a('array');
		});
	});

	describe('wordsToSentence', () => {
		it('should be a function', () => {
			expect(funcs.wordsToSentence).to.be.a('function');
		});
		it('should return hi patrick if passed ["hi", "patrick"]', () => {
			expect(funcs.wordsToSentence(['hi', 'patrick'])).to.equal('hi patrick');
		});
		it('should return a string when passed an array of strings', () => {
			expect(funcs.wordsToSentence(['hi', 'patrick'])).to.be.a('string');
		});
	});

	describe('contains', () => {
		it('should be a function', () => {
			expect(funcs.contains).to.be.a('function');
		});
		it('should return true when passed [1, 2, 3] and 1', () => {
			expect(funcs.contains([1, 2, 3], 1)).to.equal(true);
		});
		it('should return false when passed [1, 2, 3] and 4', () => {
			expect(funcs.contains([1, 2, 3], 4)).to.equal(false);
		});
	});

	describe('addNumbers', () => {
		it('should be a function', () => {
			expect(funcs.addNumbers).to.be.a('function');
		});
		it('sjould return 6 if passed [1, 2, 3]', () => {
			expect(funcs.addNumbers([1, 2, 3])).to.equal(6);
		});
		it('should return a number when passed an array', () => {
			expect(funcs.addNumbers([1, 2, 3])).to.be.a('number');
		});
	});

	describe('averageTestScore', () => {
		it('should be a function', () => {
			expect(funcs.averageTestScore).to.be.a('function');
		});
		it('should return 90 when passed [100, 90, 80]', () => {
			expect(funcs.averageTestScore([100, 90, 80])).to.equal(90);
		});
		it('should return a number when passed an array', () => {
			expect(funcs.averageTestScore([100, 90, 80])).to.be.a('number');
		});
	});

	describe('largestNumber', () => {
		it('should be a function', () => {
			expect(funcs.largestNumber).to.be.a('function');
		});
		it('should return 3 if passed [1, 2, 3]', () => {
			expect(funcs.largestNumber([1, 2, 3])).to.equal(3);
		});
		it('should return a number when passed an array', () => {
			expect(funcs.largestNumber([1, 2, 3])).to.be.a('number');
		});
	});

});
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
