import React, {Component, PropTypes} from 'react'
import CellContent from 'components/game/map/CellContent'

function getContentElement(content){
    return (
      <CellContent
        key={content.key}
        contentType = {content.type}
        />
    );
}

class CellComponent extends Component {
  render() {
    let posX = this.props.posX*50;
    let posY = this.props.posY*50;
    let cellContent = this.props.cellContent;
    let contentElements = cellContent.map(content => getContentElement(content));
    let divStyle= {
        left: posX,
        top: posY
    }
    return (
        <div className ={"cell "+this.props.cellType}  style={divStyle}>
            {contentElements}
        </div>
    );
  }
}

export default CellComponent;
