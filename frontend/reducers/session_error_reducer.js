export const RECEIVE_SESSION_ERRORS  = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';


const initialState = []
export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return [];
  case RECEIVE_SESSION_ERRORS:
    if (action.errors){
      return action.errors;
    }else{
      return initialState;
    }
  default: 
    return state
  }
}
