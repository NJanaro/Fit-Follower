import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Workouts from './workouts';
import {fetchWorkouts} from '../../actions/workouts_actions';

const mSTP = ({entities, session}) => ({
    workouts:Object.values(entities.workouts),
    userId: session.currentUser.id,
});

const mDTP = (dispatch) => ({
    getWorkouts: (userId) => dispatch(fetchWorkouts(userId))
});

export default withRouter(connect(mSTP, mDTP)(Workouts));