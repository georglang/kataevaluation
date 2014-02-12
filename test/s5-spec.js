describe('game of life', function(){

  it('basic array exists', function(){
    game = new Game;
    expect(game.cells).toBeDefined();
  });
  it('has cells', function(){
    game.addCell(1,1);
    expect(game.cells.length).toBe(1);
    game.addCell(3,4);
    expect(game.cells.length).toBe(2);
    game.removeCell(3,4);
    expect(game.cells.length).toBe(1);
  });

  it('returns all possible neighbours', function(){
    expect(game.getAllPossibleNeighbours(0,0).length).toBe(8);
  });

  it('return all alive neighbours', function(){
    game = new Game;
    game.addCell(0,0);
    game.addCell(0,1);
    expect(game.getAllAliveNeighbours(0,0).length).toBe(1);
  })

});

var Game = (function(){
  function Game (){
    this.cells = [];
  };

  Game.prototype.addCell = function(x,y) {
    this.cells.push([x,y]);
  };

  Game.prototype.removeCell = function(x,y) {
    this.cells = this.cells.filter(function(cell){
      return !(cell[0] === x && cell[1] === y);
    });
  };

  Game.prototype.getAllPossibleNeighbours = function(x,y) {
    return [
      [x-1,y-1],
      [x-1,y],
      [x-1,y+1],
      [x,y-1],
      [x,y+1],
      [x+1,y-1],
      [x+1,y],
      [x+1,y+1]
    ];
  };

  Game.prototype.getAllAliveNeighbours = function (x,y) {
    var neighbours = this.getAllPossibleNeighbours(x,y);
    var cells = this.cells;
    return neighbours.filter(function(neighbour){
      for (var i = 0; i < cells.length; i++) {
        if (neighbour[0] === cells[i][0] && neighbour[1] === cells[i][1]) {
          return true;
        }
      }
    });
  }

  return Game;
})();
