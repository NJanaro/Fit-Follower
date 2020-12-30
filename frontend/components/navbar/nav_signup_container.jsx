import {connect} from 'react-redux'; 
import React from 'react';
import NavBar from './navbar';
import {logout} from '../../actions/sessions_actions';
import { Link, Redirect, withRouter } from "react-router-dom";
import NavLoginContainer from './nav_login_container';
import {createUser} from '../../actions/users_actions';

const mSTP = ({ errors }) => ({
  button: {
    name: "Sign Up",
    classN: "sign-up-button",
    url: "/signup",
    errors: errors.session,
  }
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  processForm: (user) => dispatch(createUser(user))
});

export default withRouter(connect(mSTP, mDTP)(NavBar));