var board = [[false, false, false], [false, true, false], [false, false, true]];
var boardNextIteration = [[false, false, false], [false, false, false], [false, false, true]];

function getNextIteration() {
  return [[false, false, false], [false, false, false], [false, false, true]];
}

function getNeighbours(xorigin,yorigin) {
  var neighbours = [];
  for (x=xorigin-1; x<=xorigin+1;x++) {
    for (y=yorigin-1; y<=yorigin+1;y++) {
      if (!neighbours[y]) {
        neighbours[y] = [];
      }
      neighbours[y][x]=board[y][x];
    }
  }
  neighbours[xorigin][yorigin]=null;
 return neighbours;
}

function getAliveNeighbours(neighbours) {
  var alive = 0;
  neighbours.forEach(function(y) {
    y.forEach(function(x) {
      if (x === true) {
        alive++;
      }
    });
  });
  return alive;
}

describe('getNextIteration', function() {
  it('should be a function', function(){
    expect(typeof getNextIteration).toBe('function');
  });

  it('expects to return an array', function() {
    expect(getNextIteration())
      .toEqual(boardNextIteration);
  });

  it('expects array to be correct next iteration', function() {
    expect(getNextIteration())
      .toEqual([[false, false, false], [false, false, false], [false, false, true]]);
  });
});


describe('getNeighbours', function() {
  it('should be a function', function(){
    expect(typeof getNeighbours).toBe('function');
  });

  it('expects array to be correct neighbours', function() {
    expect(getNeighbours(1, 1))
      .toEqual([[false, false, false], [false, null, false], [false, false, true]]);
  });
});

describe('getAliveNeighbours', function() {
  it('return number of alive cells', function() {
    var neighbours = getNeighbours(1,1);
    expect(getAliveNeighbours(neighbours)).toEqual(1);
  });
});
