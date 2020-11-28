import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    };
    this.makeMark = this.makeMark.bind(this);
    this.setMapOnAll = this.setMapOnAll.bind(this);
  }

  setDistance(meters, text) {
    const distanceText = document.getElementById("route-distance-text");
  }

  setMapOnAll(map) {
    for (let i = 0; i < this.state.markers.length; i++) {
      this.state.markers[i].setMap(map);
    }
  }

  makeMark(latLng) {
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
    });
    this.setState({
      markers: [...this.state.markers, marker],
    });
  }

  componentDidMount() {

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix()

    const deleteButton = document.getElementById("delete-marker");

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

    google.maps.event.addListener(this.map, "click", (event) => {
      directionsRenderer.setMap(this.map);

      const latLng = event.latLng;

      this.makeMark(latLng);

      // if(this.state.markers.length >= 2){

      // }
      let waypoints = this.state.markers.map((mark) => {
        return {
          lat: parseFloat(`${mark.position.lat()}`),
          lng: parseFloat(`${mark.position.lng()}`),
        };
      });

      let stops = waypoints.slice(1, waypoints.length - 1);

      stops = stops.map((stop) => {
        return { location: stop };
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
        travelMode: "WALKING",
        // suppressMarkers: true
      };
      // console.log(request);

      directionsService.route(request, (result, status) => {
        // this.setMapOnAll(null);
        console.log(result.routes[0].legs);
        let distance = 0
        const legs = result.routes[0].legs;
        const showDistance = document.getElementById("route-distance-text");

        legs.forEach(leg=>{
          distance += leg.distance.value;
        })

        let toMiles = (distance * 0.00062137).toFixed(2)
        
        if (status == "OK") {
          directionsRenderer.setDirections(result); //result.routes.legs.
          showDistance.setAttribute("value", toMiles.toString() + " Miles")
        }
      });
    });

    deleteButton.addEventListener("click", function(){
        // console.log(waypoints);
        // console.log(this.state.markers)
        if (this.state.markers.length == 0) {
          
          return;
        } else {
          ;
          this.state.markers[this.state.markers.length - 1].setMap(null);
          this.state.markers[this.state.markers.length - 1] = null;

          this.setState((oldState) => {
            oldState.markers.pop();
            return { markers: oldState.markers };
          });
        }
          let waypoints = this.state.markers.map((mark) => {
            return {
              lat: parseFloat(`${mark.position.lat()}`),
              lng: parseFloat(`${mark.position.lng()}`),
            };
          });

          let stops = waypoints.slice(1, waypoints.length - 1);

          stops = stops.map((stop) => {
            return { location: stop };
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
            travelMode: "WALKING",
          };
          // console.log(request);
          if (request.origin) {
            directionsService.route(request, (result, status) => {
              if (status == "OK") {
                console.log(result);
                let distance = 0
                const legs = result.routes[0].legs;
                const showDistance = document.getElementById("route-distance-text");
        
                legs.forEach(leg=>{
                  distance += leg.distance.value;
                })
        
                let toMiles = (distance * 0.00062137).toFixed(2)        

                directionsRenderer.setDirections(result);
                showDistance.setAttribute("value", toMiles.toString() + " Miles")

              }
            });
          }else{
            
            directionsRenderer.setMap(null);
          }
        }.bind(this)
    );
  }

  render() {
    // 
    return (
      <>
        <div id="map-main" ref={(map) => (this.mapNode = map)}></div>
      </>
    );
  }
}

export default withRouter(MapContainer);
