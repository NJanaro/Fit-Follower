import React from 'react';
import WorkoutForm from './workout_form';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchWorkout, updateWorkout} from '../../actions/workouts_actions'


const mSTP = ({session, entities, errors},ownProps)=>{
    let workoutId;
    ownProps.location.state ? workoutId = ownProps.location.state.workoutId : workoutId = entities.workouts.id;
    return({
        newOrEdit:"Update",
        userId: session.currentUser.id,
        workoutId: workoutId,
        errors: errors.workout,
        workout: entities.workouts,
    });

}

const mDTP = (dispatch) => ({
    getWorkout: (userId, workoutId) => dispatch(fetchWorkout(userId, workoutId)),
    processForm: (userId, workoutId, workout) => dispatch(updateWorkout(userId, workoutId, workout))
})

export default withRouter(connect(mSTP, mDTP)(WorkoutForm));