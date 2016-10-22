var test = require( 'unit.js' );
var source = require( '../source.js' );

describe( 'A failing test', function(){
  it( 'should fail', function(){
    var to, r;
    test
      .given( to = new source.Foo( "hey", 123 ))
      .object( to )
      .when( r = to.qux() )
      .string( r )
      .is( "ho456" )
  })
})
