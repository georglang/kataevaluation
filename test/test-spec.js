function roman(romanString) {
  if(romanString === 'V'){
    return 5;
  }
  return 1;
}

describe('roman numerals session4', function() {
  it('I to 1', function(){
    expect(roman('I')).toBe(1);
  });
  it('V to 5', function(){
    expect(roman('V')).toBe(5);
  });
});