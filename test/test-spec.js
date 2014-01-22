function fizzBuzz(value) {
  if (((value % 3) == 0) && ((value % 5) == 0)) {
    return 'FizzBuzz';
  }
  else if ((value % 3) === 0) {
    return 'Fizz';
  }
  else if ((value % 5) == 0) {
    return 'Buzz';
  }
  else {
    return value;
  }
}


describe('Fizz Buzz Session1', function () {
  it('3 to Fizz', function () {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it('5 to Buzz', function () {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it('1 to 1', function () {
    expect(fizzBuzz(1)).toBe(1);
  });
  it('2 to 2', function () {
    expect(fizzBuzz(2)).toBe(2);
  });
  it('6 to Fizz', function () {
    expect(fizzBuzz(6)).toBe('Fizz');
  });
  it('10 to Buzz', function () {
    expect(fizzBuzz(10)).toBe('Buzz');
  });
  it('15 to FizzBuzz', function () {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  it('50 to Buzz', function () {
    expect(fizzBuzz(50)).toBe('Buzz');
  });
  it('99 to Buzz', function () {
    expect(fizzBuzz(99)).toBe('Fizz');
  });
  it('100 to Buzz', function () {
    expect(fizzBuzz(100)).toBe('Buzz');
  });
});