import {connect} from 'react-redux'; 
import React from 'react';
import NavBar from './navbar';
import {logout} from '../../actions/sessions_actions';
import { Link, Redirect } from "react-router-dom";
import NavLoginContainer from './nav_login_container'

const mSTP = ({ errors }) => ({
  button: {
    name: "Sign Up",
    classN: "sign-up-button",
    url: "/signup",
    errors: errors.session,
},
redirect: <NavLoginContainer/>
});

const mDTP = dispatch => ({
    logout: ()=> dispatch(logout()),
})

export default connect(mSTP, mDTP)(NavBar);