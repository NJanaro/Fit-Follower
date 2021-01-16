import {combineReducers} from 'redux';
import usersReducer from './user_reducer';
import routeReducer from './route_reducer';
import workoutReducer from './workout_reducer';


export default combineReducers({
    // users:usersReducer,
    routes:routeReducer,
    workouts:workoutReducer
})