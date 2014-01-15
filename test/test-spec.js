var convert = function(){ return 'I' };

describe('roman numerals session 3', function() {
  it('I', function(){
    expect(convert(1)).toBe('I');
  });
  it('II', function(){
    expect(convert(2)).toBe('II');
  });
});