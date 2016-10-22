///<reference path='typescript-node-definitions/node.d.ts'/>

interface Bar {
  i : number;
  s : string;
}

function foo( a : Bar ){

}

foo( { i : 1, s : "hey" });

class Cell {
  _status : String;
  _neighbour : Cell;
  constructor( status : String ){
    this._status = status;
  }
  status (){
    return this._status;
  }
  addNeighbour( n ){
    this._neighbour = n;
  }

  listNeighbours() {
    return [ this._neighbour ];
  }
}

exports.Cell = Cell;
