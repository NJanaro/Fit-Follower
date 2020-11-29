import {combineReducers} from 'redux';
import usersReducer from './user_reducer';
import routeReducer from './route_reducer';


export default combineReducers({
    users:usersReducer,
    routes:routeReducer
})