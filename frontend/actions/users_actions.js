
import * as UserApiUtil from '../utils/user_utils';
import {receiveCurrentUser} from './sessions_actions';
import {receiveErrors} from './sessions_actions';


export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';




const receiveUser = (user) => ({
    type:RECEIVE_USER,
    user
})

const receiveUsers = (users) => ({ 
    type:RECEIVE_USERS,
    users
})

export const fetchUser = (userId) => dispatch =>(
    UserApiUtil.fetchUser(userId)
        .then((user)=>dispatch(receiveUser(user)))
)

export const fetchUsers = () => dispatch =>(
    UserApiUtil.fetchUsers()
        .then((users)=>dispatch(login(user)))
)

export const createUser = (user) => dispatch =>{
    return UserApiUtil.createUser(user)
        .then((user)=> dispatch(receiveCurrentUser(user)),
         err => {
             return dispatch(receiveErrors(err.responseJSON))
         }
    )    
}

