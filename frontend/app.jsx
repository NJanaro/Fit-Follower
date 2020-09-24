import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import SignupUserContainer from './components/welcome/create_user_container';
import LoginUserContainer from './components/welcome/login_user_container';
import NavSignupContainer from './components/navbar/nav_signup_container';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from './utils/route_utils';
import DashboardContainer from './components/dashboard/dashboard_container';
import Splash from './components/splash/splash';

class App extends React.Component {

    render(){
        return(
            <>
            <div><NavSignupContainer/></div>
            <div><Splash/></div>
            <Switch>
            </Switch>
            <ProtectedRoute path='/' component={DashboardContainer}/> 
            <AuthRoute exact path='/login' component={LoginUserContainer}/>
            <AuthRoute exact path='/signup' component={SignupUserContainer}/>
            </>
        )
    }
}

export default App;