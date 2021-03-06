class Room {
    posX:number;
    posY:number;
    roomWidth:number;
    roomHeight:number;
    cells:Array<any>;
    doors:Array<any>;
    doorsLimit:number;
    description:string;

    constructor(posX:number, posY:number, roomWidth:number, roomHeight:number) {
        this.posX = posX;
        this.posY = posY;
        this.roomWidth = roomWidth;
        this.roomHeight = roomHeight;
        this.cells=[];
        this.doors=[];
        this.doorsLimit = 2;
        this.description = "";
    }
}
export default Room;
