var convert = function(num) {
  var nums = {
    10: 'X',
    9: 'IX',
    4: 'IV',
    5: 'V',
    1: 'I',
    50: 'L',
    100: 'C',
    500: 'D'
  };
  if (nums.hasOwnProperty(num)) {
    return nums[num];
  }
  for (var i = 1; i <= 3; i++) {
    if (nums.hasOwnProperty(num - i)) {
      return convert(num - i) + convert(i);
    }
  }
  return undefined;
};

describe('latin to roman number', function() {

  it('0 should be undefined', function() {
    expect(convert(0))
      .toBe(undefined);
  });

  [
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M']
  ].forEach(function(arr) {
    var latin = arr[0];
    var roman = arr[1];

    it(latin + ' should be ' + roman, function() {
      expect(convert(latin))
        .toBe(roman);
    });
  });

  describe('multi character numbers', function() {
    describe('post fix', function() {
      it('2 => II', function() {
        expect(convert(2))
          .toBe('II');
      });
      it('3 => III', function() {
        expect(convert(3))
          .toBe('III');
      });
      it('6 => VI', function() {
        expect(convert(6))
          .toBe('VI');
      });
      it('8 => VIII', function() {
        expect(convert(8))
          .toBe('VIII');
      });
    });

    describe('prefix', function() {
      it('9 => IX', function() {
        expect(convert(9))
          .toBe('IX');
      });
      it('4 => IV', function() {
        expect(convert(4))
          .toBe('IV');
      });
    });
  });

});
