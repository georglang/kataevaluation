function fizz() {
  return 'Fizz';
}


describe('Fizz Buzz Session1', function() {
  it('3 to Fizz', function(){
    expect(fizz(3)).toBe('Fizz');
  });
  it('5 to Buzz', function(){
    expect(buzz(5)).toBe('Buzz');
  });
});