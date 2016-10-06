import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {dispatch} from 'redux'
import {mapRequestStartAction} from 'actions/MapActions'
import {playerMoveAction} from 'actions/PlayerActions'
import shallowCompare from 'react-addons-shallow-compare';
import MapComponent from 'components/game/map/MapComponent'

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.command = this.command.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState){
      return shallowCompare(this, nextProps, nextState);
    }

    componentWillUpdate(nextProps, nextState){
        //const {dispatch} = this.props;
        console.log('update !');
        //dispatch(mapRequestStartAction());
    }
    componentWillReceiveProps(nextProps) {
      console.log('old');
      console.log(this.props.viewport);
      console.log('nexProps!');
      console.log(nextProps.viewport);
      console.log(this.props.viewport.posX == nextProps.viewport.posX );
      console.log(this.props.viewport.posY == nextProps.viewport.posY );
      console.log(this.props.viewport.width == nextProps.viewport.width );
      console.log(this.props.viewport.height == nextProps.viewport.height );
    }
    componentDidMount() {
        //get dispatch function
        const {dispatch} = this.props;

        //cast resize action on resize viewport
        if (Event.prototype.initEvent) {
            var evt = window.document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
        } else {
            window.dispatchEvent(new Event('resize'));
        }



        //request new map
        dispatch(mapRequestStartAction());

        //keep focus on command-input
        document.querySelectorAll('.command-input')[0].focus();
        document.querySelectorAll('.command-input')[0].onblur = function(event) {
            let blurElement = this;
            setTimeout(function() {
                blurElement.focus()
            }, 20);
        };
    }

    //catch user keyboard entry in hidden input
    command(event) {
        this.props.dispatch(playerMoveAction(event.key));
    }

    render() {
        console.log('render !');
        const {data} = this.props
        return (
            <div>
                <input className="command-input" onKeyDown={this.command}></input>
                <MapComponent data={this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {player: store.player, map: store.map, viewport: store.viewport};
}

export default connect(mapStateToProps)(GameContainer)
