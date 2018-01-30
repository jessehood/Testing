const { assert, expect } = require('chai');
const objectFunctions = require('../src/objects');
const sinon = require('sinon');

let obj = {
  a: 1,
  b: 2,
  c: 3
};
afterEach(() => {
  obj = {
    a: 1,
    b: 2,
    c: 3
  };
});
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  describe('keys', () => {
    it('should be a function', () => {
      const { keys } = objectFunctions;
      assert.isFunction(keys);
    });
    it('should return an array of keys from an object', () => {
      const { keys } = objectFunctions;
      assert.deepEqual(keys(obj), ['a', 'b', 'c']);
    });
    it('should return an empty array for an empty object', () => {
      const { keys } = objectFunctions;
      assert.deepEqual(keys({}), []);
    });
  });
  describe('values', () => {
    it('should be a function', () => {
      const { values } = objectFunctions;
      assert.isFunction(values);
    });
    it('should return an array of values from an object', () => {
      const { values } = objectFunctions;
      assert.deepEqual(values(obj), [1, 2, 3]);
    });
    it('should return an empty array for an empty object', () => {
      const { values } = objectFunctions;
      assert.deepEqual(values({}), []);
    });
  });
  describe('mapObject', () => {
    it('should be a function', () => {
      const { mapObject } = objectFunctions;
      assert.isFunction(mapObject);
    });
    it('should iterate over all elements of an object', () => {
      const { mapObject } = objectFunctions;
      const callback = sinon.spy();
      mapObject(obj, callback);
      expect(callback.callCount).to.equal(3);
    });
    it('should map over an object and return a new object', () => {
      const { mapObject } = objectFunctions;
      const callback = x => x + 1;
      const mappedObj = mapObject(obj, callback);
      const expectedObj = {
        a: 2,
        b: 3,
        c: 4
      };
      assert.deepEqual(mappedObj, expectedObj);
    });
  });
  describe('pairs', () => {
    it('should be a function', () => {
      const { pairs } = objectFunctions;
      assert.isFunction(pairs);
    });
    it('should return an array of key/value pairs', () => {
      const { pairs } = objectFunctions;
      const pairsResult = pairs(obj);
      const expectedResult = [['a', 1], ['b', 2], ['c', 3]];
      assert.deepEqual(pairsResult, expectedResult);
    });
    it('should return an empty array for an empty object', () => {
      const { pairs } = objectFunctions;
      assert.deepEqual(pairs({}), []);
    });
  });
  describe('invert', () => {
    it('should be a function', () => {
      const { invert } = objectFunctions;
      assert.isFunction(invert);
    });
    it('should return an inverted object given an object', () => {
      const { invert } = objectFunctions;
      const invertedObj = invert(obj);
      const expectedResult = {
        1: 'a',
        2: 'b',
        3: 'c'
      };
      assert.deepEqual(invertedObj, expectedResult);
    });
    it('should return an empty object for an empty object', () => {
      const { invert } = objectFunctions;
      assert.deepEqual(invert({}), {});
    });
  });
  describe('defaults', () => {
    it('should be a function', () => {
      const { defaults } = objectFunctions;
      assert.isFunction(defaults);
    });
    it('should return an object with defaults applied', () => {
      const { defaults } = objectFunctions;
      const defaultProps = { c: 'asdf', d: 4 };
      const defaultObj = defaults(obj, defaultProps);
      assert.deepEqual(obj, defaultObj);
    });
    it('should return an object given an empty object and an empty default object', () => {
      const { defaults } = objectFunctions;
      assert.deepEqual(defaults({}, {}), {});
    });
  });
});
