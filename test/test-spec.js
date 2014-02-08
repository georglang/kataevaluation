describe('GameOfLife', function() {

    var grid;

    beforeEach(function() {
        grid = new Grid();
    });

    it('should kill living cell with less than to neighbours', function() {
        var cell = grid.get(2, 2);
        cell.live();

        var cell2 = grid.get(3, 3);
        cell2.live();

        grid.tick();

        expect(cell.isDead()).toBeTruthy();
        expect(cell2.isDead()).toBeTruthy();
    });

});
