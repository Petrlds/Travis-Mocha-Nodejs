/*
//This is how to use 'assert' module

var assert = require('assert');
  nextPrime = require('./../../NextPrime').nextPrime;
  asyncPrime = require('./../../NextPrime').asyncPrime;

suite('#nextPrime  test', function() {
  test('nextPrime should return the next prime number', function() {
    assert.equal(11, nextPrime(7));
  });

  test('zero and one are not prime numbers', function() {
    assert.equal(2, nextPrime(0));
    assert.equal(2, nextPrime(1));
  });
});
*/
// This is how to use 'should' module
require('should');

nextPrime = require('./../../NextPrime').nextPrime;
asyncPrime = require('./../../NextPrime').asyncPrime;

suite('#nextPrime test', function() {
  test('nextPrime should return the next prime number', function() {
		nextPrime(7).should.equal(11);
  });

  test('zero and one are not prime numbers', function() {
		nextPrime(0).should.equal(2);
		nextPrime(1).should.equal(2);
  });
});