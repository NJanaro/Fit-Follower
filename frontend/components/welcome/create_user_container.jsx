import {connect} from 'react-redux';
import React from 'react';
import WelcomeUserForm from './welcome_user_form';
import {createUser} from '../../actions/users_actions';

const mSTP = state => ({
    formType:"Create",
    message:"Join Fit Follower today, it's Free."
})

const mDTP = dispatch => ({
    createUser: (user)=> dispatch(createUser(user))
})

export default connect(mSTP, mDTP)(WelcomeUserForm);