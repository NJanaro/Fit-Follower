import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class Workouts extends React.Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
          
            <div className="dashboard-main">
              <div className="dashboard-background">
                <div> This will be the the Users Workouts</div>
              </div>
            </div>
          </>
        )
    }

}

export default withRouter(Workouts);