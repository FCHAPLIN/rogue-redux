import React, {Component, PropTypes} from 'react'
import {changevalue} from 'actions'
import { dispatch } from 'react-redux'


class CellContent extends Component {
  render() {

    console.log('test');
    console.log(this.props);
    let itemClass="item treasure "+this.props.contentType;
    return (

        <div className={itemClass} ></div>
    );
  }
}

export default CellContent;
