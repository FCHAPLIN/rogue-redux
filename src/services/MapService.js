import Map from 'utils/rogue/map/Map'

class MapService{
    constructor(){
        // let map = new Map(80,80);
        // this.getNewMap = new Promise(function(resolve, reject) {
        //
        //     let data = map.generateMap();
        //     if (data.cells.length > 1) {
        //         resolve(data);
        //     }
        //     else {
        //         reject(Error("C'est tout pourri"));
        //     }
        // });
        // this.updateCells = new Promise(function(resolve, reject) {
        //     let data = map.data;
        //     if (data.cells.length > 1) {
        //         resolve(data);
        //     }
        //     else {
        //         reject(Error("C'est tout pourri"));
        //     }
        // });
        // this.isBlocking = new Promise(function(resolve, reject) {
        //     let data = map.data;
        //     if (data.cells.length > 1) {
        //         resolve(data);
        //     }
        //     else {
        //         reject(Error("C'est tout pourri"));
        //     }
        // });
    }

    getNewMap(param){
        let map = new Map(80,80);
        let data = map.generateMap();
        return data;
    }
}

export default MapService;
