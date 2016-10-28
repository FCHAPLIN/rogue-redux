import React, {Component, PropTypes} from 'react'
import { DropTarget } from 'react-dnd';

const slotTarget = {
  drop(props, monitor,component) {
      return{
          name: props.name,
          onDrop:props.onDrop
      }
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
    const {accepts, isOver, connectDropTarget,canDrop } = this.props;
    const {name, onDrop} = this.props;
    return connectDropTarget(
      <div className="inventory__weaponslot" >
        {this.props.children}
        {isOver && !canDrop && this.renderOverlay('red')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    )
  }

}
export default DropTarget(props => props.accepts, slotTarget, collect)(WeaponSlotComponent);
