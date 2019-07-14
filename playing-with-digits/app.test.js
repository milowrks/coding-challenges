const digPow = require('./app')

describe("digPow", function() {
  it("should return -1 if such number k cannot be found", function(){
    expect(digPow(92, 1)).toBe(-1)
  });

  it("should return 1 if k equals to 1", function(){
    expect(digPow(89, 1)).toBe(1)
  });

  it("should return 2 if k equals to 2", function(){
    expect(digPow(695, 2)).toBe(2)
  });

  it("should return 2=3 if k equals to 3", function(){
    expect(digPow(46288, 3)).toBe(51)
  });
});