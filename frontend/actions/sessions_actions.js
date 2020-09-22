import * as SessionApiUtil from '../utils/session_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser)=> ({
    type:RECEIVE_CURRENT_USER,
    currentUser
})

const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER,
})

const receiveErrors = (errors) => ({
    type:RECEIVE_ERRORS,
    errors
})

export const login = (user) => dispatch => (
    SessionApiUtil.login(user)
        .then(() => dispatch(receiveCurrentUser(user)))
)

export const logout = () => dispatch => (
    SessionApiUtil.logout()
        .then(() => dispatch(removeCurrentUser()))
)