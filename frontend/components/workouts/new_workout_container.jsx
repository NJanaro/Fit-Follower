import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import WorkoutForm from './workout_form';
import { createWorkout } from '../../actions/workouts_actions';

const mSTP = ({session, errors})=>({
    newOrEdit: "New Workout",
    userId: session.currentUser.id,
    errors: errors.workout

})

const mDTP = (dispatch) => ({
    processForm: (userId, workout) => dispatch(createWorkout(userId, workout)),
})

export default withRouter(connect(mSTP, mDTP)(WorkoutForm));