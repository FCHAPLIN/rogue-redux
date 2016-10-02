'use strict';

class Cell {
    constructor(posX, posY, cellType) {

        this.key = posX + '-' + posY;
        this.posX = posX;
        this.posY = posY;
        this.cellType = cellType;
        this.content = [];
        this.room = false;
        this.obst= false;
        this.canBeCorridor = true;
        this.contiguousCells = [];
        this.movement = 1;
    }
}
export default Cell;
