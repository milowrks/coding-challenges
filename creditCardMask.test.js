const maskify = require('./creditCardMask')

describe("maskify", function(){
  it("should return empty string as is", function(){
   expect(maskify("")).toBe("")
  });

  it("should return single char as is", function(){
    expect(maskify("1")).toBe("1")
  });

  it("should return fewer than 4 chars strings as is", function(){
    expect(maskify("snow")).toBe("snow")
  });

  it("should return maskified for more than 4 chars", function(){
    expect(maskify("jonsnow")).toBe("###snow")
  });

  it("should work for credit card examples", function(){
    expect(maskify('4556364607935616')).toBe('############5616')
  });
});