import React from 'react';
import {render} from 'react-dom'
import { withRouter } from 'react-router-dom';


class Dashboard extends React.Component {

    render(){
        return (
          <>
          
            <div className="dashboard-main">
              <div className="dashboard-background">
                <div> This will be the the Users Dashboard</div>
              </div>
            </div>
          </>
        );
    }

}

export default withRouter(Dashboard);

