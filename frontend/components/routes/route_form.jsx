import React from 'react';
import Map from './map';
import {Link} from 'react-router-dom';

class RouteForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.userId,
      route_name:"",
      description:"",
      distance:"",
      route_info:"",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e)=>{
        return this.setState({[field]:e.currentTarget.value})
    }
  }

  handleSubmit(e){
    
    e.preventDefault();
    this.props.processForm(this.props.userId, this.state);
  }

  renderErrors(){
    console.log(this.props.errors)
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


    render(){
      // console.log(this.props);
        return (
          <>
            <div className="new-route-main">
                <div className="new-route-sidebar">
                  <form onSubmit={this.handleSubmit}>
                    <div>{this.renderErrors()}</div>
                    <label for="route-name">Route Name</label>
                    <input id="route-name" type="text" onChange={this.update("route_name")}/>
                    <label for="route-description">Description</label>
                    <textarea id="route-description" />
                    <label for="route-mode">Travel Mode</label> <br></br>
                    <select id="route-mode">
                      <option value="WALKING">Run</option>
                      <option value="BICYCLING">Bike</option>
                    </select><br></br>
                    <label for="route-distance-text">Distance</label>
                    <input id="route-distance-text" type="text" disabled="true" value=""/>
                  </form>
                </div>
                <div id="map-main">
                  <div className="new-edit-bar">
                    <div id="delete-marker">Delete Marker</div>
                    <div id="saveOrUpdate" onClick={this.handleSubmit}>{this.props.newOrEdit}</div>
                  </div>
                  <div id="map-box">
                    <Map></Map>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </>
        );
    }
}

export default RouteForm;