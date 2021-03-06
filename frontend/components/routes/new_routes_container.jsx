import React from "react";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import { createRoute } from "../../actions/routes_actions";
import RouteForm from "./route_form";


const mSTP = ({ errors, session, entities }) => ({
    newOrEdit:"Save",
    userId: session.currentUser.id,
    errors: errors.route,
    routes: entities.route
})

const mDTP = dispatch => ({
    processForm: (userId, route) => dispatch(createRoute(userId, route))
})

export default withRouter(connect(mSTP,mDTP)(RouteForm));