describe('Game of Life - Session 2', function() {
  it('Living cell with less than two neighbors dies', function(){
    var world = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];

    expect(willCellBeAliveInNextStep(world, 1, 1)).toBe(false);
  });
});