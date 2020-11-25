import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';


class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.markers = [];
    this.state = {
      markers: []
    }
    this.makeMark = this.makeMark.bind(this);
    this.setMapOnAll = this.setMapOnAll.bind(this);
  }

  setMapOnAll(map){
    for (let i = 0; i < this.state.markers.length; i++) {
      this.state.markers[i].setMap(map);
    }
  }
  
  makeMark(latLng){
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
    });
    this.setState({
      markers:[...this.state.markers, marker]
    })
  };
  
  componentDidMount() {

    const deleteButton = document.getElementById("delete-marker");
    
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

      this.makeMark(latLng);

      // if(this.state.markers.length >= 2){
          
        // }
        let waypoints = this.state.markers.map(mark => {
          return {
            lat: parseFloat(`${mark.position.lat()}`),
            lng: parseFloat(`${mark.position.lng()}`)
          }
        })
        
        let stops = waypoints.slice(1, waypoints.length - 1);
        
        stops = stops.map(stop=>{
          return {location: stop}
        });
        
        // console.log(stops);
        // console.log(waypoints);
        let origin = waypoints[0];
        let finish = waypoints[waypoints.length - 1];
        
        // console.log(origin);
        let request = {
          origin: origin,
          destination: finish,
          waypoints: stops,
          travelMode: 'WALKING',
        }
        // console.log(request);
        
        directionsService.route(request, (result, status) => {
          this.setMapOnAll(null);
          if (status == "OK") {
            directionsRenderer.setDirections(result);
          }
        });
        
    });
          deleteButton.addEventListener("click", function(){
            // console.log(waypoints);
            console.log(this.state.markers)
            if(this.state.markers.length == 1){
              return this.state.markers[0].setMap(null);
            }else{
            this.setState( oldState => {
              let oldMark = oldState.markers.pop();
              return {markers:oldState.markers}
            });
            let waypoints = this.state.markers.map(mark => {
              return {
                lat: parseFloat(`${mark.position.lat()}`),
                lng: parseFloat(`${mark.position.lng()}`)
              }
            })
            
            let stops = waypoints.slice(1, waypoints.length - 1);
            
            stops = stops.map(stop=>{
              return {location: stop}
            });
            
            // console.log(stops);
            // console.log(waypoints);
            let origin = waypoints[0];
            let finish = waypoints[waypoints.length - 1];
            
            // console.log(origin);
            let request = {
              origin: origin,
              destination: finish,
              waypoints: stops,
              travelMode: 'WALKING',
            }
            // console.log(request);
            if(request.origin){
              directionsService.route(request, (result, status) => {
                if (status == "OK") {
                  directionsRenderer.setDirections(result);
                }
              });
            }
          }
          }.bind(this)
          )
      
    }
    

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
