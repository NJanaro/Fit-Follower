import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class Workouts extends React.Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
            <div className="my-routes-main">
              <div className="my-routes-top">
                <h1 id="page-title">My Workouts</h1>
                <Link 
                  to="/home/workouts/new"
                  className="sign-up-button"
                  style={{marginBottom:"18px"}}>

                Log New Workout    
                </Link>
              </div>
            </div>      


          </>
        )
    }

}

export default withRouter(Workouts);