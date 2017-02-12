"use strict";
var Cell = (function () {
    function Cell(posX, posY, cellType) {
        this.key = posX + '-' + posY;
        this.posX = posX;
        this.posY = posY;
        this.cellType = cellType;
        this.cellContent = [];
        this.occupant = false;
        this.room = false;
        this.obst = true;
        this.canBeCorridor = true;
        this.contiguousCells = [];
        this.movement = 1;
    }
    return Cell;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cell;
