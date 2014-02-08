describe('Game of Life - Session 5', function() {
  it("countNeighbours(i,j, matrix) returned a number between 0 and 8", function(){
    var matrix = [
       [0,0,0],
       [0,0,0]
    ];
    expect(countNeighbours(1,2,matrix)).toBeGreaterThan(-1);
    expect(countNeighbours(1,2, matrix)).toBeLessThan(9);
  });

  it("getCellValue(i,j, matrix) returns 0 for out-of-bounds indices", function(){
    var matrix = [
      [0,0,0],
      [0,0,0]
    ];
    expect(getCellValue(2,3,matrix)).toBe(0);
  });

  it("getCellValue(i,j, matrix) returns 1 for indices of living cells", function(){
    var matrix = [
      [0,0,0],
      [0,0,1]
    ];
    expect(getCellValue(1,2,matrix)).toBe(1);
  });
});

var countNeighbours = function (i,j,matrix) {
  return 0;
  /*
  return  getCellValue(matrix, i - 1, j - 1) +
      matrix[i - 1][j    ] +
      matrix[i - 1][j + 1] +
      matrix[i    ][j - 1] +
      matrix[i    ][j + 1] +
      matrix[i + 1][j - 1] +
      matrix[i + 1][j    ] +
      matrix[i + 1][j + 1];
      */
}

var getCellValue = function (i, j, matrix) {
  if (!matrix[i] || !matrix[i][j]) {
    return 0;
  }
}