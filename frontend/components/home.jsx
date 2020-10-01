import React from 'react';
import LoggedInNav from "./navbar/logged_in_nav";
import {ProtectedRoute} from '../utils/front_end_route_utils';
import Routes from './routes/routes';
import DashboardContainer from "./dashboard/dashboard";
import {Switch} from 'react-router-dom';

export default () => {

    return(
        <>
          <ProtectedRoute path='/home' component={LoggedInNav}/>
        <Switch>
          <ProtectedRoute exact path='/home/routes' component={Routes}/>
          <ProtectedRoute  path='/home' component={DashboardContainer}/> 
        </Switch>
        </>
    )

} 