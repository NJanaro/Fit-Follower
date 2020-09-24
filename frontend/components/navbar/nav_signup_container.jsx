import {connect} from 'react-redux'; 
import React from 'react';
import NavBar from './navbar';

const mSTP = state => ({
    button: {
        name: "Sign Up",
        url: '/signup'
    }
})



export default connect(mSTP, null)(NavBar);