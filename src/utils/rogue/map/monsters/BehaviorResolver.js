import { BehaviorsValues, MonsterUtils } from 'utils/rogue/map/monsters';
import FieldOfView from 'utils/rogue/pathfinding/FieldOfView';
import AStar from 'utils/rogue/pathfinding/AStar';
import MapUtils from 'utils/rogue/map/MapUtils';

class BehaviorResolver {
    static resolveBehavior(monster, map, livings, playerCell){
        this.livings = livings;
        this.monster = monster;
        this.player = playerCell;
        this.map = map;
        console.log(this.detections);
        this.detections = BehaviorResolver.getDetections();
        console.log(this.detections);
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

        BehaviorResolver.ajustMoods();
        if (BehaviorResolver.ajustBehaviors()){
            BehaviorResolver.ajustGoal()
        }
        BehaviorResolver.move();
        return BehaviorResolver.act(monster);
    }

    static getDetections() {
        let detectZone = FieldOfView.getFieldOfView(this.monster.cell, this.monster.view, this.map, false);
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
                if (cell == this.player) {
                    playerDetection.push(cell);
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

    static ajustMoods() {
        console.log(this.monster.behaviors.behaviorValue);
        console.log('path length', this.monster.path.length);
        if (this.monster.path.length === 0) {

            switch (this.monster.behaviors.behaviorValue) {
                case BehaviorsValues.LOOKING_FOR_FOOD :
                    this.monster.hunger += 20;
                    if (this.monster.hunger >= this.monster.maxValues.hunger)
                        this.monster.hunger = this.monster.maxValues.hunger;
                        this.monster.behaviors.behaviorValue = BehaviorsValues.WANDERING;
                    break;
                case BehaviorsValues.LOOKING_FOR_BED :
                    this.monster.fatigue += 20;
                    if (this.monster.fatigue >= this.monster.maxValues.fatigue)
                        this.monster.fatigue = this.monster.maxValues.fatigue;
                        this.monster.behaviors.behaviorValue = BehaviorsValues.WANDERING;
                    break;
                case BehaviorsValues.LOOKING_FOR_TEMPLE :
                    this.monster.faith += 20;
                    if (this.monster.faith >= this.monster.maxValues.faith)
                        this.monster.faith = this.monster.maxValues.faith;
                        this.monster.behaviors.behaviorValue = BehaviorsValues.WANDERING;
                    break;
                case BehaviorsValues.LOOKING_FOR_HEAL :
                    this.monster.life += 20;
                    if (this.monster.life >= this.monster.maxValues.life)
                        this.monster.life = this.monster.maxValues.life;
                        this.monster.needsHealing = false;
                        this.monster.behaviors.behaviorValue = BehaviorsValues.WANDERING;
                    break;
            }
        } else {
            console.log('this.monster.hunger before:',this.monster.hunger);
            if (this.monster.faith > 0) this.monster.faith -= 1;
            if (this.monster.hunger > 0) this.monster.hunger -= 1;
            if (this.monster.fatigue > 0) this.monster.fatigue -= 1;
            this.monster.courage -= this.monster.maxValues.life - this.monster.life;
            if (this.monster.courage < 0) this.monster.courage = 0;
            if (this.monster.life * 2 >= this.monster.maxValues.life) this.monster.needsHealing = true;
            console.log('this.monster.hunger after',this.monster.hunger);
        }
    }

    static ajustBehaviors() {

        this.changeGoal = false;
        this.previousBehavior = this.monster.behaviors.behaviorValue;
        console.log('previous behavior',this.previousBehavior);
        if (this.monster.courage === 0){
            this.monster.behaviors.behaviorValue = BehaviorsValues.FLEEING;
        } else if (this.detections.player.length){
            this.monster.behaviors.behaviorValue = BehaviorsValues.CLOSE_ATTACK;
        } else if (this.monster.needsHealing && !this.monsterIsAttacking()) {
            this.monster.behaviors.behaviorValue = BehaviorsValues.LOOKING_FOR_HEAL;
        }else if (this.monster.hunger === 0 && !this.monsterIsAttacking()) {
            this.monster.behaviors.behaviorValue = BehaviorsValues.LOOKING_FOR_FOOD;
        } else if (this.monster.faith === 0 && !this.monsterIsAttacking()) {
            this.monster.behaviors.behaviorValue = BehaviorsValues.LOOKING_FOR_TEMPLE;
        } else if (this.monster.fatigue === 0 && !this.monsterIsAttacking()) {
            this.monster.behaviors.behaviorValue = BehaviorsValues.LOOKING_FOR_BED;
        } else if (this.monster.patience === 0 ) {
            this.changeGoal = true;
            this.monster.patience = this.monster.maxValues.patience;
        }
        if (this.monster.behaviors.behaviorValue !== this.previousBehavior){
            this.changeGoal = true;
        }
        if (this.monster.behaviors.behaviorValue === BehaviorsValues.WANDERING && !this.monster.path.length){
            this.changeGoal = true;
        }
        console.log('new behavior',this.monster.behaviors.behaviorValue);
        console.log('Change goal ?', this.changeGoal);
        return this.changeGoal;
    }

    static ajustGoal() {
        console.log('ajusting goal');
        this.monster.path = [];
        switch (this.monster.behaviors.behaviorValue){
            case BehaviorsValues.WANDERING:
                this.monster.goal = MapUtils.getOpenCell('any');
                break;
            case BehaviorsValues.LOOKING_FOR_TEMPLE:
                this.monster.goal = MapUtils.getOpenCell('temple');
                break;
            case BehaviorsValues.LOOKING_FOR_FOOD:
                this.monster.goal = MapUtils.getOpenCell('food');
                break;
            case BehaviorsValues.LOOKING_FOR_BED:
                this.monster.goal = MapUtils.getOpenCell('bed');
                break;
            case BehaviorsValues.LOOKING_FOR_HEALING:
                this.monster.goal = MapUtils.getOpenCell('healing');
                break;
            case BehaviorsValues.CLOSE_ATTACK:
                this.monster.goal = this.player;
                break;

        }
        let aStar = new AStar(this.map, this.map.length, this.map[0].length);
        this.monster.path = aStar.getPath(this.monster.cell, this.monster.goal);
        console.log('this.monster.path', this.monster.path);
    }

    static move() {
        let attack;
        if (!MapUtils.cellIsOccupied(this.monster.path[this.monster.path.length - 1], this.livings)) {
            attack = MonsterUtils.moveMonster(this.monster);
        } else {
            this.monster.wait();
        }
    }

    static monsterIsAttacking() {
        return (this.monster.behaviors.behaviorValue === BehaviorsValues.CLOSE_ATTACK ||
            this.monster.behaviors.behaviorValue === BehaviorsValues.RANGED_ATTACK ||
            this.monster.behaviors.behaviorValue === BehaviorsValues.ON_AMBUSH ||
            this.monster.behaviors.behaviorValue === BehaviorsValues.PROTECTING)
    }

    static act() {
        let result = [];
        return result;
    }
}
export { BehaviorResolver };