import {RECEIVE_WORKOUT_ERRORS, RECEIVE_WORKOUT} from '../actions/workouts_actions';


const initialState = [];
export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_WORKOUT:
    return initialState;
  case RECEIVE_WORKOUT_ERRORS:
    // if (action.errors){
      return action.errors;
    // }else{
    //   return initialState;
    // }
  default: 
    return initialState;
  }
}
