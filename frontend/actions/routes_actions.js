import * as RouteApiUtil from '../utils/route_utils';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const DELETE_ROUTE = 'DELETE_ROUTE';

const receiveRoutes = (userId) => {
    return {
        type: RECEIVE_ROUTES,
        userId
    }
}

const receiveRoute = (userId, routeId) => {
    return {
        type: RECEIVE_ROUTE,
        userId,
        routeId
    }
}

const deleteRoute = (userId, routeId) => {
    return {
        type: DELETE_ROUTE,
        userId,
        routeId
    }
}

export const fetchRoutes = (userId) => dispatch => (
    RouteApiUtil.fetchRoutes(userId)
        .then(() => dispatch(receiveRoutes(userId)))
)

export const fetchRoute = (userId, routeId) => dispatch => (
    RouteApiUtil.fetchRoute(userId, routeId)
        .then(() => dispatch(receiveRoute(userId, routeId)))
)

export const createRoute = (userId, route) => dispatch => (
    RouteApiUtil.createRoute(userId, route)
        .then((route) => dispatch(receiveRoute(route)))
)

export const destroyRoute = (userId, routeId) => dispatch => (
    ApiUtil.destroyRoute(userId, routeId)
        .then(() => dispatch(receiveRoutes(userId)))
)
