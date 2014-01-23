function fizzBuzz(value) {
  if(!(value % 3) && !(value % 5)) {
    return "fizzbuzz";
  }
  else if(!(value % 3)) {
    return "fizz";
  }
  else if(!(value % 5)) {
    return "buzz";
  }
  return value.toString();
}

describe('fizzBuzzSession2', function() {
  it('3 is fizz and 5 is buzz', function(){
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });
  it('3 is fizz', function(){
    expect(fizzBuzz(21)).toBe("fizz");
  });
  it('5 is buzz', function(){
    expect(fizzBuzz(20)).toBe("buzz");
  });
  it('7 is nothing', function(){
    expect(fizzBuzz(7)).toBe("7");
  });
});