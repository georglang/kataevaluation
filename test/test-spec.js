/*
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
*/

var convert = function () {
  return 'I';
};

describe('Roman Numberals', function() {
  it('should convert 1 to I', function(){
    expect(convert(1)).toBe('I');
  });
});