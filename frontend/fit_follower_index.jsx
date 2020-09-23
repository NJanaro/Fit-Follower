import React from 'react';
import ReactDOM from 'react-dom';
import FitFollower from './components/root';
import createStore from './store/store';


document.addEventListener("DOMContentLoaded", ()=>{
    const store = createStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<FitFollower store={store}/>, root);
})