import {  PLAYER_NAME_CHANGE,
          PLAYER_CLASS_CHANGE,
          PLAYER_SUBMIT } from 'actions'
import { SET_START_CELL } from 'actions/MapActions'

const player = (state = {}, action) => {
  switch (action.type) {
    case SET_START_CELL :
      return Object.assign({}, state, {
        posX: action.startCell.posX,
        posY: action.startCell.posY
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
              posX:1,
              posY:1

            })
          case 'Mage':
            return Object.assign({}, state, {
              class: action.value,
              traits : {
                strength:5,
                intelect:15,
                dexterity:10
              },
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
