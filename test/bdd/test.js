require('should');

describe('Array and String', function(){
  describe('#index Of', function(){
    it('should return -1 when the value is not present', function(){
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });

	describe('#position Of', function(){
    it("should return position of char in a string 'cool'", function(){
      'cool'.indexOf('c').should.equal(0);
      'cool'.indexOf('l').should.equal(3);
    });
  });
});