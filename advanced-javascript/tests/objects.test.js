<<<<<<< HEAD
const { assert, expect } = require('chai');
=======
/* eslint-disable */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
const objectFunctions = require('../src/objects');
const sinon = require('sinon');

<<<<<<< HEAD
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
=======
const expect = chai.expect;
chai.use(sinonChai);

>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  describe('keys', () => {
    it('should be a function', () => {
<<<<<<< HEAD
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
=======
      expect(objectFunctions.keys).to.be.a('function');
    });
    it('should return the keys in the object when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.keys(obj)[0]).to.equal('key1');
    });
    it('should return an array when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.keys(obj)).to.be.a('array');
    });
  });

  describe('values', () => {
    it('should be a function', () => {
      expect(objectFunctions.values).to.be.a('function');
    });
    it('should return the values of object keys if object is passed', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.values(obj)[0]).to.equal(1);
    });
    it('should return an array when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.values(obj)).to.be.a('array');
    });
  });

  describe('mapObject', () => {
    it('should be a function', () => {
      expect(objectFunctions.mapObject).to.be.a('function');
    });
    it('should return an array of mapped elements when passed an object', () => {
      const callback = sinon.spy();
      const obj = {key1: 1, key2: 2};
      objectFunctions.mapObject(obj, callback);
      expect(callback).to.have.been.calledWith(1);
    });
    it('should return an object when passed an object', () => {
      const callback = sinon.spy();
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.mapObject(obj, callback)).to.be.a('object');
    });
  });

  describe('pairs', () => {
    it('should be a function', () => {
      expect(objectFunctions.pairs).to.be.a('function');
    });
    // return [key, obj[key] => key value pair
    it('should retrun key, value pairs when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.pairs(obj)).to.eql([['key1', 1],['key2', 2]]);
    });
    it('should return an array when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      expect(objectFunctions.pairs(obj)).to.be.a('array');
    });
  });

  describe('invert', () => {
    it('should be a function', () => {
      expect(objectFunctions.invert).to.be.a('function');
    });
    it('should swap a key and value when passed an object and return a new object', () => {
      const obj = {key1: 1, key2: 2};
      const invertedObj = objectFunctions.invert(obj);
      expect(objectFunctions.values(obj)[0]).to.equal('key1');
      expect(objectFunctions.values(obj)[1]).to.equal('key2');
      expect(objectFunctions.keys(obj)[0]).to.equal('1');
      expect(objectFunctions.keys(obj)[1]).to.equal('2');
    });
  });

  describe('defaults', () => {
    it('should be a function', () => {
      expect(objectFunctions.defaults).to.be.a('function');
    });
    it('should add default properties to an object and return an updated object', () => {
      const obj = {key1: 1, key2: 2};
      const defaults = {key2: 3, key3: 4};
      const newObj = objectFunctions.defaults(obj, defaults);
      expect(newObj).to.eql(obj);
    });
    it('should return an object when passed an object', () => {
      const obj = {key1: 1, key2: 2};
      const defaults = {key2: 3, key3: 4};
      const newObj = objectFunctions.defaults(obj, defaults);
      expect(newObj).to.be.a('object');
    });
  });

>>>>>>> 2c21647dabed4b84f2570c46aaed7b54a7766eba
});
