import React from 'react';
import Map from './map';
import {Link} from 'react-router-dom';

class RouteForm extends React.Component {
  
  constructor(props) {
    super(props);

  }


    render(){
      console.log(this.props);
        return (
          <>
            <div className="new-route-main">
                <div className="new-route-sidebar">
                    sidebar
                </div>
                <div id="map-main">
                  <div className={this.props.newOrEdit}>testing</div>
                  <Map></Map>
                </div>
              </div>
            {/* </div> */}
          </>
        );
    }
}

export default RouteForm;