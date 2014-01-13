var convert = function(num) {
  if (num == 1) {
    return 'I';
  }
  if (num == 5) {
    return 'V';
  }
  return undefined;
};

describe('latin to roman number', function() {

  it('0 should be undefined', function() {
    expect(convert(0))
      .toBe(undefined);
  });

  it('1 should be I', function() {
    expect(convert(1))
      .toBe('I');
  });

  it('5 should be V', function() {
    expect(convert(5))
      .toBe('V');
  });

  it('10 should be X', function() {
    expect(convert(10))
      .toBe('X');
  });

});
