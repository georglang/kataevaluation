var isCellLivingInNextStep = function(world, x, y) {
  var upperLeft     = world[x - 1][y - 1];
  var upper         = world[x    ][y - 1];
  var upperRight    = world[x + 1][y - 1];
  var left          = world[x - 1][y    ];
  var right         = world[x + 1][y    ];
  var lowerLeft     = world[x - 1][y + 1];
  var lower         = world[x    ][y + 1];
  var lowerRight    = world[x + 1][y + 1];

  var numberOfNeighbors =   upperLeft +
                            upper +
                            upperRight +
                            left +
                            right +
                            lowerLeft +
                            lower +
                            lowerRight;

  var rules = {
    0: 0,
    1: 0,
    2: 1,
    3: 1,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0
  };

  return rules[numberOfNeighbors];
}

describe('Game Of Life - Session 1', function() {
  it('Living cell with less than two live neighbors dies', function(){
    var world = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];

    expect(isCellLivingInNextStep(world, 1, 1)).toBe(0);
  });

  it('Living cell with two or three live neighbors lives', function(){
    var world = [
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];

    expect(isCellLivingInNextStep(world, 1, 1)).toBe(1);
  });
});