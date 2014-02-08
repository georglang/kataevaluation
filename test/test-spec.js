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
  });

  it("should tell us the number of neighbours for a cell", function() {
    var board  = new Board();
    board.addLivingCell(0,0);
    board.addLivingCell(0,1);
    expect(board.getOfNeighbours(0, 0).length ).toBe(1);
  });

  it("should tell us all surrounding cells", function() {
    var board  = new Board();
    var cells = board.getSurroundingCells(0, 0);

    var count = 0;
    for(var i = -1; i<=1; i++) {
      for(var j = -1; j<= 1; j++) {
        if(i === j && j === 0) continue;
        expect(cells[count].getX()).toBe(j);
        expect(cells[count].getY()).toBe(i);
        count++;
      }
    }

  });
});

var Board  = function(){
  this.livingCells = [];

  this.addLivingCell = function(_x, _y) {
    this.livingCells.push(new Cell(_x, _y));
  }

  this.getOfNeighbours = function(_x, _y) {
    return this.livingCells.filter(function(cell) {
      var dx = Math.abs(_x - cell.getX());
      var dy = Math.abs(_y - cell.getY());

      return !(dx === 0 && dy === 0) && dx <= 1 && dy <= 1;
    })
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