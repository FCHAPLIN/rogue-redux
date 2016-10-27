import React, {Component, PropTypes} from 'react'
import SlotItemComponent from 'components/game/interface/SlotItemComponent';
import SlotComponent from 'components/game/interface/SlotComponent';
import WeaponSlotComponent from 'components/game/interface/WeaponSlotComponent';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from 'components/game/interface/ItemTypes';

function getItemElement(item){
    return (
      <SlotItemComponent
        key={item.key}
        name={item.name}
        type={item.type}
        />
    );
}
function getSlotElement(item=false, key){

    if (item){
        return (
          <SlotComponent
            key={key} children={item}
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
        let slotsElements = [];

        let inventoryDrop = this.props.onDrop;
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
                <div className="inventory__equiped-slots">
                  <WeaponSlotComponent key="weaponslot" name="weaponslot" accepts={[ItemTypes.WEAPON]} onDrop={inventoryDrop}/>
                  <WeaponSlotComponent key="armorslot" name="armorslot" accepts={[ItemTypes.ARMOR]} onDrop={inventoryDrop}/>
                  <WeaponSlotComponent key="shieldslot" name="shieldslot" accepts={[ItemTypes.SHIELD]} onDrop={inventoryDrop}/>
                  <WeaponSlotComponent key="helmslot" name="helmslot" accepts={[ItemTypes.HELM]} onDrop={inventoryDrop}/>
                  <WeaponSlotComponent key="cloakslot" name="cloakslot" accepts={[ItemTypes.CLOAK]} onDrop={inventoryDrop}/>
                  <WeaponSlotComponent key="jewelslot" name="jewelslot" accepts={[ItemTypes.JEWEL]} onDrop={inventoryDrop}/>
                </div>
                <div className="inventory__slots">
                    {slotsElements}
                </div>
                <div className="selected-view"></div>
                <div className="close-inventory"><i className="icon-close"></i></div>
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Inventory);
