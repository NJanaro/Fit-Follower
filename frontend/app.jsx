import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import SignupUserContainer from './components/welcome/create_user_container';
import LoginUserContainer from './components/welcome/login_user_container';
import NavSignupContainer from './components/navbar/nav_signup_container';
import NavLoginContainer from './components/navbar/nav_login_container';
// import NavDashboardContainer from './components/navbar/nav_dashboard_container'; this will go in once a user has been logged in
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from './utils/route_utils';
import DashboardContainer from './components/dashboard/dashboard_container';
import Splash from './components/splash/splash';

class App extends React.Component {

    render(){
        return(
            <>

            <AuthRoute path='/' component={NavLoginContainer}/>
            <Switch>
                <AuthRoute path='/login' component={LoginUserContainer}/>
                <AuthRoute path='/signup' component={SignupUserContainer}/>
                <AuthRoute path='/' component={Splash}/>
            </Switch>
            <ProtectedRoute path='/dashboard' component={DashboardContainer}/> 
            </>
        )
    }
}

export default App;