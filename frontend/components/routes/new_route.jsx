import React from 'react';
import Map from './map';
import {Link} from 'react-router-dom';

class NewRoute extends React.Component {


    render(){
        return (
          <>
            <div className="new-route-main">
                <div className="new-route-sidebar">
                    sidebar
                </div>
              
                <Map id="map-main"></Map>
              </div>
            {/* </div> */}
          </>
        );
    }
}

export default NewRoute;