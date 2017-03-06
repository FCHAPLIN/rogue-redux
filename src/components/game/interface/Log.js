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
        const visible = log.visible;
        const logWindowToggle = this.props.logWindowToggle;
        const visibleClass = visible ? 'log-panel' : 'log-panel-reduced';
        let logEntries = [];
        let entries = log.entries;
        logEntries = entries.map(logEntry => getLogEntry(logEntry));
        return(
            <div className={visibleClass}>
                <div className="title-bar">
                    <div className="title">LOG PANEL</div>
                    <div className="reduce-button" onClick={logWindowToggle}>-</div>
                </div>
                <div className="entries">
                    {logEntries}
                </div>
                <div className="deploy-button" onClick={logWindowToggle}>+</div>
            </div>
        )
    }
}
export default Log;
