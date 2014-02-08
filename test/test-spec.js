var Cell = function(isAlive) {
    this.isAlive = isAlive || false;
};

Cell.prototype.isAlive = function() {
    return this.isAlive;
};

Cell.prototype.live = function() {
    this.isAlive = true;
};

Cell.prototype.die = function() {
    this.isAlive = false;
};

var Grid = function() {
    this.grid = [
        [new Cell(), new Cell(), new Cell()],
        [new Cell(), new Cell(), new Cell()],
        [new Cell(), new Cell(), new Cell()]
    ];
};

Grid.prototype.get = function(x, y) {
    return this.grid[x][y];
};

Grid.prototype.tick = function() {
    var grid = [];

    for(var x = 0; x < this.grid.length; x++) {
        for(var y = 0; y < this.grid[x].length; y++) {
            var currentCell = this.get(x, y);
            var neighbours = this.getNeighbours(x, y);
            var countLivingNeighbours = 0;

            for(var i = 0; i < neighbours.length; i++) {
                if(neighbours[i].isLiving()) {
                    countLivingNeighbours++;
                }
            }

            var cellForNewGrid = new Cell(currentCell.isLiving());

            if(countLivingNeighbours < 2) {
                cellForNewGrid.die();
            }

            grid[x][y] = cellForNewGrid;
        }
    }

    this.grid = grid;
};

Grid.prototype.getNeighbours = function(x, y) {
    var neighbours = [];

    if(x > 0 && y > 0) {
        neighbours.push(this.get(x - 1, y - 1));
    }
    if(y > 0) {
        neighbours.push(this.get(x, y - 1));
    }

    if(x < this.grid.length - 1 && y > 0) {
        neighbours.push(this.get(x + 1, y - 1));
    }

    if(x < this.grid.length - 1) {
        neighbours.push(this.get(x + 1, y));
    }

    if(x > 0 && y < this.grid[x].length - 1) {
        neighbours.push(this.get(x - 1, y + 1));
    }

    if(y < this.grid[x].length - 1) {
        neighbours.push(this.get(x, y + 1));
    }
    if(x < this.grid.length && y < this.grid[x].length - 1) {
        neighbours.push(this.get(x + 1, y + 1));
    }

    return neighbours;

}

describe('GameOfLife', function() {

    var grid;

    beforeEach(function() {
        grid = new Grid();
    });

    it('should kill living cell with less than to neighbours', function() {
        var cell = grid.get(1, 1);
        cell.live();

        var cell2 = grid.get(2, 2);
        cell2.live();

        grid.tick();

        expect(grid.get(1, 1).isLiving()).toBeFalsy();
        expect(grid.get(2, 2).isLiving()).toBeFalsy();
    });

});
