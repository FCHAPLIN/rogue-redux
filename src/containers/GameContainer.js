import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {dispatch} from 'redux'
import {mapRequestStartAction} from 'actions/MapActions'
import {inputKeyAction} from 'actions/PlayerActions'
import {inventoryDropAction,
		inventoryToggleAction,
		logToggleAction} from 'actions/UIActions'
import shallowCompare from 'react-addons-shallow-compare';
import MapComponent from 'components/game/map/MapComponent';
import Interface from 'components/game/interface/Interface';
import Log from 'components/game/interface/Log';
import Inventory from 'components/game/interface/Inventory';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.command = this.command.bind(this);
        this.inventoryDrop = this.inventoryDrop.bind(this);
        this.inventoryToggle = this.inventoryToggle.bind(this);
        this.logToggle = this.logToggle.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState){
      return shallowCompare(this, nextProps, nextState);
    }

    componentWillUpdate(nextProps, nextState){
        //const {dispatch} = this.props;
        //dispatch(mapRequestStartAction());
    }
    componentWillReceiveProps(nextProps) {

    }
    componentDidMount() {
        //get dispatch function
        const {dispatch} = this.props;

        //request new map
        dispatch(mapRequestStartAction());

        //cast resize action on resize viewport
        if (Event.prototype.initEvent) {
            var evt = window.document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
        } else {
            window.dispatchEvent(new Event('resize'));
        }

        //keep focus on command-input
        document.querySelectorAll('.command-input')[0].focus();
        document.querySelectorAll('.command-input')[0].onblur = function(event)  {
            let blurElement = this;
            setTimeout(function() {
                blurElement.focus()
            }, 20);
        };
    }

    //catch user keyboard entry in hidden input
    command(event) {
        console.log(this.props)
        this.props.dispatch(inputKeyAction(event.key,this.props.viewport.posX, this.props.viewport.posY));
    }

    inventoryDrop(item, target){
        this.props.dispatch(inventoryDropAction(item, target));
    }

    inventoryToggle(){
        this.props.dispatch(inventoryToggleAction());
    }

	logToggle(){
		this.props.dispatch(logToggleAction());
	}

    render() {
        const {data} = this.props;
        const inventory = this.props.viewport.inventory;
        const displayLogWindow = this.props.log.visible;
        return (
            <div>
                <input className="command-input" onKeyDown={this.command}></input>
                <Interface
                  data={this.props}
                  onInventoryClick= {this.inventoryToggle}
                />
                <MapComponent data={this.props} />
				{displayLogWindow &&
				<Log
					data={this.props.log}
					onClose= {this.logToggle}
				/>}
				{inventory &&
                  <Inventory
                    data={this.props}
                    onDrop={this.inventoryDrop}
                    onClose= {this.inventoryToggle}
                  />}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {player: store.player, map: store.map, viewport: store.viewport, log: store.log};
}

export default connect(mapStateToProps)(GameContainer)
