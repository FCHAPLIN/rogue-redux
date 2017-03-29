class Cell {


    constructor(posX, posY, cellType) {

        this.key = posX + '-' + posY;
        this.posX = posX;
        this.posY = posY;
        this.cellType = cellType;
        this.cellContent = [];
        this.occupant = false;
        this.room = false;
        this.visible = false;
        this.opaque = true;
        this.obst = true;
        this.colored = " none";
        this.canBeCorridor = true;
        this.contiguousCells = [];
        this.movement = 1;
    }
}
export default Cell;
