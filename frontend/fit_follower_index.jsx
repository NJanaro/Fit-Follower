import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import createStore from './store/store';


document.addEventListener("DOMContentLoaded", ()=>{
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: {currentUser:{id: window.currentUser.id}},
        };
        store = createStore(preloadedState);
        delete window.currentUser;
    } else {
        store =createStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    debugger
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
})