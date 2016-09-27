import CellConstants from 'utils/map/CellConstants';

class MapGenerator {


    constructor() {
      this.cells = [];
    }

    generateMap() {
      this.createMap();
      this.generateRooms();
      this.generateCorridors();
      this.generateDoors();
      this.generatePopulation();
      return this.cells;
    }

    createMap(){

      for (let x = 0; x < 50; x++) {
        for(let y = 0; y < 50; y++){
          let cellType = Math.random()<=0.5?CellConstants.WALL:CellConstants.FLOOR
          this.cells.push({
            key:'cell'+x+'-'+y,
            posX: x,
            posY: y,
            size: "50px",
            cellType: cellType,
            content:[]
          })
        }
      }
    }

    generateRooms(){

    }

    generateCorridors(){

    }

    generateDoors(){

    }

    generatePopulation(){

    }
}
export default MapGenerator;
