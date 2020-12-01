import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

class MiniMap extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const mapStart = {
          center: { lat: 40.775566, lng: -73.960456 },
          zoom: 13,
        };

        this.map = new google.maps.Map(this.mapNode, mapStart);
        const directionsRenderer = new google.maps.DirectionsRenderer({
          preserveViewport: true,
          suppressMarkers: true
        });
        const directionsService = new google.maps.DirectionsService();
        directionsRenderer.setMap(this.map);
    }

    render(){
        return (
            <>
              <div id="minimap" ref={(map) => (this.mapNode = map)}></div>
            </>
          );
    }


} 

export default MiniMap;