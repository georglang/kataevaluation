function roman(romanString) {
  var digits ={
    V: 5,
    I: 1
  };

  return digits[romanString];
}

describe('roman numerals session4', function() {
  it('I to 1', function(){
    expect(roman('I')).toBe(1);
  });
  it('V to 5', function(){
    expect(roman('V')).toBe(5);
  });
});