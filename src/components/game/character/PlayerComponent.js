import React, {Component, PropTypes} from 'react'

class PlayerComponent extends Component {
  render() {

    let posX = this.props.posX*50;
    let posY = this.props.posY*50;
    let divStyle= {
        left: posX,
        top: posY,
        width:this.props.size,
        height:this.props.size
    }
    return (
        <div className ="player"  style={divStyle}>

        </div>
    );
  }
}

export default PlayerComponent;
