describe('Game of Life - Session 5', function() {
  it("countNeighbours(i,j, matrix) returned a number between 0 and 8", function(){
    var matrix = [
       [0,0,0], [0,0,0]
    ];
    expect(countNeighbours(1,2,matrix)).toBeGreaterThan(-1);
    expect(countNeighbours(1,2, matrix)).toBeLessThan(9);
  });
});

var countNeighbours = function (i,j,matrix) {
  return 0;
}