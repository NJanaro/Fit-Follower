import React from 'react';
import ReactDOM from 'react-dom';
import FitFollower from './components/fit_follower';
import createState from './store/store'

document.addEventListener("DOMContentLoaded", ()=>{
    const state = createState();
    const root = document.getElementById("root");
    ReactDOM.render(<FitFollower state={state}/>, root);
})