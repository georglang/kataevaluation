describe('game of life', function() {
  it('sumOfNeigbours', function() {
    expect(sumOfNeigbours(0,0)).toBe(0);
    expect(sumOfNeigbours(3,2)).toBe(3);
  });
});
