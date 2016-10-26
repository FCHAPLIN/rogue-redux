import React, {Component, PropTypes} from 'react'
import { DropTarget } from 'react-dnd';

const slotTarget = {
  drop(props, monitor) {
    console.log('droped !');
    console.log(props);
  }
};
function collect(connect, monitor) {

  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class SlotComponent extends Component {
  constructor(props) {
      super(props);
      this.props = props;
  }
  render() {
    let connectDropTarget = this.props.connectDropTarget;
    let isOver = this.props.isOver;
    return connectDropTarget(
      <div className="inventory__slot" >
        {this.props.children}
      </div>
    )
  }

}
export default DropTarget('item', slotTarget, collect)(SlotComponent);
