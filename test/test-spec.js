var Game = function(length, height) {

    this.grid = [];

    for (var x = 0; x < length; x += 1) {
        this.grid[x] = [];
        for (var y = 0; y < height; y +=1 ) {
            this.grid[x][y] = 0;
        }
    }
}

Game.prototype.getGrid = function() {
    return this.grid;
}

Game.prototype.countActiveNeighbours = function(x, y) {
    var count = 0;
    for (var i = x - 1; i <= x + 1; i++) {
        if (x > 0 && x < this.grid.length) {
            for (var j = y - 1; i <= y + 1; i++) {
                if (y > 0 && y < this.grid[0].length) {
                    count += this.grid[i][j];
                }
            }
        }
    }
    console.log(count);
  return count - this.grid[x][y];
}

Game.prototype.rise = function(x,y) {
  if (this.grid.length > x && this.grid[x].length > y) {
      this.grid[x][y] = 1;
  }
}

Game.prototype.decideIfDeadOrAlive = function(x,y) {
    var c = this.countActiveNeighbours(x,y);

    if (c < 2) {
        return 0;
    } else if(c <= 3) {
        return 1;
    } else {
        return 0;
    }
}

Game.prototype.tick = function() {
    for (var x = 0; x < this.grid.length; x += 1) {
        for (var y = 0; y < this.grid[0].length; y +=1 ) {
            this.grid[x][y] = this.decideIfDeadOrAlive(x,y);
        }
    }
}

describe('Game of life', function() {

    it('should create gaming grid in passed dimensions', function() {
        var game = new Game(3, 3);

        expect(game.getGrid().length).toBe(3);
    });

    it('should count the number of active neighbours of cell x,y', function() {
        var game = new Game(3, 3);
        var x = 1;
        var y = 1;
        expect(game.countActiveNeighbours(x, y)).toBe(0);
    });

    it('should kill living cell when less than two neighbours are active', function() {
        var game = new Game(3, 3);

        var x = 1;
        var y = 1;

        game.rise(x, y);

        var shouldLive = game.decideIfDeadOrAlive(x, y);

        expect(shouldLive).toBeFalsy();
    });

    it('should rise a dead cell when exactly three neighbours are active', function() {
        var game = new Game(3, 3);

        game.rise(0, 0);
        game.rise(0, 1);
        game.rise(0, 2);

        var shouldLive = game.decideIfDeadOrAlive(1, 1);

        expect(shouldLive).toBeTruthy();
    });

    it('should kill living cell when more than three neighbours are active', function() {
        var game = new Game(3, 3);

        game.rise(0, 0);
        game.rise(0, 1);
        game.rise(0, 2);
        game.rise(1, 0);

        var shouldLive = game.decideIfDeadOrAlive(1, 1);

        expect(shouldLive).toEqual(0);
    });

    it('should live with two or three neighbours', function() {
        var game = new Game(3, 3);

        game.rise(0, 0);
        game.rise(0, 1);

        var shouldLive = game.decideIfDeadOrAlive(1, 1);

        expect(shouldLive).toEqual(1);

        game.rise(0, 0);
        game.rise(0, 1);
        game.rise(0, 2);

        var shouldLive = game.decideIfDeadOrAlive(1, 1);

        expect(shouldLive).toEqual(1);
    });

    it('should evaluate a game tick', function() {
        var game = new Game(3, 3);

        game.rise(0, 0);
        game.rise(0, 1);
        game.rise(0, 2);

        game.tick();

        expect(game.getGrid()[1][1]).toEqual(1);
    });

});

