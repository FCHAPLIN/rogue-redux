import Monster from './Monster';
import MonsterValues from './MonsterValues';
import BehaviorsValues from './BehaviorsValues';
import utils from 'utils/Utils';
import FieldOfView from 'utils/rogue/pathfinding/FieldOfView';
import MapUtils from 'utils/rogue/map/MapUtils';

//en entrée : le monstre , la carte, le joueur

export default class BehaviorResolver {

    static resolveBehavior(monster, map,  player){
        this.behavior = BehaviorsValues[monster.behaviorValue];
        this.monster = monster;
        this.player = player;

        //what does the monster see or hear or smell ?
        this.detections = BehaviorResolver.getDetections(monster, map, player);
    }

    static getDetections(monster, map, player) {
        let detectZone = FieldOfView.getFieldOfView(monster.cell, monster.view, map, false);
        if (detectZone) {
            for (let cell of detectZone) {
                cell.colored = " red";
            }
        }
    }
}