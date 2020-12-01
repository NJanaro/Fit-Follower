import React from 'react';
import {connect} from 'react-redux';
import Routes from './routes';
import {fetchRoutes} from '../../actions/routes_actions'

const mSTP = ({entities, session}) => ({
    routes:entities.routes,
    userId: session.currentUser.id,
});

const mDTP = (dispatch) => ({
    getRoutes: (userId) => dispatch(fetchRoutes(userId))
});

export default connect(mSTP, mDTP)(Routes)