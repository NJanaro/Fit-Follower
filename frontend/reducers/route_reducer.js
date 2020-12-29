import {RECEIVE_ROUTES,
        RECEIVE_ROUTE,
        DELETE_ROUTE,
    } from '../actions/routes_actions';
import { REMOVE_CURRENT_USER } from '../actions/sessions_actions';

const initialState = {}
export default (state = initialState, action) => {
  switch (action.type) {
  case RECEIVE_ROUTES:
    return action.routes
  case RECEIVE_ROUTE:
    return action.route
  case REMOVE_CURRENT_USER:
    return initialState;
  default:
    return state
  }
}


