import { combineReducers } from "redux";
import sessionErrorReducer from './session_error_reducer';
import routeErrorReducer from './route_error_reducer';
import workoutErrorReducer from './workout_error_reducer';


export default combineReducers({
    session: sessionErrorReducer,
    route: routeErrorReducer,
    workout: workoutErrorReducer
})
