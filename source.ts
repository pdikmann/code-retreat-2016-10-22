///<reference path='typescript-node-definitions/node.d.ts'/>

class Cell {
  constructor(status : String ){
  }
  status (){
    return 'alive';
  }
}

exports.Cell = Cell;
