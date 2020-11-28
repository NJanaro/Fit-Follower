import React from "react";
import {connect} from "react-redux";
import { createRoute } from "../../actions/routes_actions";
import Routes from "./route_form";


const mSTP = ({ errors, session }) => ({
    newOrEdit:"Save",
    userId: session.currentUser.id,
    errors: errors.route,
})

const mDTP = dispatch => ({
    processForm: (userId, route) => dispatch(createRoute(userId, route))
})

export default connect(mSTP,mDTP)(Routes);