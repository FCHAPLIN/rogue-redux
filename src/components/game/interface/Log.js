import React, {Component, PropTypes} from 'react';

function getLogEntry(entry) {
	return (
        <div key={entry.id} className={`log-entry ${entry.type}`}>
			<div className="log-entry__time">{entry.time}</div>
			<div className="log-entry__text">{entry.text}</div>
		</div>
	);
}

class Log extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const log = this.props.data;
        let logEntries = [];
        let entries = log.entries;
        logEntries = entries.map(logEntry => getLogEntry(logEntry));
        return(
        <div className="log-panel">
            <div className="title-bar">
                <div className="title">LOG PANEL</div>
                <div className="reduce-button">-</div>
            </div>
			<div className="log-panel__entries">
				{logEntries}
			</div>
        </div>
      )
    }
}
export default Log;
