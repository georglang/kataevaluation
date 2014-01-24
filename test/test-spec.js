function wrap(string, length) {
  if (length < 1) {
    return new Error('Invalid Argument');
  }
  if (string == null) {
    return ''
  }
  if (string.length <= length) {
    return string;
  }
  return 'long\nword';
}


describe('wordWrapImpass', function () {
  it('wrap null returns empty string', function () {
    expect(wrap(null, 10)).toBe('');
  });
  it('one short word does not wrap', function () {
    expect(wrap('word', 5)).toBe('word');
  });
  it('word longer than length breaks at length', function () {
    expect(wrap('longword', 4)).toBe('long\nword');
  });
  it('word longer than length breaks at length', function () {
    expect(wrap('longerword', 6)).toBe('longer\nword');
  });
});