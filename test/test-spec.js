describe('Game of Life - Session 5', function() {
  it("countNeighbours(i,j, matrix) returned a number between 0 and 8", function(){
    expect(countNeighbours()).toBeGreaterThan(-1);
    expect(countNeighbours()).toBeLessThan(9);
  });
});

var countNeighbours = function () {
  return 0;
}