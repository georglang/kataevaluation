describe('game of life', function(){
  it('count', function(){
    expect(count_neighbors(world1, 1, 1)).toBe(1);
  });
  it('count', function(){
    expect(count_neighbors(world2, 1, 1)).toBe(3);
  });

  it('should tell if alive', function() {
    expect(isAlive(world1,1,1)).toBe(true);
    expect(isAlive(world4,1,0)).toBe(true);
  });

  it('should kill alive cell when more than 3 neighbours', function() {
    expect(shouldKill(world1,1,1)).toBe(true);
  });
});

var world1 = [[0,0,0], [0,1,0], [0,0,1]];
var world2 = [[0,0,0], [1,1,0], [0,1,1]];
var world3 = [[1,1,1], [1,1,1], [1,1,1]];
var world4 = [[0,0,0], [1,0,0], [0,1,1]];

function shouldKill (world, x, y) {
  var count = count_neighbors(world, x, y);
  if (count < 2) {
    return true;
  } else {
    return false;
  }
}

function isAlive(world, x, y) {
  return !!world[x][y];
}

function count_neighbors(world, x, y) {
  var count = 0;
  for (var i=x-1; i<=x+1; i++) {
    for (var j=y-1; j<=y+1; j++) {
        if(i !== x || y !== j) {
          count+=world[i][j];
        }
    }
  }
  return count;
}
