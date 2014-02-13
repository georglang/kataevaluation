describe('Game of Life', function() {
  it('count cell neighbors', function() {
      expect(countCellNeighbors()).toBe(1);
  });
  it('has a grid', function () {
    var grid = new Grid();
    expect(grid).toBeDefined();
  });

  it('has a size', function (){
    var grid = new Grid(5);
    expect(grid.size).toBeDefined();
  });

  it('has a size passed to constructor', function (){
      var grid = new Grid(5);
      expect(grid.size).toBe(5);
    });

  it('has correct values', function (){
    var grid = new Grid(3),
        expectedGrid = [[0,0,0],
                       [0,0,0],
                       [0,0,0]];
    var matrix = grid.toArray();
    expect(matrix.length > 0).toBe(true);
    expect(matrix).toEqual(expectedGrid);
  });
});

function  countCellNeighbors()
{
  return 1;
}

var Grid = function (size) {
  this.size = size;

  var matrix = new Array(size);
  for (var x = 0; x < size; x++)
  {
    matrix[x] = new Array(size);
    for (var y = 0; y < size; y++)
    {
      matrix[x][y] = 0;
    }
  }

  this.toArray = function() {
    return matrix;
  }
};
