import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

class MiniMap extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let request = JSON.parse(this.props.info.route_info)

        const mapStart = {
          center: request.origin,
          draggable: false,
          disableDefaultUI: true,
        };
        
        let markers = Object.values(request.waypoints)
        this.markers = markers.reduce((acc, red) => {
           let accArr = Object.values(acc);
           return accArr.concat(Object.values(red))
        })
        

        this.map = new google.maps.Map(this.mapNode, mapStart);
        this.bounds = new google.maps.LatLngBounds();
        
        for (let i = 0; i < this.markers.length; i++) {
          // debugger;
          this.bounds.extend(this.markers[i]);
          
        }
        

        this.map.setCenter(this.bounds.getCenter());
        this.map.fitBounds(this.bounds);

        const directionsRenderer = new google.maps.DirectionsRenderer({
          preserveViewport: true,
          suppressMarkers: true,
          suppressBicyclingLayer: true,
        });
        const directionsService = new google.maps.DirectionsService();
        directionsRenderer.setMap(this.map);

        directionsService.route(request, (result, status) => {
          if (status == "OK") {
            directionsRenderer.setDirections(result);
          }
        })
    }

    render(){
        return (
            <>
              <div id="minimap" ref={(map) => (this.mapNode = map)}></div>
            </> 
          );
    }


} 

export default withRouter(MiniMap);