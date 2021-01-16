import * as WorkoutApiUtil from '../utils/workout_utils';

export const RECEIVE_WORKOUT_ERRORS = 'RECEIVE_WORKOUT_ERRORS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const DELETE_WORKOUT = 'DELETE_WORKOUT';

const receiveWorkoutErrors = (errors) => {
    return {
        type:RECEIVE_WORKOUT_ERRORS,
        errors
    }
}

const receiveWorkout = (workout) => {
    return {
        type:RECEIVE_WORKOUT,
        workout
    }
}

const receiveWorkouts = (workouts) => {
    return {
        type:RECEIVE_WORKOUTS,
        workouts
    }
}

const deleteWorkout = (userId, workoutId) => {
    return {
        type: DELETE_WORKOUT,
        userId,
        workoutId
    }
}

export const fetchWorkouts = (userId) => dispatch => {
    return WorkoutApiUtil.fetchWorkouts(userId)
        .then(workouts => dispatch(receiveWorkouts(workouts)))
}

export const fetchWorkout = (userId, workoutId) => dispatch => {
    return WorkoutApiUtil.fetchWorkout(userId, workoutId)
        .then(workout => dispatch(receiveWorkout(workout)))
}

export const createWorkout = (userId, workout) => dispatch => {
    return WorkoutApiUtil.createWorkout(userId, workout)
        .then(workouts => dispatch(receiveWorkouts(workouts)),
        (err) => dispatch(receiveWorkoutErrors(err.responseJSON))
        )
}

export const updateWorkout = (userId, workoutId, workout) => dispatch => {
    return WorkoutApiUtil.editWorkout(userId, workoutId, workout)
        .then(workouts => dispatch(receiveWorkouts(workouts)),
        (err) => dispatch(receiveWorkoutErrors(err.responseJSON))
        )
}