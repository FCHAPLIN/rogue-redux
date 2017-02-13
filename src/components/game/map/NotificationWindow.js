import React, {Component, PropTypes} from 'react'

class NotificationWindow extends Component {
    constructor(props) {
        super(props);
        this.show = '';
    }

    componentWillMount() {
        var that = this;
        that.show = 'show';
        setTimeout(function() {
            that.hideThis();
            console.log('hide');
        }, that.props.duration);
    }

    hideThis () {
        this.show = '';
    }

    render() {
        const posX = this.props.posX*50;
        const posY = this.props.posY*50;
        const divStyle= {
            left: posX+20,
            top: posY-90
        }
        const notificationClass = "notification "+this.props.notify+" "+this.show;
        return (
            <div className={notificationClass} style={divStyle}>
                {this.props.textContent}
            </div>
        );
    }
}

export default NotificationWindow;
