function willAliveCellLive(map) {
  var cellNeighbourCount = getCellNeighbourCount(map);
  if (cellNeighbourCount < 2 || cellNeighbourCount > 3) {
    return false;
  }
  return true;
}

describe('willAliveCellLive', function() {
  it('living cell should die when less than two neighbours', function() {
    var map = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];
    expect(willAliveCellLive(map)).toBe(false);
  });

  it('living cell should die when more than three neighbours', function() {
    var map = [
      [0, 0, 1],
      [1, 1, 0],
      [0, 1, 1]
    ];
    expect(willAliveCellLive(map)).toBe(false);
  });

  it('living cell should live whe two neighbours', function() {
    var map = [
      [0, 0, 1],
      [1, 1, 0],
      [0, 0, 0]
    ];
    expect(willAliveCellLive(map))
      .toBe(true);
  });

  it('living cell should live whe three neighbours', function() {
    var map = [
      [0, 0, 1],
      [1, 1, 0],
      [0, 0, 1]
    ];
    expect(willAliveCellLive(map))
      .toBe(true);
  });

});

var world = {
  create: function() {
   this.liveCells = [[0,0],[0,1],[0,3],[1,2]];
  },
  liveCells: []
};

describe('world', function() {
  it('should be an empty world', function() {
    expect(world.liveCells).toEqual([]);
  });

  it('init', function() {
    world.create();

    expect(world.liveCells)
      .toEqual([[0,0],[0,1],[0,3],[1,2]]);
  });
});

function getCellNeighbourCount(map) {
  var cnt = map[0][0] + map[0][1] + map[0][2] +
            map[1][0]             + map[1][2] +
            map[2][0] + map[2][1] + map[2][2];
  return cnt;
}

describe('getCellNeighbourCount', function() {
  it('should return number of neighbours', function() {
    var map = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];

    expect(getCellNeighbourCount(map)).toBe(1);
  });

  it('should return 2 for given liveCells', function() {
    var map = [
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];
    expect(getCellNeighbourCount(map))
      .toBe(2);
  });

  it('should return 3 for given liveCells with dead cell', function() {
    var map = [
      [1, 1, 0],
      [0, 0, 0],
      [0, 0, 1]
    ];
    expect(getCellNeighbourCount(map))
      .toBe(3);
  });
});
