'use strict';

import CellConstants from 'utils/rogue/map/CellConstants';
import MonsterConstants from 'utils/rogue/map/monsters/MonsterConstants';
import AStar from 'utils/rogue/pathfinding/AStar';

export default {
    getMonsterByKey: function(monsters, key) {
        for (let monster of monsters) {
            if (monster.key == key) {
                return monster;
            }
        }
    },

    playerAttack: function(monsters, key) {
        let monster = this.getMonsterByKey(monsters, key);
        monster.life = monster.life - 5;
        if (monster.life <= 0) {
            this.killMonster(monsters, monster);
        }
    },

    killMonster: function(monsters, monster) {
        monster.cell.occupant = false;
        monsters.splice(monsters.indexOf(monster), 1);
    },

    moveMonster: function(monster) {
        let attack;
        if (monster.goalType == MonsterConstants.WANDERING) {
            if (monster.path.length > 0) {
                monster.cell.occupant = false;
                monster.cell = monster.path.pop();
                monster.posX = monster.cell.posX;
                monster.posY = monster.cell.posY;
                monster.cell.occupant = monster.key;
            }
        } else if (monster.goalType == MonsterConstants.ATTACK) {
            if (monster.path.length > 1) {
                monster.cell.occupant = false;
                monster.cell = monster.path.pop();
                monster.posX = monster.cell.posX;
                monster.posY = monster.cell.posY;
                monster.cell.occupant = monster.key;
            } else {
                attack = monster.attack();
            }
        }
        return attack;
    },
};
