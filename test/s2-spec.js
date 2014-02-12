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
