import React from 'react';
import Map from './map';
import {Link, Redirect} from 'react-router-dom';

class RouteForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      route:{
        user_id: this.props.userId,
        route_name:"",
        description:"",
        distance:"",
        route_info:"",
      },
      redirect: false,
    }
    this.redirect = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handler = this.handler.bind(this);
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
    
    e.preventDefault();
    this.props.processForm(this.props.userId, this.state.route);
    //write if statement to link to my_routes_container if no errors
    // debugger;
    if(this.props.errors.length == 0){
      this.setState({redirect:true})
    }
  }

  renderErrors(){
    console.log(this.props.errors)
    if(this.props.errors){
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
  }


    render(){
        console.log(this.state);
        if (this.state.redirect){
          return <Redirect to='/home/route'/>;
        }
        return (
          <>
            <div className="new-route-main">
                <div className="new-route-sidebar">
                  <form onSubmit={this.handleSubmit}>
                    <div>{this.renderErrors()}</div>
                    <label htmlFor="route-name">Route Name</label>
                    <input id="route-name" type="text" onChange={this.update("route_name")}/>
                    <label htmlFor="route-description">Description</label>
                    <textarea id="route-description" onChange={this.update("description")}/>
                    <label htmlFor="route-mode">Travel Mode</label> <br></br>
                    <select id="route-mode">
                      <option value="WALKING">Run</option>
                      <option value="BICYCLING">Bike</option>
                    </select><br></br>
                    <label htmlFor="route-distance-text">Distance</label>
                    <input id="route-distance-text" onChange={this.update("distance")} type="text" disabled={true} value={this.state.distance}/>
                  </form>
                </div>
                <div id="map-main">
                  <div className="new-edit-bar">
                    <div id="delete-marker">Delete Marker</div>
                    <div id="saveOrUpdate" onClick={this.handleSubmit}>{this.props.newOrEdit}</div>
                    {this.redirect == true ? <Redirect to='/home/routes'/> : null}
                  </div>
                  <div id="map-box">
                    <Map handler = {this.handler}></Map>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </>
        );
    }
}

export default RouteForm;