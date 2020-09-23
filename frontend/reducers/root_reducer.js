import entitieReducer from './entitie_reducer';
import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    entities: entitieReducer,
    session: sessionReducer,
    errors: errorReducer
})
