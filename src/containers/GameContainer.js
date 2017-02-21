import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {dispatch} from 'redux'
import {mapRequestStartAction} from 'actions/MapActions'
import {inputKeyAction} from 'actions/PlayerActions'
import {inventoryDropAction, inventoryToggleAction, infoModalOpenAction, infoModalCloseAction} from 'actions/UIActions'
import shallowCompare from 'react-addons-shallow-compare';
import MapComponent from 'components/game/map/MapComponent';
import Interface from 'components/game/interface/Interface';
import Inventory from 'components/game/interface/Inventory';
import InfoModal from 'components/game/interface/modals/InfoModal';
import { Modal } from 'react-modal';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.command = this.command.bind(this);
        this.inventoryDrop = this.inventoryDrop.bind(this);
        this.inventoryToggle = this.inventoryToggle.bind(this);
        this.infoModalOpen = this.infoModalOpen.bind(this);
        this.infoModalClose = this.infoModalClose.bind(this);
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

    infoModalOpen(){
        let modalData= {
            title: 'My Title',
            content: 'Welcome to Rogue Redux !',
            buttons: ['ok'],
            type: 'notify',
        }
        this.props.dispatch(infoModalOpenAction(modalData));
    }
    infoModalClose(){
        this.props.dispatch(infoModalCloseAction());
    }
    render() {

        const {data} = this.props;
        const inventory = this.props.viewport.inventory;
        return (
            <div>
                <input className="command-input" onKeyDown={this.command}></input>
                <Interface
                  data={this.props}
                  onInventoryClick= {this.inventoryToggle}
                  onInfoClick= {this.infoModalOpen}
                />
                <MapComponent data={this.props} />
                {inventory &&
                  <Inventory
                    data={this.props}
                    onDrop={this.inventoryDrop}
                    onClose= {this.inventoryToggle}
                  />}
                <InfoModal
                    data={this.props}
                    infoModalClose = {this.infoModalClose}
                />

            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {player: store.player, map: store.map, viewport: store.viewport};
}

export default connect(mapStateToProps)(GameContainer)
