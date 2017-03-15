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
            console.log(key, val);

            switch (typeof val){
                case('number'):
                    break;
                case('string'):
                    break;
                case('object'):
                    values[key] = utils.randomize(val.min, val.max);
            }
        }
        console.log(values);
        let monster = new Monster(cell, type, values);
        return monster;
    }
}
