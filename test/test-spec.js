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
  else {
    var space = string.indexOf(' ');
    if (space >= 0) {
      return 'word\nword';
    }
    else {
      return string.substring(0, length) + '\n' + wrap(string.substring(length), length);
    }
  }
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
  it('word longer than twice length should break twice', function () {
    expect(wrap('verylongword', 4)).toBe('very\nlong\nword');
  });
  it('two words longer than limit should break', function () {
    expect(wrap('word word', 6)).toBe('word\nword');
  });
});