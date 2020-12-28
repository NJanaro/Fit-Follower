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
    this.deleteMark = this.deleteMark.bind(this);
  }

  setDistance(meters, text) {
    const distanceText = document.getElementById("route-distance-text");
  }

  setMapOnAll(map) {
    for (let i = 0; i < this.state.markers.length; i++) {
      this.state.markers[i].setMap(map);
    }
  }

  renderMap() {
    const travelMode = document.getElementById("route-mode");

    this.directionsRenderer.setMap();

    let waypoints = this.state.markers;

    waypoints = waypoints.map((mark) => {
      return {
        lat: parseFloat(`${mark.position.lat()}`),
        lng: parseFloat(`${mark.position.lng()}`),
      };
    });

    let stops = waypoints;

    stops = stops.map((stop) => {
      return { location: stop };
    });

    let origin = waypoints[0] || this.routeInfo.origin;
    let finish = waypoints[waypoints.length - 1];
    let request = {
      origin: origin,
      destination: finish,
      waypoints: stops,
      travelMode: travelMode.value || this.routeInfo.travelMode,
    };

    if (request.origin) {
      this.directionsRenderer.setMap(null);

      this.directionsService.route(request, (result, status) => {
        let distance = 0;
        const legs = result.routes[0].legs;
        const showDistance = document.getElementById("route-distance-text");

        legs.forEach((leg) => {
          distance += leg.distance.value;
        });

        let toMiles = (distance * 0.00062137).toFixed(2);

        if (status == "OK") {
          this.directionsRenderer.setDirections(result);
          this.props.handler("distance", toMiles.toString() + " Miles");
          this.props.handler("route_info", JSON.stringify(request));
          this.directionsRenderer.setMap(this.map);
        } 
      });
    }
  }

  deleteMark() {
    if (this.state.markers.length == 0) {
      return;
    } else {
      this.directionsRenderer.setMap(null);

      this.state.markers[this.state.markers.length - 1].setMap(null);
      this.state.markers[this.state.markers.length - 1] = null;

      this.setState((oldState) => {
        oldState.markers.pop();
        return { markers: oldState.markers };
      }, this.renderMap);
    }
  }

  makeMark(p) {
    let marker = new google.maps.Marker({
      position: p,
      map: this.map,
    });

    this.setState(
      (state) => ({ markers: state.markers.concat([marker]) }),
      this.renderMap
    );
  }

  componentDidMount() {
    const travelMode = document.getElementById("route-mode");

    const mapStart = {
      center: { lat: 40.775566, lng: -73.960456 },
      zoom: 13,
    };

    this.map = new google.maps.Map(this.mapNode, mapStart);

    this.directionsRenderer = new google.maps.DirectionsRenderer({
      preserveViewport: true,
      suppressMarkers: true,
    });
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer.setMap(this.map);

    if (this.props.newOrEdit == "Update") {
      this.routeInfo = JSON.parse(this.props.routes.route_info);
      this.cords = Object.values(this.routeInfo.waypoints).map(
        (loc) => loc.location
      );

      this.cords.forEach((pos) => {
        return this.makeMark(pos);
      });
    }

    travelMode.addEventListener(
      "change",
      function () {
        let waypoints = this.state.markers.map((mark) => {
          return {
            lat: parseFloat(`${mark.position.lat()}`),
            lng: parseFloat(`${mark.position.lng()}`),
          };
        });

        let stops = waypoints;

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
          this.directionsService.route(request, (result, status) => {
            if (status == "OK") {
              let distance = 0;
              const legs = result.routes[0].legs;
              const showDistance = document.getElementById(
                "route-distance-text"
              );

              legs.forEach((leg) => {
                distance += leg.distance.value;
              });

              let toMiles = (distance * 0.00062137).toFixed(2);

              this.directionsRenderer.setDirections(result);
              this.props.handler("distance", toMiles.toString() + " Miles");
              this.props.handler("route_info", JSON.stringify(request));
            }
          });
        }
      }.bind(this)
    );

    google.maps.event.addListener(this.map, "click", (event) => {
      const latLng = event.latLng;
      this.makeMark(latLng);
    });

    const deleteButton = document.getElementById("delete-marker");

    deleteButton.addEventListener(
      "click",
      function () {
        this.deleteMark();
      }.bind(this)
    );
  }

  render() {
    return (
      <>
        <div id="map-main" ref={(map) => (this.mapNode = map)}></div>
      </>
    );
  }
}

export default withRouter(MapContainer);
