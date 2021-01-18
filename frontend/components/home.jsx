import React from 'react';
import LoggedInNav from "./navbar/logged_in_nav";
import {ProtectedRoute} from '../utils/front_end_route_utils';
import Routes from './routes/my_routes_container';
import NewRoute from './routes/new_routes_container';
import EditRoute from './routes/edit_routes_container';
// import DashboardContainer from "./dashboard/dashboard";
import Workouts from "./workouts/workouts_container";
import EditWorkout from "./workouts/edit_workout_container";
import NewWorkout from "./workouts/new_workout_container";
import Footer from "./navbar/footer";

import {Switch, withRouter, Route} from 'react-router-dom';

const Home = () => {
    return(
        <>
          <ProtectedRoute path='/home' component={LoggedInNav}/>
        <Switch>
          <ProtectedRoute exact path='/home/routes' component={Routes}/>
          <ProtectedRoute exact path='/home/routes/new' component={NewRoute}/>
          <ProtectedRoute exact path='/home/routes/edit' component={EditRoute}/>
          <ProtectedRoute exact path='/home/workouts' component={Workouts}/>
          <ProtectedRoute exact path='/home/workouts/new' component={NewWorkout}/>
          <ProtectedRoute exact path='/home/workouts/edit' component={EditWorkout}/>
          <ProtectedRoute  path='/home' component={Workouts}/> 
        </Switch>
        {/* <Route path='/' component={Footer}/> */}

        </>
    )

} 

export default withRouter(Home);