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
          {Object.values(this.props.routes).map((route, idx)=> (
            <div key={`route=${idx}`} className="miniMap">
              <MiniMap info={route}/>
              <Link to={{
                          pathname: '/home/routes/edit',
                          state: {
                            info: route
                          }
                        }
                       }>
                         Edit Route
              </Link>
              <div>{route.route_name}</div>
              {/* </div> */}
            </div>
          ))}
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
                    className="sign-up-button">
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