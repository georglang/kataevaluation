var Game = function () {
    var length = 3;
    var height = 3;
    this.grid = [[0,0,0],[0,1,0],[0,0,0]];
}

Game.prototype.getGrid = function () {
  return this.grid;
}

describe('Game of life', function() {

    it('should create gaming grid in passed dimensions', function() {
        var game = new Game(3, 3);

        expect(game.getGrid().length).toBe(3);
    });



});

