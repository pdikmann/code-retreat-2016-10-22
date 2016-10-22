var test = require( 'unit.js' );
var source = require( '../source.js' );

describe( 'Cell', function(){
  it( 'can create cells', function(){
    test
      .given( to = new source.Cell( 'alive' ) )
      .object( to )
  })
})
