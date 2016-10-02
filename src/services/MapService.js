import MapGenerator from 'utils/rogue/map/MapGenerator'

let promise = new Promise(function(resolve, reject) {
    let mapGenerator = new MapGenerator(80,80);
    let data = mapGenerator.generateMap();
    if (data.cells.length > 1) {
        resolve(data);
    }
    else {
        reject(Error("C'est tout pourri"));
    }
});
export default promise;
