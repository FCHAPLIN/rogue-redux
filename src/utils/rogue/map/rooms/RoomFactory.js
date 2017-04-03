import { Room, RoomValues } from 'utils/rogue/map/rooms';
import utils from 'utils/Utils';

class RoomFactory {

    static getRoom(posX, posY, roomWidth, roomHeight, selectionRefs) {
        return this.createRoom(posX, posY, roomWidth, roomHeight, selectionRefs);
    }

    static createRoom(posX, posY, roomWidth, roomHeight, selectionRefs) {
        let isSpecialRoom = utils.randomize(1, 10) === 1;
        let type = 'ROOM';
        if (isSpecialRoom) {
            type = 'TEMPLE';
        }
        let values = RoomValues[type];

        for (const key of Object.keys(values)) {
            const val = values[key];
            switch (val.type){
                case ('value'):
                    if (typeof (val.value) === 'array') {
                        values[key] = val.value.slice();
                    }else {
                        values[key] = val.value;
                    }
                    break;
                case ('randomize'):
                    values[key] = utils.randomize(val.min, val.max);
                    break;
                case ('pickone'):
                    values[key] = val.value[Math.floor(Math.random() * val.value.length)];
                    break;
            }
        }
        console.log(values);
        return new Room(posX, posY, roomWidth, roomHeight, type, values, selectionRefs);
    }
}
export { RoomFactory }

