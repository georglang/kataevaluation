var convert = function (arabic) {
  if(arabic == 2){
    return 'II'
  }
  return 'I';
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
});