import React from "react";
import {connect} from "react-redux";
import { destroyRoute, fetchRoute } from "../../actions/routes_actions";
import RouteForm from "./route_form";


const mSTP = ({ errors, session, entities }, ownProps) => {
    return({
        newOrEdit:"Delete Route",
        userId: session.currentUser.id,
        routeId: ownProps.location.state.info.id,
        errors: errors.route,
        route: entities.routes,
    });
}

const mDTP = dispatch => ({
    getRoute: (userId, routeId) => dispatch(fetchRoute(userId, routeId)),
    processForm: (userId, routeId) => dispatch(destroyRoute(userId, routeId))
})

export default connect(mSTP,mDTP)(RouteForm);