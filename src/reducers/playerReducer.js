import {  PLAYER_NAME_CHANGE,
          PLAYER_CLASS_CHANGE,
          PLAYER_SUBMIT } from 'actions'
import { SET_START_CELL } from 'actions/MapActions'
import { INVENTORY_DROP } from 'actions/UIActions'
import { LOAD_GAME } from 'actions/GameActions';

const player = (state = {}, action) => {
  switch (action.type) {
      case LOAD_GAME:
          return Object.assign({}, state, action.payload.player)

      case SET_START_CELL :
      return Object.assign({}, state, {
        posX: action.startCell.posX,
        posY: action.startCell.posY
      })
    case 'TURN_RESULT':{
        return Object.assign({}, state, {
            life: state.life - action.totalDamage
        })
    }
    case 'INVENTORY_DROP':{
        console.log(action.item, action.slot);

        return Object.assign({}, state, {

        })
    }
    case 'PLAYER_GET_POTION':
        let newLife = Math.min(state.life+action.value, state.maxLife)
        return Object.assign({}, state, {
          life:newLife
        })
    case 'PLAYER_GET_GOLD':
        return Object.assign({}, state, {
          gold: state.gold+action.value
        })
    case 'PLAYER_NAME_CHANGE':
      return Object.assign({}, state, {
        name: action.value
      })
    case 'PLAYER_CLASS_CHANGE':
        switch (action.value) {
          case 'Warrior':
            return Object.assign({}, state, {
              class: action.value,
              traits : {
                strength:15,
                intelect:5,
                dexterity:10
              },
              gold:0,
              maxLife:20,
              experience:0,
              life:20,
              armor : {
                  type : 'mail armor',
                  name : 'mail armor',
                  bonus: 0,
                  ac: 8,
              },
              weapon:{
                  type: 'sword',
                  name: 'sword',
                  bonus: 0,
                  damageMin: 4,
                  damageMax: 8
              },
              inventory:[],
              posX:1,
              posY:1
            })
          case 'Thief':
            return Object.assign({}, state, {
              class: action.value,
              traits : {
                strength:7,
                intelect:7,
                dexterity:15
              },
              armor : {
                  type : 'leather armor',
                  name : 'leather armor',
                  bonus: 0,
                  ac: 6,
              },
              weapon:{
                  type: 'sword',
                  name: 'sword',
                  bonus: 0,
                  damageMin: 4,
                  damageMax: 10
              },
              inventory:[],
              posX:1,
              posY:1

            })
          default:
            return state
          }

    case 'PLAYER_SUBMIT':
        return Object.assign({}, state, {
          submited: 'true'
        })
    case 'PLAYER_MOVE':

        switch (action.keycode) {
          case 'ArrowDown':
            return Object.assign({}, state, {
                posY:state.posY+1
            })
          case 'ArrowUp':
            return Object.assign({}, state, {
                posY:state.posY-1
            })
          case 'ArrowLeft':
            return Object.assign({}, state, {
                posX:state.posX-1
            })
          case 'ArrowRight':
            return Object.assign({}, state, {
                posX:state.posX+1
            })
        }

    default:
      return state
    }
}

export default player;
