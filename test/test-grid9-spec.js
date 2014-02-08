var Grid;

Grid = function () {
  return [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0]
        ];
};

var getRowSum = function(row) {
  return row.reduce(function(previous, current) {
    return previous+current;
  });
};

var sumUpRows = function(rows) {
  var sum = 0;
  rows.forEach(function(row) {
    sum += getRowSum(row);
  });
  return sum;
};

var centerCellLives = function(grid) {
  var sum = sumUpRows(grid);
  var answerKey = [1,2];
  return !!answerKey.filter(function(i) { return i === sum }).length;
};

describe('getRowSum', function() {
  var grid = new Grid();
  var firstSum = getRowSum(grid[0]);
  it('should return the sum of an empty row', function(){
    expect(firstSum).toEqual(0);
  });
  var secondSum = getRowSum(grid[1]);
  it('should return the sum of an non-empty row', function(){
    expect(secondSum).toEqual(1);
  });
});