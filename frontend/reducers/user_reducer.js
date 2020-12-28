import { RECEIVE_USER, RECEIVE_USERS} from '../actions/users_actions';
import { RECEIVE_CURRENT_USER } from '../actions/sessions_actions';

const initialState = {}
export default (state = initialState, action) => {
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    // return Object.assign({}, state, {[action.user.id]:action.user})
    return {[action.user.id]:action.user}
  default:
    return state
  }
}
