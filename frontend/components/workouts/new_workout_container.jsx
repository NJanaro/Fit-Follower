import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import WorkoutForm from './workout_form';

const mSTP = ({session})=>({
    newOrEdit: "New Workout",
    userId: session.currentUser.id

})

const mDTP = (dispatch) => ({

})

export default withRouter(connect(mSTP, mDTP)(WorkoutForm));