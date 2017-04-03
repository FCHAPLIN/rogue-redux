class Room {
    posX:number;
    posY:number;
    roomWidth:number;
    roomHeight:number;
    cells:Array<any>;
    doors:Array<any>;
    doorsLimit:number;
    description:string;
    values:string;
    type:string;
    constructor(posX:number, posY:number, roomWidth:number, roomHeight:number, type: string, values:any , refs: Array<any>) {
        this.posX = posX;
        this.posY = posY;
        this.roomWidth = roomWidth;
        this.roomHeight = roomHeight;
        this.cells=refs;
        this.doors=[];
        this.doorsLimit = 2;
        this.description = "";
        this.type = type;
	    Object.assign(this, values);
	   
        
    }
}
export { Room };
