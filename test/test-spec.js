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
