import {connect} from 'react-redux';
import React from 'react';
import WelcomeUserForm from './welcome_user_form';
import {createUser} from '../../actions/users_actions';
import {login} from '../../actions/sessions_actions';

const mSTP = ({ errors }) => ({
  formType: "Sign Up",
  message: "Join Fit Follower today, it's Free.",
  errors: errors.session,
  background: { backgroundImage: `url(${window.femaleRunnerURL})` },
  demo: {
    email: "demo@demo.com",
    password: "demodemodemo",
  },
});

const mDTP = (dispatch) => ({
  demoUser: (user) => dispatch(login(user)),
  processForm: (user) => dispatch(createUser(user)),
});

export default connect(mSTP, mDTP)(WelcomeUserForm);