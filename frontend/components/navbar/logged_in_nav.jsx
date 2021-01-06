import React from "react";
import { Link, withRouter } from "react-router-dom";
import {logout} from '../../actions/sessions_actions';
import {connect} from 'react-redux';

class LoggedInNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <nav className="navbar-box">
        <div className="navbar-left">
          <Link to='/home/dashboard' style={{textDecoration:"none"}}>
            <h1 className="navbar-logo">Fit Follower</h1>
          </Link>
          <div
            className="search"
            style={{ backgroundImage: `url(${window.magURL})` }}
          ></div>
          <div className="dropdown">
            <div className="dashboard-hidden-content">
              <Link className="dashboard-links" to="/home/routes">
                My Routes
              </Link>
              <Link className="dashboard-links" to="/home/workouts">
                My Workouts
              </Link>
            </div>
            <div
              style={{ backgroundImage: `url(${window.downCaretURL})` }}
              className="dashboard-hidden-trigger"
            >
              Dashboard
            </div>
          </div>
        </div>
        <div className="nav-right">
          <div onClick={()=>this.props.logout()} className="sign-up-button" >
            Log out
          </div>
          {/* <button onClick={this.props.logout}>Logout</button> */}
        </div>
      </nav>
    );
  }
}



const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default withRouter(connect(null, mDTP)(LoggedInNav))