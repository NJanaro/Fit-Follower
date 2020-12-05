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
          zoom: 12,
          disableDefaultUI: true
        };


        this.map = new google.maps.Map(this.mapNode, mapStart);
        const directionsRenderer = new google.maps.DirectionsRenderer({
          preserveViewport: true,
          suppressMarkers: true
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

export default MiniMap;