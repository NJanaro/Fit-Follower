import {
    RECEIVE_USER,
    RECEIVE_USERS
} from '../actions/users_actions'

const initialState = {}
export default (state = initialState, action) => {
  switch (action.type) {
  case RECEIVE_USER:
    return Object.assign({}, {[action.user.id]:action.user})
  case RECEIVE_USERS:
    return Object.assign({}, action.users) 
  default:
    return state
  }
}
