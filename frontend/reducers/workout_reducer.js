import {RECEIVE_WORKOUT,
    RECEIVE_WORKOUTS,
    DELETE_WORKOUT,
} from '../actions/workouts_actions';
import { REMOVE_CURRENT_USER } from '../actions/sessions_actions';

const initialState = {}
export default (state = initialState, action) => {
    switch (action.type) {
    case RECEIVE_WORKOUTS:
        return action.workouts;
    case RECEIVE_WORKOUT:
        return action.workout;
    case REMOVE_CURRENT_USER:
        return initialState;
    default:
        return state
    }
}


