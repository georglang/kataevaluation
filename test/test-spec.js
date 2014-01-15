var convert = function (arabic) {
  var map = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    100: 'C',
    500: 'D'
  };


  if (map.hasOwnProperty(arabic)) {
    return map[arabic]
  }
  var steps = [500, 100, 10, 5];
  if (arabic > steps[0]) {
    return convert(steps[0]) + convert(arabic - steps[0]);
  }
  if (arabic > steps[1]) {
    return convert(steps[1]) + convert(arabic - steps[1]);
  }
  if (arabic > steps[2]) {
    return convert(steps[2]) + convert(arabic - steps[2]);
  }
  if (arabic > steps[3]) {
    return convert(steps[3]) + convert(arabic - steps[3]);
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