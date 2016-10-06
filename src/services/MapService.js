import MapGenerator from 'utils/rogue/map/MapGenerator'

class MapService{
    constructor(){
        this.getNewMap = new Promise(function(resolve, reject) {
            let mapGenerator = new MapGenerator(80,80);
            let data = mapGenerator.generateMap();
            if (data.cells.length > 1) {
                resolve(data);
            }
            else {
                reject(Error("C'est tout pourri"));
            }
        });
        this.updateCells = new Promise(function(resolve, reject) {
            if (data.cells.length > 1) {
                resolve(data);
            }
            else {
                reject(Error("C'est tout pourri"));
            }
        });
        this.isBlocking = new Promise(function(resolve, reject) {
            if (data.cells.length > 1) {
                resolve(data);
            }
            else {
                reject(Error("C'est tout pourri"));
            }
        });
    }
}

export default MapService;

