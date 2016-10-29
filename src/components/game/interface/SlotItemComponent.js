import React, {Component, PropTypes} from 'react'
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    return {
        name: props.name,
        type:props.type,

    };
  },
  endDrag(props, monitor,component){
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        dropResult.onDrop(item,dropResult );
        window.alert(
          `You dropped ${item.name} into ${dropResult.name}!`
        );
      }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class SlotItemComponent extends Component {
  constructor(props) {
      super(props);
      this.props = props;
  }
  render() {
    const {isDragging, connectDragSource } = this.props;
    const {name, type} = this.props;
    return connectDragSource(
      <div className="inventory__slot-item" ></div>
    )
  }

}

export default DragSource(props=>props.type, itemSource, collect)(SlotItemComponent);
