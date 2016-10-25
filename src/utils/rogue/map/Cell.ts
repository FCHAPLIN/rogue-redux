class Cell {
    key:string;
    posX:number;
    posY:number;
    cellType:string;
    cellContent:Array<any>;
    occupant:any;
    room:any;
    obst:boolean;
    canBeCorridor:boolean;
    contiguousCells: Array<string>;
    movement:number; 

    constructor(posX:number, posY:number, cellType:string) {

        this.key = posX + '-' + posY;
        this.posX = posX;
        this.posY = posY;
        this.cellType = cellType;
        this.cellContent = [];
        this.occupant = false;
        this.room = false;
        this.obst= true;
        this.canBeCorridor = true;
        this.contiguousCells = [];
        this.movement = 1;
    }
}
export default Cell;
