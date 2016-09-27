import {  PLAYER_NAME_CHANGE,
          PLAYER_CLASS_CHANGE,
          PLAYER_SUBMIT } from 'actions'

const player = (state = {}, action) => {
  switch (action.type) {
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
              }
            })
          case 'Thief':
            return Object.assign({}, state, {
              class: action.value,
              traits : {
                strength:7,
                intelect:7,
                dexterity:15
              }
            })
          case 'Mage':
            return Object.assign({}, state, {
              class: action.value,
              traits : {
                strength:5,
                intelect:15,
                dexterity:10
              }
            })
          default:
            return state
          }

    case 'PLAYER_SUBMIT':
        return Object.assign({}, state, {
          submited: 'true'
        })
    default:
      return state
    }
}

export default player;
