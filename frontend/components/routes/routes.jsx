import React from 'react';
import Map from './map';
import {Link} from 'react-router-dom';

class Routes extends React.Component {


    render(){
        return (
          <>
            {/* <div className="routes-real-main"> */}
              <div className="my-routes-main">
                <div className="my-routes-top">
                  <h1 id="page-title">My Routes</h1>
                  <Link 
                    to="/home/routes/new"
                    className="sign-up-button">
                  Create New Route    
                  </Link>
                </div>
              </div>
            {/* </div> */}
          </>
        );
    }
}

export default Routes;