import React from 'react';
import Map from './map_container';
import EditMap from './mini_map';
import {Link, Redirect} from 'react-router-dom';
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
    // this.setSelected = this.setSelected.bind(this);

    // this.props.getRoute(this.props.userId, this.props.route.id);

    
  }

  // componentDidMount(){
  //   debugger
  //   this.props.getRoute(this.props.userId, this.props.routeId);
  // }


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
    this.props.processForm(this.props.userId, this.state)
      .then((promise) => {
          cb(promise)}
        );
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

  // setSelected(select, val){
  //   debugger
  //   for (let i = 0; i < select.options.length - 1; i++) {
  //     if (select.options[i].value == val) {
  //       select.options[i].selected = true;
  //       break;
  //     }
  //     return;
  //   };
  // }

  renderMap(){
    if(this.props.newOrEdit == "Update"){

      return <Map handler = {this.handler} newOrEdit = {this.props.newOrEdit}></Map>
    }else{
    return <Map handler = {this.handler}></Map>
    }
  }

    componentDidUpdate(prevProps){
      if (prevProps !== this.props){
        this.routeDetails = JSON.parse(this.props.route.route_info);
        // this.setSelected(document.getElementById("route-mode"), this.routeInfo.travelMode);
        this.setState({
            user_id: this.props.userId,
            route_name: this.props.route.route_name,
            description: this.props.route.description,
            distance: this.props.route.distance,
            route_info: this.props.route.route_info,
            redirect:false
          })
      }
    }


    render(){


        if (this.state.redirect){
          return <Redirect to='/home/routes'/>;
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
                    <div id="delete-marker">Delete Marker</div>
                    <div id="saveOrUpdate" onClick={this.handleSubmit}>{this.props.newOrEdit}</div>
                  </div>
                  <div id="map-box">
                    {this.renderMap()}
                  </div>
                </div>
              </div>
            {/* </div> */}
          </>
        );
    }
}

export default RouteForm;