/*function getMap(dimension) {
  var map = [];
  for (var i = 0; i<dimension; i++) {
    map[i] = [];
    for (var ())
  }
  map.forEach(function(innerMap, x) {
    console.log(x);
    //map[x] = new Array(dimension);
  });
  return map;
}
*/


function updateMap(map, x, y) {

  // cnt interessiert mich nicht, rechne ich selbst

  var newCount = countNeighbours(map, x, y);


  if (newCount < 2 || newCount > 3) {

    map[x][y] = 0;
  }

  return map;
}


function countNeighbours(map, x, y) {

  var cnt = 0;

  cnt = map[x-1][y-1] + map[x+0][y-1] + map[x+1][y-1]
      + map[x-1][y+0] +               + map[x+1][y+0]
      + map[x-1][y+1] + map[x-0][y+1] + map[x+1][y+1];

  return cnt;
}

describe('countNeighbours for map', function() {
  it('should return 0', function(){

    var map = [
       [0, 0, 0],
       [0, 0, 0],
       [0, 0, 0]

    ];
    expect(countNeighbours(map, 1, 1)).toBe(0);
  });

  it('should return 1 given coordinate is 1, 1', function() {
    var map = [
       [1, 0, 0],
       [0, 1, 0],
       [0, 0, 0]
    ];
    expect(countNeighbours(map, 1, 1)).toBe(1);
  });

  it('should return 2 given coordinate is 1, 1', function() {
    var map = [
       [1, 0, 1],
       [0, 1, 0],
       [0, 0, 0]
    ];
    expect(countNeighbours(map, 1, 1)).toBe(2);
  });

});

describe('rules', function() {
  it('should die if it has less than two neighbours', function() {
    var map = [
       [1, 0, 0],
       [0, 1, 0],
       [0, 0, 0]
    ];

    var mapNextIteration = [
       [1, 0, 0],
       [0, 0, 0],
       [0, 0, 0]
    ];

    var x = 1;
    var y = 1;



    expect(updateMap(map, x, y))
      .toEqual(mapNextIteration);
  });


  it('should stay alive ... hahahaha staying alive staying alive ...  if it has 2  neighbours', function() {
    var map = [
       [1, 0, 1],
       [0, 1, 0],
       [0, 0, 0]
    ];

    var x = 1;
    var y = 1;



    expect(updateMap(map, x, y))
      .toEqual(map);
  });


  it('should die   if it has more than 3  neighbours', function() {
    var map = [
       [1, 0, 1],
       [0, 1, 0],
       [0, 1, 1]
    ];

    var x = 1;
    var y = 1;

    var expectedMap = [
       [1, 0, 1],
       [0, 0, 0],
       [0, 1, 1]
    ];

    expect(updateMap(map, x, y))
      .toEqual(expectedMap);
  });

  it('should die   if it has 5  neighbours', function() {
      var map = [
         [1, 0, 1],
         [0, 1, 0],
         [1, 1, 1]
      ];

      var x = 1;
      var y = 1;

      var expectedMap = [
         [1, 0, 1],
         [0, 0, 0],
         [1, 1, 1]
      ];

      expect(updateMap(map, x, y))
        .toEqual(expectedMap);
    });
});




/*
describe('map', function() {
  it('should return an array', function() {
    expect(typeof getMap()).toBe('object');
  });

  it('should return an array of dimension 3x3', function() {
    dimension = 3;
    map = getMap(dimension);
    expect(map.length).toBe(dimension);

    exampleOfInnerMap = map[1];
    expect(exampleOfInnerMap.length).toBe(dimension);

  });

  it('should return an array of the dimension pssed as first parameter', function() {
    map = getMap(5);
    expect(map.length).toBe(5);
  });

});
*/
