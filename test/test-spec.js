willCellBeAliveInNextStep = function(world, posX, posY) {
  var cellValue = world[posY][posX];
  var countNeighbours = 0;
  for(var x = posX-1; x < posX+2; x++){
    for(var y = posY-1; y < posY+2; y++){
      if(world[y][x] === 1 && (posX != x || posY!= y)){
        countNeighbours++;

      }
    }
  }

  if (cellValue == 1) {
    if(countNeighbours < 2){
      return false;
    }
    if(countNeighbours > 3){
      return false;
    }

    return true;
  }
  else {
    return (countNeighbours == 3);
  }
}



describe('Game of Life - Session 2', function() {
  it('Living cell with less than two neighbors dies', function(){
    var world = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];

    expect(willCellBeAliveInNextStep(world, 1, 1)).toBe(false);

  });

  it('Living cell with two or three neighbors lives', function(){
    var world = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 1]
    ];

    expect(willCellBeAliveInNextStep(world, 1, 1)).toBe(true);

  });

  it('Living cell with two or three neighbors lives (world larger than 3x3)', function(){
    var world = [
      [0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];

    expect(willCellBeAliveInNextStep(world, 4, 1)).toBe(true);

  });

  it('Living cell with more than three neighbors dies', function(){
    var world = [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 1]
    ];

    expect(willCellBeAliveInNextStep(world, 1, 1)).toBe(false);

  })

  it('Dead cell with less than three live neighbours stays dead', function(){
    var world = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 1, 1]
    ];

    expect(willCellBeAliveInNextStep(world, 1, 1)).toBe(false);

  });
});