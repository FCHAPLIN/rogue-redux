import config from 'config/config'
export const initialState = {
    player: {
        name: 'Grûh the Great',
        class: 'warrior',
        traits: {
            strength : 15,
            intelect : 5,
            dexterity : 10
        },
        gold:0,
        maxLife:20,
        life:20,
        experience:0,
        equipedArmor : false,
        equipedWeapon: false,
        equipedJewel:false,
        equipedHelm:false,
        equipedShield:false,
        inventory:{
            maxSlots : 30,
            content:[{
                key:'k14',
                type: 'weapon',
                name: 'sword',
                bonus: 0,
                damageMin: 4,
                damageMax: 8
            },{
                key:'k15',
                type: 'armor',
                name: 'leather armor',
                bonus: 0,
                ac: 6
            },{
                key:'k16',
                type: 'scroll',
                name: 'Magic Scroll',
                effect: 0,
                damageMin: 4,
                damageMax: 8
            },{
                key:'k17',
                type: 'scroll',
                name: 'Magic Scroll',
                effect: 0,
                damageMin: 4,
                damageMax: 8
            },{
                key:'k18',
                type: 'scroll',
                name: 'Magic Scroll',
                effect: 0,
                damageMin: 4,
                damageMax: 8
            },
            {
                key:'k19',
                type: 'cloak',
                name: 'Levitation cloak',
                effect: 0
            },
            {
                key:'k20',
                type: 'shield',
                name: 'Shield of the ages',
                bonus: 0,
                ac: 6
            }
          ]
        },
        posX: 1,
        posY: 1
    },
    viewport: {
        width: 0,
        height: 0,
        posX: 1,
        posY: 1,
        inventory:true,
        menu:false
    },
    config:{
        mapWidth:config.mapWidth,
        mapHeight:config.mapHeight,
        cellSize:config.cellSize
    }
};
