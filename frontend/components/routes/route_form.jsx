import React from 'react';
import Map from './map_container';
import EditMap from './mini_map';
import {Link, Redirect, withRouter} from 'react-router-dom';
import MiniMap from './mini_map';
import { fetchRoute } from "../../actions/routes_actions";


class RouteForm extends React.Component {
  
  constructor(props) {
    super(props);
    
    
    if(this.props.newOrEdit == "Update"){
      this.props.getRoute(this.props.userId, this.props.routeId)
    }

    this.state = {
      user_id: this.props.userId,
      route_name: "",
      description:"",
      distance:"",
      route_info:"",
      redirect:false
    }
    
    this.redirect = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handler = this.handler.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    
  }

  handler(key, value){
    this.setState({
      [key]:value
    })
  }

  update(field){
    return (e)=>{
        return this.setState({[field]:e.currentTarget.value})
    }
  }





  handleSubmit(e){
    const cb = function(promise){
      if(promise){
        this.setState({redirect:true})
      }
    }.bind(this)
    
    e.preventDefault();
    // let info = JSON.stringify(this.state)
    if (this.props.newOrEdit == "Save"){

      this.props.processForm(this.props.userId, this.state)
        .then((promise) => {
            cb(promise)}
          );
    }else if(this.props.newOrEdit == "Update"){
      this.props.processForm(this.props.userId, this.props.routeId, this.state)
        .then((promise) => {
            cb(promise)
        });
    }
  }

  handleDelete(e){
    const cb = function(promise){
      if(promise){
        this.setState({redirect:true})
      }
    }.bind(this)

    e.preventDefault();

    this.props.deleteRoute(this.props.userId, this.props.routeId)
      .then((promise) => {
        cb(promise)
        });

  }

  renderErrors(){

    if(this.props.errors.length > 0){
      return (
        <ul>
          {this.props.errors.map((error, idx)=> (
            <li className='error' key={`error=${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      )
    }
  };

  renderDelete(){
    if (this.props.deleteRoute){
    return <div id="delete-route" onClick={this.handleDelete}>Delete Route</div>;
    }
  }

  componentDidMount(){
    if(this.props.newOrEdit == "Save")this.routeDetails = {travelMode: "Walking"};
    this.forceUpdate();
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props && this.props.newOrEdit == "Update"){
      if(!this.updated){
        this.routeDetails = JSON.parse(this.props.route.route_info);
      }else{
        this.routeDetails = {travelMode: "Walking"};
      }
      this.setState({
          user_id: this.props.userId,
          route_name: this.props.route.route_name,
          description: this.props.route.description,
          distance: this.props.route.distance,
          route_info: this.routeDetails,
          redirect:false
      });
      this.updated = true;
    }
  }


    render(){


        if (this.state.redirect){
          return <Redirect to='/home/routes'/>;
        }else if(this.props.newOrEdit == "Update" && !this.updated){
          return null;
        }else if(!this.routeDetails){
          return null;
        }
  
        
        return (
          <>
            <div className="new-route-main">
                <div className="new-route-sidebar">
                  <form onSubmit={this.handleSubmit}>
                    <div>{this.renderErrors()}</div>
                    <label htmlFor="route-name">Route Name</label>
                    <input id="route-name" type="text" onChange={this.update("route_name")} value={this.state.route_name}/>
                    <label htmlFor="route-description">Description</label>
                    <textarea id="route-description" onChange={this.update("description")} value={this.state.description}/>
                    <label htmlFor="route-mode">Travel Mode</label> <br></br>
                    <select defaultValue={this.routeDetails.travelMode} id="route-mode">
                      <option value="WALKING">Run</option>
                      <option value="BICYCLING">Bike</option>
                    </select>
                    <br></br>
                    <label htmlFor="route-distance-text">Distance</label>
                    <input id="route-distance-text" onChange={this.update("distance")} type="text" disabled={true} value={this.state.distance}/>
                  </form>
                </div>
                <div id="map-main">
                  <div className="new-edit-bar">
                    {this.renderDelete()}
                    <div id="delete-marker">Remove Marker</div>
                    <div id="saveOrUpdate" onClick={this.handleSubmit}>{this.props.newOrEdit}</div>
                  </div>
                  <div id="map-box">
                  <Map handler = {this.handler} newOrEdit = {this.props.newOrEdit}></Map>
                  </div>
                </div>
              </div>
          </>
        );
    }
}

export default withRouter(RouteForm);