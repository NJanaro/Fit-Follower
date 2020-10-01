import {RECEIVE_ROUTES,
        RECEIVE_ROUTE,
        DELETE_ROUTE
    } from '../actions/routes_actions';

const initialState = {}
export default (state = initialState, action) => {
  switch (action.type) {
  case RECEIVE_ROUTES:
    return action.routes
  case RECEIVE_ROUTE:
    return action.route
  case CONSTANT:
    let newState = Object.assign({}, );

    return newState;
  default:
    return state
  }
}


