var Cell = (function () {
    function Cell(status) {
    }
    Cell.prototype.status = function () {
        return 'alive';
    };
    return Cell;
}());
exports.Cell = Cell;
