import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CreateUserContainer from './components/welcome/create_user_container';

class App extends React.Component {

    render(){
        return(
            <>
            <h1>Fit Follower!</h1>
            <Switch>
                <Route path='/'>
                    <CreateUserContainer/>
                </Route>
            </Switch>
            </>
        )
    }
}

export default App;