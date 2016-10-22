var Cell = (function () {
    function Cell(status) {
        this._status = status;
    }
    Cell.prototype.status = function () {
        return this._status;
    };
    Cell.prototype.addNeighbour = function (n) {
        this._neighbour = n;
    };
    Cell.prototype.listNeighbours = function () {
        return [this._neighbour];
    };
    return Cell;
}());
exports.Cell = Cell;
