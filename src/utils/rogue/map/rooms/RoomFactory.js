import Room from './Room';
import RoomConstants from './RoomConstants';

import utils from 'utils/Utils';

export default class RoomFactory {

    static getRoom(cell, type) {
        return this.createRoom(cell, type, MonsterValues[type]);
    }

    static createRoom(cell, type, values) {
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

        return new Monster(cell, type, values);
    }
}