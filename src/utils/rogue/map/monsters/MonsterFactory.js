import Monster from './Monster';
import MonsterValues from './MonsterValues';
import utils from 'utils/Utils';

import MonsterConstants from './MonsterConstants';

export default class MonsterFactory {

    static getMonster(cell, type, behavior) {
        let monster = this.createMonster(cell, type, MonsterValues[type]);
        monster.behavior = behavior;
        return monster;
    }

    static createMonster(cell, type, values) {
        for (const key of Object.keys(values)) {
            const val = values[key];
            switch (val.type){
                case('value'):
                    values[key] = val.value;
                    break;
                case('randomize'):
                    values[key] = utils.randomize(val.min, val.max);
                    break;
                case('pickone'):
                    console.log(Math.floor(Math.random() * val.value.length));
                    values[key] = val.value[Math.floor(Math.random() * val.value.length)];
                    break;
            }
        }
        let monster = new Monster(cell, type, values);
        return monster;
    }
}
