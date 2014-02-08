describe("board", function(){
  it("should be able to add a cell", function() {
    var board  = new Board();
    board.addLivingCell(0,0);
    expect(board.livingCells.length).toBe(1);
  })

  it("should render the correct cell coordinates", function() {
    var board  = new Board();
    board.addLivingCell(0,0);
    expect(board.livingCells[0].getX()).toBe(0);
  })

  it("should render the correct cell coordinates", function() {
    var board  = new Board();
    board.addLivingCell(0,0);
    expect(board.livingCells[0].getY()).toBe(0);
  })

  it("should tell us the number of neighbours for a cell", function() {
    var board  = new Board();
    board.addLivingCell(0,0);
    board.addLivingCell(0,1);
    expect(board.getOfNeighbours(0, 0).length ).toBe(1);
  })
});

var Board  = function(){
  this.livingCells = [];

  this.addLivingCell = function(_x, _y) {
    this.livingCells.push(new Cell(_x, _y));
  }

  this.getNumberOfNeighbours(_x, _y) {
    for (var c = 0; c < this.livingCells.length; ++c) {
      var cell = this.livingCells[c];

      if (_x == cell.getX() && _y == cell.)
    }
  }
};

var Cell = function(x, y) {
  this.x = x;
  this.y = y;

  this.getX = function () {
    return this.x;
  };

  this.getY = function () {
    return this.y;
  };
}