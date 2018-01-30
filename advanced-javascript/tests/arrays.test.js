<<<<<<< HEAD
/* eslint-disable prefer-destructuring */
=======
/* eslint-disable */
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon
let data = [1, 2, 3];
afterEach(() => {
  data = [1, 2, 3];
});

describe('Arrays', () => {
  describe('`each`', () => {
    it('should be a function', () => {
<<<<<<< HEAD
      const each = arrayFunctions.each;
      expect(each).to.be.a('function');
    });
    // begin here
    it('should iterate over all elements of an array', () => {
      const { each } = arrayFunctions;
      const callback = sinon.spy();
      each(data, callback);
      expect(callback.callCount).to.equal(3);
    });
    it('should apply a callback to all elements of an array', () => {
      const { each } = arrayFunctions;
      const cbResult = [];
      const callback = (x, i) => cbResult[i] = (x + 1);
      each(data, callback);
      expect(cbResult).to.eql([2, 3, 4]);
=======
      const each = arrayFunctions.each; // use arrayFunctions in all of them in this format
      expect(each).to.be.a('function');
    });
    // begin here
    it('should should invoke a callback for elements in the array', () => {
      const callBack = sinon.spy();
      const elements = [1, 2, 3];
      arrayFunctions.each(elements, callBack);
      expect(callBack).to.have.been.calledWith(1);
      expect(callBack).to.have.been.calledWith(2);
      expect(callBack).to.have.been.calledWith(3);
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.a('function');
    });
<<<<<<< HEAD
    it('should iterate over all elements of an array', () => {
      it('should iterate over all elements of an array', () => {
        const { map } = arrayFunctions;
        const callback = sinon.spy();
        map(data, callback);
        expect(callback.callCount).to.equal(3);
      });
    });
    it('should apply a callback to all elements of an array and return a new array', () => {
      const { map } = arrayFunctions;
      const callback = x => x + 1;
      const cbResult = map(data, callback);
      expect(cbResult).to.eql([2, 3, 4]);
=======
    it('should pass the elements in the array to the callback', () => {
      const callback = sinon.spy();
      const elements = [1, 2, 3];
      expect(arrayFunctions.map(elements, callback));
      expect(callback).to.have.been.calledWith(1);
      expect(callback).to.have.been.calledWith(2);
      expect(callback).to.have.been.calledWith(3);
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
<<<<<<< HEAD
    it('should iterate over all elements of an array', () => {
      const { reduce } = arrayFunctions;
      const callback = (acc, next) => acc + next;
      const spyCb = sinon.spy(callback);
      reduce(data, spyCb);
      expect(spyCb.callCount).to.equal(3);
=======
    it('should pass the elements in the array to the callback and return 1 value', () => {
      const elements = [1, 2, 3];
      const callback = (total, sum) => total + sum;
      expect(arrayFunctions.reduce(elements, callback)).to.equal(6);
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.a('function');
    });
<<<<<<< HEAD
    it('should apply a callback to all elements of an array if not found', () => {
      const { find } = arrayFunctions;
      const callback = x => x === 'abc';
      const spyCb = sinon.spy(callback);
      find(data, spyCb);
      expect(spyCb.callCount).to.equal(3);
    });
    it('should find an element and return it based on the callback', () => {
      const { find } = arrayFunctions;
      const callback = x => x === 2;
      expect(find(data, callback)).to.equal(2);
=======
    it('should pass the elements to callback and find an element in the array', () => {
      const callback = element => element > 2;
      const elements = [1, 2, 3];
      expect(arrayFunctions.find(elements, callback)).to.equal(3);
    });
    it('should return undefined if element not in the array', () => {
      const callback = element => element > 4;
      const elements = [1, 2, 3];
      expect(arrayFunctions.find(elements, callback)).to.equal(undefined);
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
<<<<<<< HEAD
    it.skip('should apply a callback to all elements of an array', () => {
      const { filter } = arrayFunctions;
      const callback = x => x !== 1;
      const spyCb = sinon.spy(callback);
      filter(data, spyCb);
      expect(spyCb.callCount).to.equal(3);
=======
    it('should pass the elements to the callback and filter the result', () => {
      const callback = sinon.spy();
      const elements = [1, 2, 3];
      expect(arrayFunctions.filter(elements, callback));
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });

  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
<<<<<<< HEAD
=======
    });
    it('should pass elements to callback and return a flattened array', () => {
      const elements = [1, 2, [3]];
      expect(arrayFunctions.flatten(elements)).to.eql([1, 2, 3]);
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
    });
    it.skip('');
  });
});
