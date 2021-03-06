import React, {Component, PropTypes} from 'react'
import Header from 'components/pages/partials/Header'
import CellComponent from 'components/game/map/CellComponent';
import NotificationWindow from 'components/game/map/NotificationWindow';
import PlayerComponent from 'components/game/character/PlayerComponent';
import MonsterComponent from 'components/game/character/MonsterComponent';

function getCellElement(cell, viewport){

  if (  cell.posX>=viewport.originLeft-2 &&
        cell.posX<=viewport.originLeft+viewport.width+2 &&
        cell.posY>=viewport.originTop-2 &&
        cell.posY<=viewport.originTop+viewport.height+2
  ){
    return (
      <CellComponent
        key={cell.key}
        posX={cell.posX}
        posY={cell.posY}
        size={cell.size}
        cellType = {cell.cellType}
        cellContent = {cell.cellContent}
        blocking = {cell.blocking}
        />
    );
  }
}
function getMonsterElement(living){
  return (
    <MonsterComponent
      key={living.key}
      posX={living.posX}
      posY={living.posY}
      monsterType = {living.monsterType}
    />
  );
}

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

      let store=this.props;
      let map = store.data.map;
      let mapStyle = {}
      if (map.mapData){
        let cellsElements= [];
        let livingsElements= [];
        let player = store.data.player;

        let cells = map.mapData.cells;
        let livings = map.mapData.livings;
        if (store.data.viewport){
          let viewport = store.data.viewport;

          mapStyle = {
            left: 0 - (viewport.posX-viewport.width*0.5) * 50,
            top: 0 - (viewport.posY-viewport.height*0.5) * 50
          }
        }
        if (cells) {
          cellsElements = cells.map(cell => getCellElement(cell, store.data.viewport));
        }
        if (livings){
          livingsElements = map.mapData.livings.map(living => getMonsterElement(living));
        }
        return (
          <div>
            <div className="map-wrapper">
                <div className="map-container" style={mapStyle}>
                  {cellsElements}
                  {livingsElements}
                  {(() => {
                    if (store.data.viewport.notification){
                      return (
                          <NotificationWindow
                            notify={store.data.viewport.notification.notify}
                            textContent={store.data.viewport.notification.text}
                            duration={store.data.viewport.notification.duration}
                            posX={player.posX}
                            posY={player.posY}
                            />
                      )
                    }
                  })()}

                  <PlayerComponent
                    posX={player.posX}
                    posY={player.posY}
                    />
                </div>
            </div>

          </div>
        );
      }else{
        return (
          <div>Loading map...</div>
          )
      }
    }
}

export default MapComponent;
