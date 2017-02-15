import React, { Component, PropTypes } from 'react';

class ContextWindow extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let windowTitle = this.props.windowTitle;
    let windowText = this.props.windowText;
    let windowButtons = this.props.windowButtons;

    return (
        <div className="window context">
            <div className="context__title">{windowTitle}</div>
            <div className="context__text">{windowText}</div>

            <div className="context__buttons">
                {windowButtons}
            </div>
            <div className="context__close" onClick={closeWindow}>
                <i className="icon-cross"></i>
            </div>
        </div>
    );
  }
}

export default (ContextWindow);
