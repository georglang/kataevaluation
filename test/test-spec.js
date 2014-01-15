var arabicDigits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanDigits = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

var convert = function (arabic) {
  var roman = "";

  for (var i = 0; i < arabicDigits.length; i++) {
    while (arabic >= arabicDigits[i]) {
      roman += romanDigits[i];
      arabic -= arabicDigits[i];
    }
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
  it('XXX', function () {
    expect(convert(30)).toBe('XXX');
  });
  it('IX', function () {
    expect(convert(11)).toBe('XI');
  });
  it('XXXIII', function () {
    expect(convert(33)).toBe('XXXIII');
  });
  it('VIII', function () {
    expect(convert(8)).toBe('VIII');
  });
  it('XXVII', function () {
    expect(convert(27)).toBe('XXVII');
  });
  it('IV', function () {
    expect(convert(4)).toBe('IV');
  });
  it('MMDLXXXIX', function () {
    expect(convert(2589)).toBe('MMDLXXXIX');
  });
  it('MMMMMMMMMDLXXVIII', function () {
    expect(convert(9578)).toBe('MMMMMMMMMDLXXVIII');
  });
});