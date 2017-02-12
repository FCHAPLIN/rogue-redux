import Map from 'utils/rogue/map/Map';
import MapService from './../MapService';
import Monster from 'utils/rogue/map/Monster';
import Cell from 'utils/rogue/map/Cell';

test('MapService - Main', () => {
    const mapServiceInstance = new MapService();
    const map = mapServiceInstance.getNewMap();
    const testCell = mapServiceInstance.getCell(1,1);

    expect(new MapService()).toBe(mapServiceInstance);
    expect(map).toBeInstanceOf(Object);
    expect(map.cells.length).toBeGreaterThan(0);
    expect(map.openCells.length).toBeGreaterThan(0);
    expect(map.rooms.length).toBeGreaterThan(4);
    expect(map.map2d.length).toBeGreaterThan(8);
    expect(map.map2d[0]).toBeInstanceOf(Array);
    expect(map.corridors.length).toBeGreaterThan(4);
    expect(map.livings.length).toBeGreaterThan(0);
    expect(map.livings[0]).toBeInstanceOf(Monster);

    expect(testCell).toBeInstanceOf(Cell);
    expect(testCell.posX).toEqual(1);
    expect(testCell.posY).toEqual(1);
    expect(testCell.key).toBe("1-1");
});
