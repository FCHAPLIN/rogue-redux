import MapGenerator from 'utils/rogue/map/MapGenerator'

let getNewMap = new Promise(function(resolve, reject) {
    let mapGenerator = new MapGenerator(80,80);
    let data = mapGenerator.generateMap();
    if (data.cells.length > 1) {
        resolve(data);
    }
    else {
        reject(Error("C'est tout pourri"));
    }
});
export default getNewMap;

// let updateCells = new Promise(function(resolve, reject) {
//
//
//     if (data.cells.length > 1) {
//         resolve(data);
//     }
//     else {
//         reject(Error("C'est tout pourri"));
//     }
// });
// export default updateCells;
//
// let isBlocking = new Promise(function(resolve, reject) {
//
//
//     if (data.cells.length > 1) {
//         resolve(data);
//     }
//     else {
//         reject(Error("C'est tout pourri"));
//     }
// });
// export default isBlocking;
//  : create a class here, map must be satic datas
