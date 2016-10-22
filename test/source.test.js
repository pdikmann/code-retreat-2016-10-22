var test = require( 'unit.js' );
var source = require( '../source.js' );

describe( 'Cell', function(){
  it( 'can create cells', function(){
    test
      .given( to = new source.Cell( 'alive' ) )
      .object( to )
  })
  it( 'can ask cell about its status', function(){
    test
      .given( to = new source.Cell( 'alive' ) )
      .object( to )
      .then( r = to.status() )
      .string( r )
      .is( 'alive' )
    test
      .given( to = new source.Cell( 'dead' ) )
      .object( to )
      .then( r = to.status() )
      .string( r )
      .is( 'dead' )
  })
  it( 'can add neighbours', function(){
    test
      .given( a = new source.Cell() )
      .given( b = new source.Cell() )
      .then ( a.addNeighbour(b) )
  })
})
