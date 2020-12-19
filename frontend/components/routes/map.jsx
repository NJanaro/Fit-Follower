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
    this.renderMap = this.renderMap.bind(this);
  }

  setDistance(meters, text) {
    const distanceText = document.getElementById("route-distance-text");
  }

  setMapOnAll(map) {
    for (let i = 0; i < this.state.markers.length; i++) {
      this.state.markers[i].setMap(map);
    }
  }

  renderMap(){
    const travelMode = document.getElementById("route-mode")
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


      let waypoints = this.state.markers;
      console.log(waypoints)

      waypoints = waypoints.map((mark) => {
        return {
          lat: parseFloat(`${mark.position.lat()}`),
          lng: parseFloat(`${mark.position.lng()}`),
        };
      });
  
      let stops = waypoints;
      console.log(waypoints)
  
      stops = stops.map((stop) => {
        return { location: stop };
      });
  
      let origin = waypoints[0] || this.routeInfo.origin;
      let finish = waypoints[waypoints.length - 1] || this.routeInfo.destination;
      console.log(this.routeInfo)
      let request = {
        origin: origin,
        destination: finish,
        waypoints: stops,
        travelMode: travelMode.value || this.routeInfo.travelMode,
      };
     
      directionsService.route(request, (result, status) => {
        let distance = 0
        const legs = result.routes[0].legs;
        const showDistance = document.getElementById("route-distance-text");
  
        legs.forEach(leg=>{
          distance += leg.distance.value;
        })
  
        let toMiles = (distance * 0.00062137).toFixed(2)
        
        if (status == "OK") {
          directionsRenderer.setDirections(result); //result.routes.legs.
          // showDistance.setAttribute("value", toMiles.toString() + " Miles")
          this.props.handler("distance", toMiles.toString() + " Miles");
          this.props.handler("route_info", JSON.stringify(request));
  
        }else{
          console.log("ERROR")
        }
      });

    


  }

  makeMark(p) {
    
    let marker = new google.maps.Marker({
      position: p,
      map: this.map,
    });
    // function setStateFunction(state, props) {
      // const newState = {markers: state.markers.concat([marker])};
      // return newState;
      // };
    
      // this.setState(setStateFunction);
    this.setState(state => (
      {markers: state.markers.concat([marker])}
      ), this.renderMap
    );
  }

  componentDidMount() {

    const travelMode = document.getElementById("route-mode");


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

    

    if(this.props.location.state){
      ;
      this.routeInfo = JSON.parse(this.props.location.state.info.route_info);  
      this.cords = Object.values(this.routeInfo.waypoints).map(loc => loc.location);
      this.cords.forEach((pos) => {
        
        return this.makeMark(pos)
      });
    }

      



    travelMode.addEventListener("change", function(){
      let waypoints = this.state.markers.map((mark) => {
        return {
          lat: parseFloat(`${mark.position.lat()}`),
          lng: parseFloat(`${mark.position.lng()}`),
        };
      });

      let stops = waypoints

      stops = stops.map((stop) => {
        return { location: stop };
      });

      let origin = waypoints[0];
      let finish = waypoints[waypoints.length - 1];

      let request = {
        origin: origin,
        destination: finish,
        waypoints: stops,
        travelMode: travelMode.value,
      };

      if (request.origin) {
        directionsService.route(request, (result, status) => {
          if (status == "OK") {
            let distance = 0
            const legs = result.routes[0].legs;
            const showDistance = document.getElementById("route-distance-text");
    
            legs.forEach(leg=>{
              distance += leg.distance.value;
            })
    
            let toMiles = (distance * 0.00062137).toFixed(2)        

            directionsRenderer.setDirections(result);
            this.props.handler("distance", toMiles.toString() + " Miles");
            this.props.handler("route_info", JSON.stringify(request));

            // showDistance.setAttribute("value", toMiles.toString() + " Miles")

          }
        });
      }
    }.bind(this))

    const deleteButton = document.getElementById("delete-marker");


    google.maps.event.addListener(this.map, "click", (event) => {
      directionsRenderer.setMap(this.map);

      const latLng = event.latLng;
      this.makeMark(latLng);

      let waypoints = this.state.markers.map((mark) => {
        return {
          lat: parseFloat(`${mark.position.lat()}`),
          lng: parseFloat(`${mark.position.lng()}`),
        };
      });

      let stops = waypoints

      stops = stops.map((stop) => {
        return { location: stop };
      });

      let origin = waypoints[0];
      let finish = waypoints[waypoints.length - 1];

      let request = {
        origin: origin,
        destination: finish,
        waypoints: stops,
        travelMode: travelMode.value,
      };

      directionsService.route(request, (result, status) => {
        let distance = 0
        const legs = result.routes[0].legs;
        const showDistance = document.getElementById("route-distance-text");

        legs.forEach(leg=>{
          distance += leg.distance.value;
        })

        let toMiles = (distance * 0.00062137).toFixed(2)
        
        if (status == "OK") {
          directionsRenderer.setDirections(result); //result.routes.legs.
          // showDistance.setAttribute("value", toMiles.toString() + " Miles")
          this.props.handler("distance", toMiles.toString() + " Miles");
          this.props.handler("route_info", JSON.stringify(request));

        }
      });
    });

    deleteButton.addEventListener("click", function(){
        if (this.state.markers.length == 0) {
          return;
        } else {
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

          let stops = waypoints

          stops = stops.map((stop) => {
            return { location: stop };
          });

          let origin = waypoints[0];
          let finish = waypoints[waypoints.length - 1];

          let request = {
            origin: origin,
            destination: finish,
            waypoints: stops,
            travelMode: travelMode.value,
          };

          if (request.origin) {
            directionsService.route(request, (result, status) => {
              if (status == "OK") {
                let distance = 0
                const legs = result.routes[0].legs;
                const showDistance = document.getElementById("route-distance-text");
        
                legs.forEach(leg=>{
                  distance += leg.distance.value;
                })
        
                let toMiles = (distance * 0.00062137).toFixed(2)        

                directionsRenderer.setDirections(result);
                // showDistance.setAttribute("value", toMiles.toString() + " Miles")
                this.props.handler("distance", toMiles.toString() + " Miles");
                this.props.handler("route_info", JSON.stringify(request));




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
