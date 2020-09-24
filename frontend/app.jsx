import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import SignupUserContainer from './components/welcome/create_user_container';
import LoginUserContainer from './components/welcome/login_user_container';
import NavSignupContainer from './components/navbar/nav_signup_container';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class App extends React.Component {

    render(){
        return(
            <>
            <div><NavSignupContainer/></div>
            <Switch>
                <Route exact path='/login' component={LoginUserContainer}/>
                <Route exact path='/signup' component={SignupUserContainer}/>
            </Switch>
            </>
        )
    }
}

export default App;