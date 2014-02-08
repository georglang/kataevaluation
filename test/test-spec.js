describe('GameOfLife', function() {

    it('should create Game instance', function() {
        var game = new Game(3, 3);
        expect(typeof game === 'object').toEqual(true);
    });

    it('should create Game grid with passed dimensions', function() {
        var game = new Game(3, 3);
        expect(game.grid.length).toEqual(3);
        expect(game.grid[0].length).toEqual(3);
    });

    it('should return grid cell with specified coordinates', function() {
        var game = new Game(3, 3);
        var cell = game.get(1, 1);
        expect(cell).toEqual(0);
    });

    it('should set the specified value at the passed coordinates', function() {
        var game = new Game(3, 3);
        game.set(1, 1, 1);
        expect(game.get(1, 1)).toEqual(1);
    });

    it('get should return 0 on out of bounds coordinate', function() {
        var game = new Game(3, 3);
        expect(game.get(4, 3)).toEqual(0);
    });

    it('get should return 0 on out of bounds coordinate in negative', function() {
        var game = new Game(3, 3);
        expect(game.get(-1, -5)).toEqual(0);
    });

    it('should return a neighbor count of 0', function() {
        var game = new Game(3, 3);
        expect(game.getNeighborCount(1, 1)).toEqual(0);
    });

    it('should return a neighbor count of 1', function() {
        var game = new Game(3, 3);
        game.set(0, 0, 1);
        expect(game.getNeighborCount(1, 1)).toEqual(1);
    });

    it('should return a neighbor count of 0', function() {
        var game = new Game(3, 3);
        game.set(1, 1, 1);
        expect(game.getNeighborCount(1, 1)).toEqual(0);
    });
});

var Game = function(w, h) {
    this.grid = [];

    for(var x = 0; x < w; x++) {
        this.grid[x] = [];

        for(var y = 0; y < h; y++) {
            this.grid[x][y] = 0;
        }
    }
};

Game.prototype.get = function(x, y) {
    if(x >= this.grid.length || y >= this.grid[0].length
        || x < 0 || y < 0) {
        return 0;
    }

    return this.grid[x][y];
};

Game.prototype.set = function(x, y, val) {
    this.grid[x][y] = val;
};

Game.prototype.getNeighborCount = function(x, y) {
    var c = 0;
    for(var i = x - 1; i <= x + 1; i++) {
        for(var j = y - 1; j <= y + 1; j++) {

            if(i === x && j == y) {
                continue;
            }

            c += this.get(i, j);
        }
    }
    return c;
};
