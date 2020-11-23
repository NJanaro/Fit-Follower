import React from 'react';
import NavLoginContainer from './components/navbar/nav_login_container';
import SignupUserContainer from './components/welcome/create_user_container';
import LoginUserContainer from './components/welcome/login_user_container';
import NavSignupContainer from './components/navbar/nav_signup_container';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from './utils/front_end_route_utils';
import Splash from './components/splash/splash';
import Home from './components/home'



class App extends React.Component {

    render(){
        const NavBar = withRouter(NavLoginContainer)
        return(
            <>
            <NavBar/>
            <Switch>
                <ProtectedRoute path='/home' component={Home}/> 
                <AuthRoute exact path='/login' component={LoginUserContainer}/>
                <AuthRoute exact path='/signup' component={SignupUserContainer}/>
                <AuthRoute path='/' component={Splash}/>
            </Switch>
            </>
        )
    }
}

export default App;