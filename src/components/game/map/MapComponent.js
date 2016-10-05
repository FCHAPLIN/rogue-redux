import React, {Component, PropTypes} from 'react'
import Header from 'components/pages/partials/Header'
import CellComponent from 'components/game/map/CellComponent';
import PlayerComponent from 'components/game/character/PlayerComponent';

function getCellElement(cell){
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
const MapComponent = (store) => {
    console.log(store);
    let map = store.data.map;
    let mapStyle = {}
    if (map.mapData){
      let cellsElements= [];
      let livingsElements= [];
      let playerElement;
      let player = store.data.player;

      let cells = map.mapData.cells;
      let livings = map.mapData.livings;

      if (cells) {
        cellsElements = cells.map(cell => getCellElement(cell));
      }
      if (livings){
        livingsElements = map.mapData.livings.map(living => getCellElement(living));
      }
      if (store.data.viewport){
          let viewport = store.data.viewport;
          mapStyle = {
              left: 0 - (viewport.posX-viewport.width*0.5) * 50,
              top: 0 - (viewport.posY-viewport.height*0.5) * 50

          }
      }
      return (
        <div>
          <Header/>
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

export default MapComponent;
