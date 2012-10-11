require('should');

cube = require('./../../Cube').cube;

suite('#cube test', function() {
  test('cube should return -8', function() {
		cube(-2).should.equal(-8);
  });

  test('cube should return 8 and 125', function() {
		cube(2).should.equal(8);
		cube(5).should.equal(125);
  });

  test('cube should return 1 and 27', function() {
		cube(1).should.equal(1);
		cube(3).should.equal(27);
  });
});