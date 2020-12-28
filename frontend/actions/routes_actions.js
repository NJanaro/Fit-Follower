import * as RouteApiUtil from '../utils/route_utils';

export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const DELETE_ROUTE = 'DELETE_ROUTE';
// export const CONSTANT = 'CONSTANT';

const receiveRouteErrors = (errors) => {
    return {
        type:RECEIVE_ROUTE_ERRORS,
        errors
    }
}

const receiveRoutes = (routes) => {
    return {
        type: RECEIVE_ROUTES,
        routes
    }
}

const receiveRoute = (route) => {
    return {
        type: RECEIVE_ROUTE,
        route
    }
}

const deleteRoute = (userId, routeId) => {
    return {
        type: DELETE_ROUTE,
        userId,
        routeId
    }
}

export const fetchRoutes = (userId) => dispatch => {
    return RouteApiUtil.fetchRoutes(userId)
        .then(routes => dispatch(receiveRoutes(routes)))
}

export const fetchRoute = (userId, routeId) => dispatch => {
    return RouteApiUtil.fetchRoute(userId, routeId)
        .then((route) => dispatch(receiveRoute(route)))
}


export const createRoute = (userId, route) => dispatch => {
    return RouteApiUtil.createRoute(userId, route)
        .then((routes) => dispatch(receiveRoutes(routes)),
        (err) => dispatch(receiveRouteErrors(err.responseJSON))
        )
    }

export const editRoute = (userId, routeId, route) => dispatch =>{
    return RouteApiUtil.editRoute(userId, routeId, route)
        .then((routes) => dispatch(receiveRoutes(routes)),
        (err) => dispatch(receiveRouteErrors(err.responseJSON))
        )
}

export const destroyRoute = (userId, routeId) => dispatch => (
    ApiUtil.destroyRoute(userId, routeId)
        .then(() => dispatch(receiveRoutes(userId)))
)
