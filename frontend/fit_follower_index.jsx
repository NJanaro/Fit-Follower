import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import createStore from './store/store';


document.addEventListener("DOMContentLoaded", ()=>{
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: {id: window.currentUser.id},
            entities: {
                users: { [window.currentUser.id]:window.currentUser}
            }
        };
        store = createStore(preloadedState);
        delete window.currentUser;
    } else {
        store =createStore();
    }
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
    window.getState = store.getState;
    window.dispatch = store.dispatch;
})