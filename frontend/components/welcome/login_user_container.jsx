import { connect } from "react-redux";
import React from "react";
import WelcomeUserForm from "./welcome_user_form";
import { login } from "../../actions/sessions_actions";


const mSTP = ({ errors }) => ({
  formType: "Log In",
  message: "Log In",
  errors: errors.session,
  background: { backgroundImage: `url(${window.mountainbikeURL})` },
  demo: {
    email: "demo@demo.com",
    password: "demodemodemo",
  },
});

const mDTP = (dispatch) => ({
  demoUser: (user) => dispatch(login(user)),
  processForm: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(WelcomeUserForm);