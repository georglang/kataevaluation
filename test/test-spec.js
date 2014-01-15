var convert = function (arabic) {
  return 'I';
};

describe('Roman Numerals Session 2', function() {
  it('I', function(){
    expect(convert(1)).toBe('I');
  });
  it('II', function(){
    expect(convert(2)).toBe('II');
  });
});