/*
 I 1
 V 5
 X 10
 L 50
 C 100
 D 500
 M 1000
*/

var convert = function (arabicNum) {
  var romanNumber = '';
  var startIndex = 0;

  var arr = [
    {"arabic": 1000, 'roman': 'M'},
    {"arabic": 900, 'roman': 'CM'},
    {"arabic": 800, 'roman': 'DCC'},
    {"arabic": 700, 'roman': 'DCC'},
    {"arabic": 600, 'roman': 'DC'},
    {"arabic": 500, 'roman': 'D'},
    {"arabic": 400, 'roman': 'CD'},
    {"arabic": 300, 'roman': 'CCC'},
    {"arabic": 100, 'roman': 'C'},
    {"arabic": 90, 'roman': 'XC'},
    {"arabic": 80, 'roman': 'LXXX'},
    {"arabic": 70, 'roman': 'LXX'},
    {"arabic": 60, 'roman': 'LX'},
    {"arabic": 50, 'roman': 'L'},
    {"arabic": 40, 'roman': 'XL'},
    {"arabic": 10, 'roman': 'X'},
    {"arabic": 9, 'roman': 'IX'},
    {"arabic": 8, 'roman': 'VIII'},
    {"arabic": 7, 'roman': 'VII'},
    {"arabic": 6, 'roman': 'VI'},
    {"arabic": 5, 'roman': 'V'},
    {"arabic": 4, 'roman': 'IV'},
    {"arabic": 1, 'roman': 'I'}
  ];

  while (arabicNum > 0) {
    for (var i = startIndex; i < arr.length; i++) {
      if (arr[i].arabic <= arabicNum) {
        romanNumber += arr[i].roman;
        arabicNum -= arr[i].arabic;
        startIndex = i;
        break;
      }
    }
  }
  return romanNumber;
};

describe('Roman Numberals', function () {
  it('should convert 1 to I', function () {
    expect(convert(1)).toBe('I');
  });
  it('should convert 5 to V', function () {
    expect(convert(5)).toBe('V');
  });
  it('should convert 10 to X', function () {
    expect(convert(10)).toBe('X');
  });
  it('should convert 50 to L', function () {
    expect(convert(50)).toBe('L');
  });
  it('should convert 100 to C', function () {
    expect(convert(100)).toBe('C');
  });
  it('should convert 500 to D', function () {
    expect(convert(500)).toBe('D');
  });
  it('should convert 1000 to M', function () {
    expect(convert(1000)).toBe('M');
  });

  it('should convert 2 to II', function () {
    expect(convert(2)).toBe('II');
  });
  it('should convert 1999 to MCMXCIX', function () {
    expect(convert(1999)).toBe('MCMXCIX');
  });
  it('should convert 969 to CMLXIX', function () {
    expect(convert(969)).toBe('CMLXIX');
  });
});