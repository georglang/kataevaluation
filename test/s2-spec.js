describe('sumOfNeighbours', function() {
  it('should give the sum of all neighbours', function(){
    expect(sumOfNeighbours(deadArray)).toBe(3);
  });
});

describe('willAliveCellLive', function() {
  it('should return false for dying cell', function(){
    expect(willAliveCellLive(array)).toBe(true);
  });
});

describe('willDeadCellLive', function() {
  it('should return false for dying cell', function(){
    expect(willDeadCellLive(deadArray)).toBe(true);
  });
});

describe('getValueFromCoordinates', function() {
  it('should return value of cell or 0 when undefined ', function(){
    expect(getValueFromCoordinates(finiteBoard,0,0)).toBe(1);
    expect(getValueFromCoordinates(finiteBoard,-1,0)).toBe(0);
    expect(getValueFromCoordinates(finiteBoard,-1,-1)).toBe(0);
  });
});

describe('getCellFromCoordinates', function() {
  it('should return 3x3 array for coordinates', function(){
    expect(getCellFromCoordinates(finiteBoard,0,0)).toEqual([
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ]);
  });
});

var array = [
  [1,1,1],
  [0,1,0],
  [0,0,1]
];

var deadArray = [
  [1,1,0],
  [0,0,0],
  [0,0,1]
];

var finiteBoard = [
  [1,0,0,1,0,1],
  [0,0,1,0,0,1],
  [1,0,0,0,1,0],
  [0,1,0,1,0,1],
  [1,0,0,0,1,0],
  [1,0,0,1,1,0]
];

function sumOfNeighbours (array) {
  return array
    .reduce(function(p, c) {
      return p.concat(c);
    })
    .reduce(function (previous, current) {
      return previous+current;
    }) - array[1][1];
};

function willAliveCellLive (array) {
  var aliveForNeighbours = [,,,true,true,,,,]
  return aliveForNeighbours[sumOfNeighbours(array)] || false;
};

function willDeadCellLive (array) {
  return sumOfNeighbours(array) === 3;
};

function getValueFromCoordinates (array, x, y) {
  if (array[x]) {
    return array[x][y] || 0;
  } else {
    return 0;
  }
};

function getCellFromCoordinates (array,x,y) {
  var g = getValueFromCoordinates;
  return [
    [g(array,x-1,y-1),g(array,x-1,y),g(array,x-1,y+1)],
    [g(array,x,y-1),g(array,x,y),g(array,x,y+1)],
    [g(array,x+1,y-1),g(array,x+1,y),g(array,x+1,y+1)]
  ];
};
