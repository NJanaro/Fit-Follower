import React from 'react';
import LoggedInNav from "./navbar/logged_in_nav";
import {ProtectedRoute} from '../utils/front_end_route_utils';
import Routes from './routes/routes_container';
import NewRoute from './routes/new_route';
import DashboardContainer from "./dashboard/dashboard";
import {Switch} from 'react-router-dom';

export default () => {

    return(
        <>
          <ProtectedRoute path='/home' component={LoggedInNav}/>
        <Switch>
          <ProtectedRoute exact path='/home/routes' component={Routes}/>
          <ProtectedRoute exact path='/home/routes/new' component={NewRoute}/>
          <ProtectedRoute  path='/home' component={DashboardContainer}/> 
        </Switch>
        </>
    )

} 