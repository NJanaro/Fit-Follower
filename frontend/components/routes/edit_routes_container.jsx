import React from "react";
import {connect} from "react-redux";
import { editRoute } from "../../actions/routes_actions";
import RouteForm from "./route_form";


const mSTP = ({ errors, session, entities }) => {
    
    return({
        newOrEdit:"Update",
        userId: session.currentUser.id,
        errors: errors.route,
        route: entities.route,
        info: this.props.info
    });
}

const mDTP = dispatch => ({
    getRoute: (userId, routeId) => dispatch(getRoute(userId, routeId)),
    processForm: (userId, routeId, route) => dispatch(editRoute(userId, routeId, route))
})

export default connect(mSTP,mDTP)(RouteForm);