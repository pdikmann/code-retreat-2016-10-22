var Cell = (function () {
    function Cell(status) {
        this._status = status;
    }
    Cell.prototype.status = function () {
        return this._status;
    };
    return Cell;
}());
exports.Cell = Cell;
