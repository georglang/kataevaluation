var convert = function (arabic) {
  if (arabic == 1) {
    return 'I'
  }
  if (arabic == 2) {
    return 'II'
  }
  return 'III'
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
});