
describe('game of life', function() {
  it('Coordinate create returns an array', function() {
    expect(new Coordinate.create())
      .toBe([0, 0]);
  });
});
