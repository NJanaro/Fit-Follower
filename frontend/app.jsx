import React from 'react';
import SignupUserContainer from './components/welcome/create_user_container';
import LoginUserContainer from './components/welcome/login_user_container';
import NavSignupContainer from './components/navbar/nav_signup_container';
import NavLoginContainer from './components/navbar/nav_login_container';
// import NavDashboardContainer from './components/navbar/nav_dashboard_container'; this will go in once a user has been logged in
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from './utils/front_end_route_utils';
import Splash from './components/splash/splash';
import Home from './components/home'



class App extends React.Component {

    render(){
        return(
            <>
            <Route path='/' component={NavLoginContainer}/>
            <Switch>
                {/* protected rout /home that will render the 3 protected routes on 23-25 */}
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