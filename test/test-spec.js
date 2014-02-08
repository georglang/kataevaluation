describe('GameOfLife', function() {

    it('should create a game with a 2d grid', function() {
        var game = new Game(3);

        expect(game.grid.length).toEqual(3);
        expect(game.grid[0].length).toEqual(3);
    });

    it('should return cell status', function() {
        var game = new Game(3);

        expect(game.get(0, 0)).toBe(0);
    });

    it('should write cell status when setting', function() {
        var game = new Game(3);

        game.set(0, 0, 1);

        expect(game.get(0, 0)).toBe(1);
    });

    it('should return cell status 0 when out of bounds', function() {
        var game = new Game(3);

        expect(game.get(-1, -1)).toBe(0);
        expect(game.get(3, 3)).toBe(0);
    });

    it('can count living neighbors', function() {
        var game = new Game(3);

        game.set(1, 0, 1);
        game.set(1, 1, 1);
        game.set(1, 2, 1);

        expect(game.getLivingNeighbors(1, 1)).toBe(2);
    });

    it('should kill living cell if less than two neighbors', function() {
        var game = new Game(3);

        game.set(1, 1, 1);

        expect(game.shouldLive(1, 1)).toBe(0);

        game.set(2, 2, 1);

        expect(game.shouldLive(1, 1)).toBe(0);
    });

    it('should keep living cell alive if two or three neighbors', function() {
        var game = new Game(3);

        // unit under test
        game.set(1, 1, 1);

        // neighbors
        game.set(0, 1, 1);
        game.set(1, 2, 1);

        expect(game.shouldLive(1, 1)).toBe(1);

        game.set(2, 2, 1);

        expect(game.shouldLive(1, 1)).toBe(1);
    });

    it('should kill living cell if more than three neighbors', function() {
        var game = new Game(3);

        // unit under test
        game.set(1, 1, 1);

        // neighbors
        game.set(0, 0, 1);
        game.set(0, 1, 1);
        game.set(0, 2, 1);
        game.set(1, 0, 1);

        expect(game.shouldLive(1, 1)).toBe(0);

        game.set(1, 2, 1);
        game.set(2, 0, 1);
        game.set(2, 1, 1);
        game.set(2, 2, 1);

        expect(game.shouldLive(1, 1)).toBe(0);
    });

    it('should rise dead cell with exactly three neighbors', function() {
        var game = new Game(3);

        // neighbors
        game.set(0, 0, 1);
        game.set(0, 1, 1);

        expect(game.shouldLive(1, 1)).toBe(0);

        game.set(0, 2, 1);

        expect(game.shouldLive(1, 1)).toBe(1);

        game.set(1, 0, 1);

        expect(game.shouldLive(1, 1)).toBe(0);
    });

    it('should kill living cell if less than two neighbors', function() {
        var game = new Game(3);

        game.set(1, 1, 1);
        game.set(2, 2, 1);

        game.cycle();

        expect(game.shouldLive(1, 1)).toBe(0);

    });
});

var Game = function(size) {
    this.grid = [];

    var createSlice = function() {
        var slice = [];

        for(var i = 0; i < size; i++) {
            slice.push(0);
        }

        return slice;
    }

    for(var i = 0; i < size; i++) {
        this.grid.push(createSlice());
    }
}

Game.prototype.get = function(x, y) {
    if(x < 0 || y < 0 || x >= this.grid.length || y >= this.grid.length) {
        return 0;
    }

    return this.grid[x][y];
}

Game.prototype.set = function(x, y, status) {
    this.grid[x][y] = status;
}

Game.prototype.getLivingNeighbors = function(x, y) {
    return this.get(x - 1, y - 1) + this.get(x, y - 1) + this.get(x + 1, y - 1) +
        this.get(x - 1, y) + this.get(x + 1, y) +
        this.get(x - 1, y + 1) + this.get(x, y + 1) + this.get(x + 1, y + 1);
};

Game.prototype.shouldLive = function(x, y) {
    var isAlive = this.get(x, y);
    var livingNeighbors = this.getLivingNeighbors(x, y);

    var deadCase = function() {
        if(livingNeighbors == 3) {
            return 1;
        }

        return 0;
    };

    var aliveCase = function() {
        if(livingNeighbors == 2 || livingNeighbors == 3) {
            return 1;
        }
        return 0;
    }

    if(isAlive) {
        return aliveCase();
    }

    return deadCase();
};
