Coordinate = function() {

};

Coordinate.prototype.create = function() {
  return [0,0];
}

describe('game of life', function() {
  it('Coordinate create returns an array', function() {
    expect((new Coordinate).create())
      .toEqual([0, 0]);
  });
});

World = function() {};
World.prototype.create = function() {
  return [
   [0, 3],
   [2, 1],
   [4, 10]
 ];
};



describe('world', function() {
  it('create', function() {
     expect((new World).create())
       .toEqual([
         [0, 3],
         [2, 1],
         [4, 10]
       ]);
  });
});
