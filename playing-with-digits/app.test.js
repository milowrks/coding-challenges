const digPow = require('./app')

describe("digPow", function() {
  it("should return -1 if such number k cannot be found", function(){
    expect(digPow(92, 1)).toBe(-1)
  });
});