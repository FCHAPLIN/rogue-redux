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
        if (this.detections.player.length){
			console.log(monster.key + ' saw you !!! Run for your life !');
		}
		if (this.detections.items.length){
        	for (let item of this.detections.items){
        		console.log(monster.key + ' saw ' + item.content.type);
			}
		}
		if (this.detections.occupants.length){
			for (let occupant of this.detections.occupants){
				if (this.monster.key !== occupant.occupant)
					console.log(monster.key + ' saw ' + occupant.occupant);
			}
		}
    }

    static getDetections(monster, map, player) {
        let detectZone = FieldOfView.getFieldOfView(monster.cell, monster.view, map, false);
        let detections= {};
        let items = [];
        let playerDetection = [];
        let monsterDetection = [];
        if (detectZone) {
            for (let cell of detectZone) {
                cell.colored = " red";
                if (cell.cellContent.length) {
                    for (let content of cell.cellContent) {
                        items.push(
                            { cell, content });
                    }
                }
                if (cell == player) {
                    playerDetection.push({cell, player});
                }
				if (cell.occupant) {
					let occupant = cell.occupant;
					monsterDetection.push({cell, occupant});
				}
            }
        }
        detections.items = items;
        detections.player = playerDetection;
        detections.occupants = monsterDetection;
        return detections;
    }
}