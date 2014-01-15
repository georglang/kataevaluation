var convert = function (arabic) {
  var roman = "";

  while (arabic >= 10) {
    roman += 'X';
    arabic -= 10;
  }
  while (arabic >= 1) {
    roman += 'I';
    arabic -= 1;
  }
  return roman;
};

describe('Roman Numerals Session 2', function () {
  it('I', function () {
    expect(convert(1)).toBe('I');
  });
  it('II', function () {
    expect(convert(2)).toBe('II');
  });
  it('III', function () {
    expect(convert(3)).toBe('III');
  });
  it('X', function () {
    expect(convert(10)).toBe('X');
  });
  it('XX', function () {
    expect(convert(20)).toBe('XX');
  });
});