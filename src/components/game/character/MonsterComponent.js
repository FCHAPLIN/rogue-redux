import React, {Component, PropTypes} from 'react'

class MonsterComponent extends Component {
  render() {
    let posX = this.props.posX*50;
    let posY = this.props.posY*50;
    let customClass = "monster "+this.props.monsterType;
    let divStyle= {
        left: posX,
        top: posY,
        width:this.props.size,
        height:this.props.size
    }
    return (
        <div className ={customClass}  style={divStyle}>

        </div>
    );
  }
}

export default MonsterComponent;
