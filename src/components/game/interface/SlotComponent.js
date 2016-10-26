import React, {Component, PropTypes} from 'react'

const SlotComponent = (props) => (
    <div className="inventory__slot">
        {props.content}
    </div>
)


export default SlotComponent;
