function wrap(string, length) {
  return '';
}


describe('wordWrapImpass', function() {
  it('wrap null returns empty string', function(){
    expect(wrap(null, 10)).toBe('');
  });
  it('one short word does not wrap', function(){
    expect(wrap('word', 5)).toBe('word');
  });
});