function fizzBuzz(value) {
  return "fizzbuzz";
}

describe('fizzBuzzSession2', function() {
  it('3 is fizz and 5 is buzz', function(){
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });
  it('3 is fizz', function(){
    expect(fizzBuzz(21)).toBe("fizz");
  });
});