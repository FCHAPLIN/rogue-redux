import { CHANGE_VALUE, SELECT_VALUE } from 'actions'


const changevalue = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        value: 'clicked'
      }
    default:
      return state
    }
}
export default changevalue;
