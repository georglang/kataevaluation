var convert = function(num) {
  if (num == 1) {
    return 'I';
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

});
