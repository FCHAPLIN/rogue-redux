import CellConstants from 'utils/rogue/map/CellConstants';

class Monster {
    constructor(cell, monsterType, monsterLevel) {

        this.cell=cell;
        this.posX = cell.posX;
        this.posY = cell.posY;
        this.key = 'm-' + this.posX + '-' + this.posY;
        this.monsterType = monsterType;
        this.goal={};
        this.path=[];
    }

    doYourStuff(cells){
      this.detectPlayer();
      if (!this.goal || !this.path.length){
        console.log("I have no pupose, bouuuuh");
        //this.goal = this.getGoal();
        //this.path = [];
      }else{
        this.advance();
      }
    }

    getGoal(cells){
      let goodCell = false;
      let cell;
      while (goodCell != true) {
        goodCell = true;
        let rn = Math.floor(Math.random() * cells.length);
        cell = this.openCells[rn];
        if (cell.cellType != CellConstants.FLOOR){
          goodCell = false;
        }
      }
      return cell;
    }

    advance(){

    }

    detectPlayer(){

    }

}
export default Monster;
