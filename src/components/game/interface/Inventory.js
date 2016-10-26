import React, {Component, PropTypes} from 'react'
import SlotItemComponent from 'components/game/interface/SlotItemComponent';
import SlotComponent from 'components/game/interface/SlotComponent';

function getItemElement(item){
    return (
      <SlotItemComponent
        key={item.key}
        />
    );
}
function getSlotElement(item=false, key){
    console.log(item);
    if (item){
        return (
          <SlotComponent
            key={key} content={item}
            />
        );
    }else{
        return (
          <SlotComponent
            key={key}
            />
        );
    }

}
class Inventory extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        let store=this.props;
        let player = store.data.player;
        let maxSlots = player.inventory.maxSlots;
        let itemsElements = player.inventory.content.map(item => getItemElement(item));
        console.log(itemsElements);
        let slotsElements = [];
        for (let i=0; i<player.inventory.maxSlots; i++){
            let item;
            if (i<itemsElements.length){
                item = itemsElements[i];
            }
            slotsElements.push(getSlotElement(item, "slot"+i));
        }
        return(
            <div className="inventory">
                <div className="inventory__window-title">Inventory</div>
                <div className="inventory__equiped-slots"></div>
                <div className="inventory__slots">
                    {slotsElements}
                </div>
                <div className="selected-view"></div>
                <div className="close-inventory"><i className="icon-close"></i></div>
            </div>
        )
    }
}

export default Inventory;
