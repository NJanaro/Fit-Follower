import UsersReducer from './users_reducers';
import {combineReducers} from 'redux';

export default combineReducers({
    users: UsersReducer
})
