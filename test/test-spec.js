function roman(romanString) {
  var digits = {
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  return digits[romanString];
}

describe('roman numerals session4', function () {
  it('I to 1', function () {
    expect(roman('I')).toBe(1);
  });
  it('V to 5', function () {
    expect(roman('V')).toBe(5);
  });
  it('X to 10', function () {
    expect(roman('X')).toBe(10);
  });
  it('L to 50', function () {
    expect(roman('L')).toBe(50);
  });
  it('C to 100', function () {
    expect(roman('C')).toBe(100);
  });
});