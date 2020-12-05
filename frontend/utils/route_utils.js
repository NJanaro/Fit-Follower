

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
        url: `/api/users/${userId}/routes`,
        method: 'POST',
        data: {route}
    })
}

export const editRoute = (userId, routeId, route) => {
    return $.ajax ({
        url: `/api/users/${userId}/routes/${routeId}`,
        method: 'PATCH',
        data: {route}
    })
}

export const destroyRoute = (userId, routeId) => {
    return $.ajax ({
        url: `/api/users/${userId}/routes/${routeId}`,
        method: "DELETE"
    })
}