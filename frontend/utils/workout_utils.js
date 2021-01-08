export const fetchWorkouts = (userId) => {
    return $.ajax ({
        url: `/api/users/${userId}/workouts`
    })
}

export const fetchWorkout = (userId, workoutId) => {
    return $.ajax ({
        url: `/api/users/${userId}/workouts/${workoutId}`
    })
}

export const createWorkout = (userId, workout) => {
    return $.ajax ({
        url: `/api/users/${userId}/workouts`,
        method:  'POST',
        data: {workout}
    })
}

export const editWorkout = (userId, workoutId, workout) => {
    return $.ajax ({
        url: `/api/users/${userId}/workouts/${workoutId}`,
        method:  'PATCH',
        data: {workout}
    })
}

export const destroyWorkout = (userId, workoutId) => {
    return $.ajax ({
        url: `/api/users/${userId}/workouts`,
        method: 'DELETE'
    })
}
