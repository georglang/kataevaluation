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
