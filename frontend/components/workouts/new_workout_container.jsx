import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import WorkoutForm from './workout_form';

const mSTP = ()=>({
    newOrEdit: "New Workout"

})

const mDTP = (dispatch) => ({

})

export default withRouter(connect(mSTP, mDTP)(WorkoutForm));