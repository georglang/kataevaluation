function fizz() {
  return 'Fizz';
}
function buzz() {
  return 'Buzz';
}


describe('Fizz Buzz Session1', function() {
  it('3 to Fizz', function(){
    expect(fizz(3)).toBe('Fizz');
  });
  it('5 to Buzz', function(){
    expect(buzz(5)).toBe('Buzz');
  });
  it('1 to 1', function(){
    expect(fizzBuzz(1)).toBe('1');
  });
});