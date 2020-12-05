import React from 'react';
import MiniMap from './mini_map';
import {Link} from 'react-router-dom';

class Routes extends React.Component {

  constructor(props){
    super(props);
    this.renderMaps = this.renderMaps.bind(this);
  }

  componentDidMount(){
    this.props.getRoutes(this.props.userId);
    console.log(this.props);
    console.log(this.state);
  };

  renderMaps(){
      return (
        <>
        <div className="myMiniMaps">
          {Object.values(this.props.routes).map((route, idx)=> (
            <div key={`route=${idx}`}>
              <MiniMap info={this.props.routes[idx + 1]}/>
              <Link to='/home/routes/edit'>Edit Route</Link>
            </div>
          ))}
        </div>
        </>
      )   
  }

    render(){
      console.log(Object.values(this.props.routes));
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