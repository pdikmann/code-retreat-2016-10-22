///<reference path='typescript-node-definitions/node.d.ts'/>

class Cell {
  _status : String;
  constructor(status : String ){
    this._status = status;
  }
  status (){
    return this._status;
  }
  addNeighbour( n ){

  }

  listNeighbours() {
    return [1];
  }
}

exports.Cell = Cell;
