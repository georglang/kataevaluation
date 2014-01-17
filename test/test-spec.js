function roman(romanString) {
  var digits = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  if (romanString.length === 2) {
    return digits[romanString.charAt(0)]
    + digits[romanString.charAt(1)];
  }

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
  it('D to 500', function () {
    expect(roman('D')).toBe(500);
  });
  it('M to 1000', function () {
    expect(roman('M')).toBe(1000);
  });
  it('VI to 6', function () {
    expect(roman('VI')).toBe(6);
  });
  it('CX to 110', function () {
    expect(roman('CX')).toBe(110);
  });
  it('XVI to 16', function () {
    expect(roman('XVI')).toBe(16);
  });
});