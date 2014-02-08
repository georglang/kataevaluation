willCellBeAliveInNextStep = function(world, posX, posY) {
  var countNeighbours = 0;
  for(var x = posX-1; x < 3; x++){
    for(var y = posY-1; y < 3; y++){
      if(world[x][y] === 1 && posX != x && posY!= y){
        countNeighbours++;

      }
    }
  }

  if(countNeighbours < 2){
    return false;
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
});