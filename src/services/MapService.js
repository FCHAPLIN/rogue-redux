import MapGenerator from 'utils/rogue/map/MapGenerator'

let promise = new Promise(function(resolve, reject) {
    let cells = MapGenerator.generateMap();
    if (cells.length > 1) {
        resolve(cells);
    }
    else {
        reject(Error("Ça a foiré"));
    }
});
export default promise;
