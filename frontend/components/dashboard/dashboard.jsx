import React from 'react';
import {render} from 'react-dom'

class Dashboard extends React.Component {

    render(){
        return (
          <>
          
            <div className="dashboard-main">
              <div className="dashboard-background">
                This will the the Users Dashboard
                <button onClick={()=>this.props.logout()}>Log out</button>
              </div>
            </div>
          </>
        );
    }

}

export default Dashboard;

