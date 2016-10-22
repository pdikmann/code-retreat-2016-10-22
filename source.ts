///<reference path='typescript-node-definitions/node.d.ts'/>

class Foo {
  public bar : string;
  private baz : number;
  constructor( bar : string, baz : number ){
    this.bar = bar;
    this.baz = baz;
  }
  qux() : string {
    return this.bar + this.baz;
  }
}

exports.Foo = Foo;
