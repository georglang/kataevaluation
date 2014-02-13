Coordinate = function() {

};

Coordinate.prototype.create = function() {
  return [0,0];
};

describe('game of life', function() {
  it('Coordinate create returns an array', function() {
    expect((new Coordinate).create())
      .toEqual([0, 0]);
  });
});

World = function() {};
World.prototype.create = function() {
  return [
   [0, 0],
   [1, 1],
   [4, 10]
 ];
};

describe('world', function() {
  it('create', function() {
     expect((new World).create())
       .toEqual([
         [0, 0],
         [1, 1],
         [4, 10]
       ]);
  });
});

function isAliveCell(world, cell) {
  var alive = false;
  for (var i = 0; i < world.length; i++) {
    if (world[i][0] == cell[0] &&
        world[i][1] == cell[1]) {
      alive = true;
      break;
    }
  }
  return alive;
}

describe('isAliveCell', function() {
  it('should return true if is alive', function() {
    var world = (new World()).create();
    expect(isAliveCell(world, [1, 1])).toBe(true);
  });

  it('should return false if is dead', function() {
    var world = (new World()).create();
    expect(isAliveCell(world, [-1, -1])).toBe(false);
  });

  it('should return false if is dead', function() {
    var world = (new World()).create();
    expect(isAliveCell(world, [-1, 0])).toBe(false);
  });

  it('should return false if is dead', function() {
    var world = (new World()).create();
    expect(isAliveCell(world, [-1, 1])).toBe(false);
  });

  it('should return false if is dead', function() {
    var world = (new World()).create();
    expect(isAliveCell(world, [0, -1])).toBe(false);
  });

  it('should return false if is dead', function() {
    var world = (new World()).create();
    expect(isAliveCell(world, [0, 1])).toBe(false);
  });

  it('should return false if is dead', function() {
    var world = (new World()).create();
    expect(isAliveCell(world, [1, -1])).toBe(false);
  });


  it('should return false if is dead', function() {
    var world = (new World()).create();
    expect(isAliveCell(world, [1, 0])).toBe(false);
  });
});

function shouldDie(world, x, y) {
  var neighbours = getNeighbours(x, y);
  var cnt = 0;

  for (var i=0; i<neighbours.length; i++) {
    if (isAliveCell(world, neighbours[i])) {
      cnt++;
    }
  }

  if (cnt < 2) {
    return true;
  }
}

describe('schouldDie', function() {
  xit('dies when there are less than two alive neighbours', function() {
    var world = (new World).create();
    expect(shouldDie(world, 0, 0)).toBe(true);
  });
});

function getNeighbours(x, y) {
  return [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
}

describe('getNeighbours', function() {
  xit('returns correct neighbours', function() {
    expect(getNeighbours(0, 3))
      .toEqual([
          [-1, -1],
          [-1, 0],
          [-1, 1],
          [0, -1],
          [0, 1],
          [1, -1],
          [1, 0],
          [1, 1]
        ]);
  });
});
