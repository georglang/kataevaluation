Coordinate = function() {

};

Coordinate.prototype.create = function() {
  return [0,0];
}

describe('game of life', function() {
  it('Coordinate create returns an array', function() {
    expect((new Coordinate).create())
      .toEqual([0, 0]);
  });
});

World = function() {};
World.prototype.create = function() {
  return [
   [0, 3],
   [2, 1],
   [4, 10]
 ];
};

describe('world', function() {
  it('create', function() {
     expect((new World).create())
       .toEqual([
         [0, 3],
         [2, 1],
         [4, 10]
       ]);
  });
});

function getNeighbours(x, y) {
  return [
    [-1, 2],
    [-1, 3],
    [-1, 4],
    [0, 2],
    [0, 4],
    [1, 2],
    [1, 3],
    [1, 4]
  ];
}

describe('schouldDie', function() {
  it('dies when there are less than two alive neighbours', function() {
    expect(shouldDie(x, y)).toBe(true);
  });
});

describe('getNeighbours', function() {
  it('returns correct neighbours', function() {
    expect(getNeighbours(0, 3))
      .toEqual([
        [-1, 2],
        [-1, 3],
        [-1, 4],
        [0, 2],
        [0, 4],
        [1, 2],
        [1, 3],
        [1, 4]
      ]);
  });
});
