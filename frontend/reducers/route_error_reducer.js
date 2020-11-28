import {RECEIVE_ROUTE_ERRORS, RECEIVE_ROUTE} from '../actions/routes_actions';


const initialState = [];
export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_ROUTE:
    return initialState;
  case RECEIVE_ROUTE_ERRORS:
    return action.errors;
  default: 
    return state;
  }
}
