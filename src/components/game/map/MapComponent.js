import React, {Component, PropTypes} from 'react'
import Header from 'components/pages/partials/Header'
import CellComponent from 'components/game/map/CellComponent';
import PlayerComponent from 'components/game/character/PlayerComponent';

function getCellElement(cell, viewport){

  if (  cell.posX>=viewport.originLeft-5 &&
        cell.posX<=viewport.originLeft+viewport.width+5 &&
        cell.posY>=viewport.originTop-5 &&
        cell.posY<=viewport.originTop+viewport.height+5
  ){
    return (
      <CellComponent
        key={cell.key}
        posX={cell.posX}
        posY={cell.posY}
        size={cell.size}
        cellType = {cell.cellType}
        cellContent = {cell.content}
        blocking = {cell.blocking}
        />
    );
  }
}
function getLivingElement(living){
  return (
    <LivingComponent
      key={cell.key}
      posX={cell.posX}
      posY={cell.posY}
      livingType = {living.livingType}
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
          console.log(viewport);
          mapStyle = {
            left: 0 - (viewport.posX-viewport.width*0.5) * 50,
            top: 0 - (viewport.posY-viewport.height*0.5) * 50

          }
        }
        if (cells) {
          cellsElements = cells.map(cell => getCellElement(cell, store.data.viewport));
        }
        if (livings){
          livingsElements = map.mapData.livings.map(living => getCellElement(living));
        }
        return (
          <div>
            <div>Here, the UI</div>
            <div className="map-wrapper">
                <div className="map-container" style={mapStyle}>
                  {cellsElements}
                  {livingsElements}
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
