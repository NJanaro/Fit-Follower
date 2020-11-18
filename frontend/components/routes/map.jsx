import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../utils/marker_manager';
import {withRouter} from 'react-router-dom';


class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [];
  }
  
  componentDidMount() {
    
    const mapStart = {
      center: { lat: 40.775566, lng: -73.960456 },
      zoom: 13,
    };

    this.map = new google.maps.Map(this.mapNode, mapStart);
    const directionsRenderer = new google.maps.DirectionsRenderer({preserveViewport:true});
    const directionsService = new google.maps.DirectionsService();
    directionsRenderer.setMap(this.map) 

    google.maps.event.addListener(this.map, "click", (event) => {
      const latLng = event.latLng
      const marker = new google.maps.Marker({
        position: event.latLng,
        map: this.map,
      });
      this.markers.push(marker);
      // console.log(this.markers[0].position.lat());
      // console.log(this.markers);
      // console.log(this.markers[0].latLng);
      if(this.markers.length >= 2){
          
          const waypoints = this.markers.map( (mark)=> {
            return {
              lat: parseFloat(`${mark.position.lat()}`),
              lng: parseFloat(`${mark.position.lng()}`)
            }
          })
          
          let stops = waypoints.slice(1, waypoints.length - 1);
          
          stops = stops.map(stop=>{
            return {location: stop}
          });

          console.log(stops);
          console.log(waypoints);
          const origin = waypoints[0];
          const finish = waypoints[waypoints.length - 1];
 
          console.log(origin);
          const request = {
            origin: origin,
            destination: finish,
            waypoints: stops,
            travelMode: 'WALKING',
            
          }
          
          return directionsService.route(request, (result, status) => {
            if (status == "OK") {
              directionsRenderer.setDirections(result);
            }
          });
      }
    });
    


  
    // this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers();
  }

  componentDidUpdate(pastState) {
    
    // this.MarkerManager.updateMarkers();
  }

  // registerListeners() {
  
    // google.maps.event.addListener(this.map, "click", (event) => {
    //   const coords = getCoordsObj(event.latLng);
    //   this.handleClick(coords);
    // });
  // }

  // handleClick(coords) {
  //   this.props.history.push({
  //     pathname: "benches/new",
  //     search: `lat=${coords.lat}&lng=${coords.lng}`,
  //   });
  // }

  render() {
    // debugger
    return (
      <>
        <div id="map-main" ref={(map) => (this.mapNode = map)}></div>
      </>
    );
  }
}


export default withRouter(MapContainer);
