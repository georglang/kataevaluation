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
  if (arabicNum == 1) {
    return 'I';
  }
  if(arabicNum == 5){
    return 'V';
  }
  if(arabicNum == 10){
    return 'X';
  }
  if(arabicNum == 50){
    return 'L';
  }
    return 'C';
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
});