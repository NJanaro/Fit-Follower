

export const fetchRoutes = (userId) => {
    return $.ajax ({
        url:`/api/users/${userId}/routes`
    });
}

export const fetchRoute = (userId, routeId) => {
    return $.ajax ({
        url:`/api/users/${userId}/routes/${routeId}`
    });
}

export const createRoute = (userId, route) => {
    return $.ajax ({
        url: `/api/users/${userId}`,
        method: 'POST',
        data: {route}
    })
}

export const destroyRoute = (userId, routeId) => {
    return $.ajax ({
        url: `/api/users/${userId}/routes/${routeId}`,
        method: "DELETE"
    })
}