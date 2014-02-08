describe('GameOfLife', function() {

    it('should create Game instance', function() {
        var game = new Game(3, 3);
        expect(typeof game === 'object').toEqual(true);
    })

});

var Game = function() {

};
