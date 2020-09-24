import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/sessions_actions';

const initialState = {
  currentUser:null
}
export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return Object.assign({}, {currentUser:action.user});
  case LOGOUT_CURRENT_USER:
    return initialState;
  default:
    return state;
  }
}
