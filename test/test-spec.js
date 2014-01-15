var convert = function (arabic) {
  var map = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    100: 'C'
  };


  if (map.hasOwnProperty(arabic)) {
    return map[arabic]
  }
  if (arabic > 100) {
    return convert(100) + convert(arabic - 100);
  }
  if (arabic > 10) {
    return convert(10) + convert(arabic - 10);
  }
  if (arabic > 5) {
    return convert(5) + convert(arabic - 5);
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
  it('XVIII', function () {
    expect(convert(18)).toBe('XVIII');
  });
  it('XIX', function () {
    expect(convert(19)).toBe('XIX');
  });

  it('CXIX', function () {
    expect(convert(119)).toBe('CXIX');
  });
  it('DCXIX', function () {
    expect(convert(619)).toBe('DCXIX');
  });
});