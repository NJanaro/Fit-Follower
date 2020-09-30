import React from 'react';
import Map from './map';

class Routes extends React.Component {


    render(){
        return (
          <>
            {/* <div className="routes-real-main"> */}
              <div className="routes-main">
                <div className="routes-side-bar">
                  <h3>Routing info</h3>
                </div>
                <div>
                  <Map/>
                </div>
              </div>
            {/* </div> */}
          </>
        );
    }
}

export default Routes;