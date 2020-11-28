import React from 'react';
import Map from './map';
import {Link} from 'react-router-dom';

class RouteForm extends React.Component {
  
  constructor(props) {
    super(props);

  }


    render(){
      // console.log(this.props);
        return (
          <>
            <div className="new-route-main">
                <div className="new-route-sidebar">
                    <label for="route-name">Route Name</label>
                    <input id="route-name" type="text"/>
                    <label for="route-description">Description</label>
                    <textarea id="route-description" />
                    <label for="route-mode">Travel Mode</label> <br></br>
                    <select id="route-mode">
                      <option value="WALKING">Run</option>
                      <option value="BICYCLING">Bike</option>
                    </select><br></br>
                    <label for="route-distance-text">Distance</label>
                    <input id="route-distance-text" type="text" disabled="true" value=""/>
                </div>
                <div id="map-main">
                  <div className="new-edit-bar">
                    <div id="delete-marker">Delete Marker</div>
                    <div id={this.props.newOrEdit}>Save</div>
                  </div>
                  <div id="map-box">
                    <Map></Map>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </>
        );
    }
}

export default RouteForm;