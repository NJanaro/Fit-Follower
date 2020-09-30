import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from './navbar';
import { logout } from "../../actions/sessions_actions";
import NavSignupContainer from './nav_signup_container';

const mSTP = (state) => ({
  button: {
    name: "Log In",
    classN: "login",
    url: "/login",
    errors: state.errors.session,
  },
  currentUser: state.session.currentUser

});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(NavBar);