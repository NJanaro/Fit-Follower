import React from 'react';
import MiniMap from './mini_map';
import {Link} from 'react-router-dom';
import { fetchRoute } from "../../actions/routes_actions";


class Routes extends React.Component {

  constructor(props){
    super(props);
    this.props.getRoutes(this.props.userId);
    this.state = {
      updated:false
    }
    this.renderMaps = this.renderMaps.bind(this);
  }
  
  componentDidUpdate(oldProps){
    if(oldProps != this.props){
      this.setState({updated: true})
    }
  }

  renderMaps(){
      return (
        <>
        <div className="myMiniMaps">
          {Object.values(this.props.routes).map((route, idx)=> {
            let time = route.created_at.split("T")
            return <div key={`route=${idx}`} className="miniMap">
              {/* <MiniMap info={route}/> */}
              <Link to={{
                          pathname: '/home/routes/edit',
                          state: {
                            info: route
                          }
                        }
                       }>
                         <span>
                          <MiniMap info={route}/>
                         </span>
              </Link>
              <div className="routeInfo">
              <Link className="routeName" to={{
                          pathname: '/home/routes/edit',
                          state: {
                            info: route
                          }
                        }
                       }>
                      {route.route_name}
              </Link>

              {/* created_at: "2020-12-30T18:52:32.530Z"
              description: "Walking"
              distance: "21.88 Miles"
              id: 3
              route_info: "{"origin":{"lat":40.814877738664926,"lng":-73.99315749230956},"destination":{"lat":40.845876735943875,"lng":-73.89702712121581},"waypoints":[{"location":{"lat":40.814877738664926,"lng":-73.99315749230956}},{"location":{"lat":40.74871668464755,"lng":-73.918313131958}},{"location":{"lat":40.82604971858595,"lng":-73.89410887780761}},{"location":{"lat":40.836930920074984,"lng":-73.92717361450195}},{"location":{"lat":40.845876735943875,"lng":-73.89702712121581}}],"travelMode":"WALKING"}"
              route_name: "Walk"
              user_id: 1 */}

                <div className="routeInfo-spec">{route.distance}<br /> <p className="type">Distance</p> </div>
                <div className="routeInfo-spec">{route.description}<br /> <p className="type">description</p> </div>
                <div className="routeInfo-time">Created on {time[0]}</div>


              </div>
              {/* </div> */}
            </div>
  })}
        </div>
      
        </>
      )   
  }

    render(){

      if(!this.props.routes[1] && this.state.updated == false) {
        return null;
      }
      return (
          <>
            {/* <div className="routes-real-main"> */}
              <div className="my-routes-main">
                <div className="my-routes-top">
                  <h1 id="page-title">My Routes</h1>
                  <Link 
                    to="/home/routes/new"
                    className="sign-up-button"
                    style={{marginBottom:"18px"}}>
                  Create New Route    
                  </Link>
                </div>
                  {this.renderMaps()}
              </div>
            {/* </div> */}
          </>
        );
    }
}

export default Routes;