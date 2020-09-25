import {connect} from 'react-redux'; 
import React from 'react';
import NavBar from './navbar';
import {logout} from '../../actions/sessions_actions';

const mSTP = ({errors}) => ({
    button: {
        name: "Sign Up",
        url: '/signup',
        errors: errors.session
    }
})

const mDTP = dispatch => ({
    logout: ()=> dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar);