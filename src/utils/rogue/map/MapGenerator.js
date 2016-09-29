import CellConstants from 'utils/rogue/map/CellConstants';

class MapGenerator {
}
MapGenerator.generateMap = function() {
    this.cells = [];
    this.createMap();
    this.generateRooms();
    this.generateCorridors();
    this.generateDoors();
    this.generatePopulation();
    console.log('Look ! I have cells !');
    return this.cells;
}

MapGenerator.createMap = function(cells){

    for (let x = 0; x < 50; x++) {
        for(let y = 0; y < 50; y++){
            let cellType = Math.random()<=0.5?CellConstants.WALL:CellConstants.FLOOR
            this.cells.push({
                key:'cell'+x+'-'+y,
                posX: x,
                posY: y,
                size: "50px",
                cellType: cellType,
                blocking: "false",
                content:[]
            })
        }
    }
}

MapGenerator.generateRooms = function(){

}

MapGenerator.generateCorridors = function(){

}

MapGenerator.generateDoors = function(){

}

MapGenerator.generatePopulation = function(){

}

export default MapGenerator;
