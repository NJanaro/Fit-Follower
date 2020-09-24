import { connect } from "react-redux";
import React from "react";
import WelcomeUserForm from "./welcome_user_form";
import { login } from "../../actions/users_actions";



class LoginUserForm extends React.Component {
    
    
    render(){
        return null
    }
}


const mSTP = (state) => ({
  formType: "Create",
  message: "Join Fit Follower today, it's Free.",
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(LoginUserForm);