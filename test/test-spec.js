var convert = function (arabic) {
  var map = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    10: 'X'
  };


  if (map.hasOwnProperty(arabic)) {
    return map[arabic]
  }
  if (arabic > 10) {
    return 'X' + convert(arabic - 10);
  }
  return 'XX';
};

describe('roman numerals session 3', function () {
  it('I', function () {
    expect(convert(1)).toBe('I');
  });
  it('II', function () {
    expect(convert(2)).toBe('II');
  });
  it('III', function () {
    expect(convert(3)).toBe('III');
  });
  it('IV', function () {
    expect(convert(4)).toBe('IV');
  });
  it('X', function () {
    expect(convert(10)).toBe('X');
  });
  it('XX', function () {
    expect(convert(20)).toBe('XX');
  });
  it('XXIII', function () {
    expect(convert(23)).toBe('XXIII');
  });
  it('XIII', function () {
    expect(convert(13)).toBe('XIII');
  });
});