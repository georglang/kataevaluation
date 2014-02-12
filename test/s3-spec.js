describe('cell class', function() {
  it('should be alive by default', function(){
    cell = new Cell;
    expect(cell.value).toBe(1);
  });

  it('should be initalizeable with a value', function(){
    cell = new Cell(0);
    expect(cell.value).toBe(0);
    cell2 = new Cell(1);
    expect(cell2.value).toBe(1);
  });

  it('should be alive for invalid value', function(){
    cell = new Cell('123123');
    expect(cell.value).toBe(1);
  });

  it('should have default coordinates', function(){
    cell = new Cell();
    expect(cell.x).toBe(0);
    expect(cell.y).toBe(0);
  });

  it('should have definable coordinates', function(){
    cell = new Cell(1,1,2);
    expect(cell.x).toBe(1);
    expect(cell.y).toBe(2);
  });

  it('should reject none ints', function(){
    cell = new Cell(1,null,'foo');
    expect(cell.x).toBe(0);
    expect(cell.y).toBe(0);
  });

  it('should have neighbours', function(){
    cell = new Cell();
    expect(cell.getNeighbours()).toEqual([
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]);
    cell = new Cell(0,0,0,[
      [1,0,0],
      [0,0,1],
      [1,0,0]
    ]);
    expect(cell.getNeighbours()).toEqual([
      [1,0,0],
      [0,0,1],
      [1,0,0]
    ]);
  });

  it('should give sum of alive neighbours', function(){
    cell = new Cell();
    expect(cell.getSumOfAliveNeighbours()).toEqual(0);
    cell = new Cell(0,0,0,[
      [1,0,0],
      [0,0,1],
      [1,0,0]
    ]);
    expect(cell.getSumOfAliveNeighbours()).toEqual(3);
  });
});

var Cell = (function(){
  var neighbours;

  function Cell (value, x, y, inNeighbours) {
    this.value = 1;
    if (value === 0) {
      this.value = value;
    }
    this.x = 0;
    if (typeof x === 'number') {
      this.x = x;
    }
    this.y = 0;
    if (typeof y === 'number') {
      this.y = y;
    }
    if (inNeighbours){
      neighbours = inNeighbours;
    } else {
      neighbours = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ];
    }
  };

  Cell.prototype.getNeighbours = function() {
    return neighbours;
  };

  Cell.prototype.getSumOfAliveNeighbours = function() {
    return neighbours.reduce(function(p,c){
      return p.concat(c);
    }).reduce(function(p,c){
      return p + c;
    },0);
  };

  return Cell;
})();
