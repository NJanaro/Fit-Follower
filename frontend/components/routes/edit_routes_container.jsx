import React from "react";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import { destroyRoute, editRoute, fetchRoute } from "../../actions/routes_actions";
import RouteForm from "./route_form";


const mSTP = ({ errors, session, entities }, ownProps) => {
    let routeId;
    // debugger
    ownProps.location.state ? routeId = ownProps.location.state.info.id : routeId =entities.routes.id;
    return({
        newOrEdit:"Update",
        userId: session.currentUser.id,
        routeId: routeId,
        errors: errors.route,
        route: entities.routes,
    });
}

const mDTP = dispatch => ({
    getRoute: (userId, routeId) => dispatch(fetchRoute(userId, routeId)),
    processForm: (userId, routeId, route) => dispatch(editRoute(userId, routeId, route)),
    deleteRoute: (userId, routeId) => dispatch(destroyRoute(userId, routeId))
})

export default withRouter(connect(mSTP,mDTP)(RouteForm));