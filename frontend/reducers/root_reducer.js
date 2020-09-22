import UsersReducer from './users_reducer';
import SessionsReducer from './session_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    users: UsersReducer,
    session: SessionsReducer
})
