var convert = function (arabic) {
  var map = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV'
  };
  return map[arabic]
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
});