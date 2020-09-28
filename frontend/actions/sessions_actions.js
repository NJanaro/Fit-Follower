import * as SessionApiUtil from '../utils/session_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user)=> ({
    type:RECEIVE_CURRENT_USER,
    user
})

const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER,
})

export const receiveErrors = (errors) => {
    return ({
    type:RECEIVE_SESSION_ERRORS,
    errors
    })
}

export const login = (user) => dispatch => {
    return SessionApiUtil.login(user)
        .then((user) => dispatch(receiveCurrentUser(user)),
        err => {
           return dispatch(receiveErrors(err.responseJSON))
        }
    )
}


export const logout = () => dispatch => (
    SessionApiUtil.logout()
        .then(() => dispatch(removeCurrentUser()))
)

