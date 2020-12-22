import React from 'react';
import {connect} from 'react-redux';
import Map from './map';

const mSTP = ({ errors, session, entities }) => ({
    userId: session.currentUser.id,
    errors: errors.route,
    routes: entities.routes
})

export default connect(mSTP, null)(Map);