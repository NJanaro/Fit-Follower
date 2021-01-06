import React from 'react';
import WorkoutForm from './workout_form';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


const mSTP = ()=>({


})

const mDTP = (dispatch) => ({

})

export default withRouter(connect(mSTP, mDTP)(WorkoutForm));