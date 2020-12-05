import React from "react";
import {connect} from "react-redux";
import { editRoute } from "../../actions/routes_actions";
import RouteForm from "./route_form";


const mSTP = ({ errors, session, entities }) => ({
    newOrEdit:"Update",
    userId: session.currentUser.id,
    errors: errors.route,
    routes: entities.route
})

const mDTP = dispatch => ({
    processForm: (userId, routeId, route) => dispatch(editRoute(userId, routeId, route))
})

export default connect(mSTP,mDTP)(RouteForm);