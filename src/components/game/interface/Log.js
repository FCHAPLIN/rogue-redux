import React, {Component, PropTypes} from 'react';

/*function getLogEntries(id, time, text) {
	return (
		<div
			id={id}
			className="log-entry">
			<div className="log-entry__time">{time}</div>
			<div className="log-entry__text">{text}</div>
		/>
	);
}*/

class Log extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
      const props = this.props;
      let logEntries = [];

		//debugger;

      return(
        <div className="log-panel">

            LOG PANEL
			<div className="log-panel__entries">
				{logEntries}
			</div>
        </div>
      )
    }
}
export default Log;
