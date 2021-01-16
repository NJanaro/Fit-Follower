import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import WorkoutForm from './workout_form';
import { createWorkout } from '../../actions/workouts_actions';

const mSTP = ({session})=>({
    newOrEdit: "New Workout",
    userId: session.currentUser.id

})

const mDTP = (dispatch) => ({
    processForm: (userId, workout) => dispatch(createWorkout(userId, workout)),
})

export default withRouter(connect(mSTP, mDTP)(WorkoutForm));