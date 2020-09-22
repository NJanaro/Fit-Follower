import React from 'react';
import ReactDOM from 'react-dom';
import Component from './components/component';

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
    ReactDOM.render(<Component/>, root);
})