import Monster from './Monster';
import MonsterValues from './MonsterValues';
import BehaviorsValues from './BehaviorsValues';
import utils from 'utils/Utils';

//en entrée : le monstre , la carte, le joueur

export default class BehaviorResolver {

    static resolveBehavior(monster, map,  player){
        this.behavior = BehaviorsValues[monster.behaviorValue];
        this.monster = monster;
        this.cell = cell;
        this.player = player;

        //what does the monster see or hear or smell ?
        this.detections = this.getDetections();
    }

    getDetections(){
        hears = getHears
    }
}