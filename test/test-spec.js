function fizzBuzz(value) {
  if (value == '3') {
    return 'Fizz';
  }
  if (value == '5') {
    return 'Buzz';
  }
  return 1;
}


describe('Fizz Buzz Session1', function() {
  it('3 to Fizz', function(){
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it('5 to Buzz', function(){
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it('1 to 1', function(){
    expect(fizzBuzz(1)).toBe(1);
  });
});