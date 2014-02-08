describe("board", function(){
  it("should be able to add a cell", function() {
    var board  = new Board();
    board.addLivingell(0,0);
    expect(board.livingCells.length).toBe(1);
  })
});