import React from "react";
import {connect} from "react-redux";
import { editRoute, fetchRoute } from "../../actions/routes_actions";
import RouteForm from "./route_form";


const mSTP = ({ errors, session, entities }, ownProps) => {
    return({
        newOrEdit:"Update",
        userId: session.currentUser.id,
        routeId: ownProps.location.state.info.id,
        errors: errors.route,
        route: entities.routes,
        // info: entities.routes.id
        // ownProps.location.state.info ||= ""
        
    });
}

const mDTP = dispatch => ({
    getRoute: (userId, routeId) => dispatch(fetchRoute(userId, routeId)),
    processForm: (userId, routeId, route) => dispatch(editRoute(userId, routeId, route))
})

export default connect(mSTP,mDTP)(RouteForm);