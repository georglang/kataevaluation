var convert = function (arabic) {
  if (arabic == 10) {
    return 'X'
  }
  var roman = "";
  while(arabic-- > 0){
    roman += 'I'
  }
  return roman;
};

describe('Roman Numerals Session 2', function() {
  it('I', function(){
    expect(convert(1)).toBe('I');
  });
  it('II', function(){
    expect(convert(2)).toBe('II');
  });
  it('III', function(){
    expect(convert(3)).toBe('III');
  });
  it('X', function(){
    expect(convert(10)).toBe('X');
  });
});