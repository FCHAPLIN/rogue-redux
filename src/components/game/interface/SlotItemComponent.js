import React, {Component, PropTypes} from 'react'
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    console.log(props);

    return {};
  },
  endDrag(props){
    console.log(props);
  }
};


function collect(connect, monitor) {

  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()

  }
}

class SlotItemComponent extends Component {
  constructor(props) {
      super(props);
      this.props = props;
      console.log(this.props);
  }
  render() {
    var isDragging = this.props.isDragging;
    var connectDragSource = this.props.connectDragSource;
    var text = this.props.text;
    return connectDragSource(
      <div className="inventory__slot-item" ></div>
    )
  }

}

export default DragSource('item', itemSource, collect)(SlotItemComponent);
