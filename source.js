var Cell = (function () {
    function Cell(status) {
        this._status = status;
    }
    Cell.prototype.status = function () {
        return this._status;
    };
    Cell.prototype.addNeighbour = function (n) {
    };
    Cell.prototype.listNeighbours = function () {
        return [1];
    };
    return Cell;
}());
exports.Cell = Cell;
