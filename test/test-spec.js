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
    var topLeftNeighbour = this.grid[x - 1][y - 1];
    var topNeighbour = this.grid[x][y - 1];
    var topRightNeighbour = this.grid[x + 1][y - 1];

    var leftNeighbour = this.grid[x][y - 1];
    var rightNeighbour = this.grid[x][y + 1];

    var bottomLeftNeighbour = this.grid[x - 1][y + 1];
    var bottomNeighbour = this.grid[x][y + 1];
    var bottomRightNeighbour = this.grid[x + 1][y + 1];

    var neighbours = [
        topLeftNeighbour, topNeighbour, topRightNeighbour,
        leftNeighbour, rightNeighbour,
        bottomLeftNeighbour, bottomNeighbour, bottomRightNeighbour
    ];

    var activeCount = 0;

    for(var i = 0; i < neighbours.length; i += 1) {
        if(neighbours[i] === 1) {
            activeCount += 1;
        }
    }

    return activeCount;
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

});

