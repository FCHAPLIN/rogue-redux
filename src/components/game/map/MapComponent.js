import React, {Component, PropTypes} from 'react'
import Header from 'components/pages/partials/Header'
import CellComponent from 'components/game/map/CellComponent';


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
const MapComponent = (data) => {
    let cellsElements= [];
    let map = data.data.map;
    console.log(map);
    if (map.cells) {
       cellsElements = map.cells.map(cell => getCellElement(cell));
    }

    return (
      <div>
          <Header/>
          <div>Here, the map !</div>
          <div className="map-container">
            {cellsElements}
          </div>
      </div>
    );
}

export default MapComponent;
