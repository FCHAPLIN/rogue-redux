import MapGenerator from 'utils/rogue/map/MapGenerator'

export default {
    getMap
};

export function getMap() {
    console.log('i am getting a map, it is so cool!');
  return new Promise(resolve => resolve(MapGenerator.generateMap()));
}
