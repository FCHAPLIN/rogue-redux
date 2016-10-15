import React, {Component, PropTypes} from 'react'
import {changevalue} from 'actions'
import { dispatch } from 'react-redux'


class CellContent extends Component {
  render() {
    let itemClass="item treasure "+this.props.contentType;
    return (
        <div className={itemClass} ></div>
    );
  }
}

export default CellContent;
