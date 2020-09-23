export const RECEIVE_SESSION_ERRORS  = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';


const initialState = {}
export default (state = initialState, action) => {
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return Object.assign({}, {errors:[]});
  case RECEIVE_SESSION_ERRORS:
    return Object.assign({}, {errors:action.errors});
  default: 
    return state
  }
}
