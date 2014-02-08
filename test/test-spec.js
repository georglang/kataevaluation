var isCellLivingInNextStep = function(world, x, y) {
  return false;
}

describe('Game Of Life - Session 1', function() {
  it('Living cell with less than two live neighbors dies', function(){
    var world = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];

    expect(isCellLivingInNextStep(world, 1, 1)).toBe(false);
  });

  it('Living cell with two or three live neighbors lives', function(){
    var world = [
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];

    expect(isCellLivingInNextStep(world, 1, 1)).toBe(true);
  });
});