describe('game of life', function() {
  it('sumOfNeigbours', function() {
    expect(sumOfNeigbours(0,0)).toBe(0);
    expect(sumOfNeigbours(3,2)).toBe(3);
  });
});

var array = [
  [true,false,true,false],
  [false,false,true,true],
  [true,false,true,false],
  [true,false,true,false],
  [false,false,true,true],
  [true,false,true,false],
  [false,false,true,true],
  [true,false,true,false]
];

function sumOfNeigbours (x,y) {
  var sum = 0;
  var lines = [array[x-1],array[x],array[x+1]].filter(function(line){
    return line;
  });
  var values = [];
  lines.forEach(function(line){
    values.push(line[y-1]);
    values.push(line[y]);
    values.push(line[y+1]);
  });
  values = values.filter(function(value){return value});
  values.forEach(function(value){
    sum += value + 0;
  });
  sum -= (array[x][y]) + 0;
  return sum;
};
