import request from 'superagent/lib/client';
import MapGenerator from 'utils/map/MapGenerator';
export default {
    generateMap: () => {
        let mapGenerator = new MapGenerator();
        return new Promise((resolve, reject) => {
            let map = mapGenerator.generateMap();
            resolve(map);
        });
    },
    getRace: (url) => {
        return new Promise((resolve, reject) => {
            request
                .get(url)
                .end((err, response) => {

                    if (err) reject(err);
                    resolve(response.body);
                })
        });
    }
}
