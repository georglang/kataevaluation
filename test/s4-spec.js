describe('game of life', function(){
  it('count', function(){
    expect(count_neighbors(world1, 1, 1)).toBe(1);
  });
  it('count', function(){
    expect(count_neighbors(world2, 1, 1)).toBe(3);
  });

  it('should tell if alive', function() {
    expect(isAlive(world1,1,1)).toBe(true);
    expect(isAlive(world4,1,0)).toBe(true);
  });

  it('should kill alive cell when more than 3 neighbours', function() {
    expect(shouldKill(world1,1,1)).toBe(true);
  });
});
