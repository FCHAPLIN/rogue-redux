import React, {Component, PropTypes} from 'react'
import { DropTarget } from 'react-dnd';

const slotTarget = {
  drop(props, monitor,component) {
    console.log('droped !');
    console.log(component);
  },
  canDrop(props) {
    return {};
  },
};
function collect(connect, monitor) {

  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class WeaponSlotComponent extends Component {
  constructor(props) {
      super(props);
      this.props = props;
  }
  renderOverlay(color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }
  render() {
    let connectDropTarget = this.props.connectDropTarget;
    let isOver = this.props.isOver;
    let canDrop = this.props.canDrop;
    return connectDropTarget(
      <div className="inventory__weaponslot" >
        {this.props.children}
        {isOver && !canDrop && this.renderOverlay('red')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    )
  }

}
export default DropTarget('item', slotTarget, collect)(WeaponSlotComponent);
