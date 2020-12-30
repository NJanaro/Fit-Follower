import React from "react";
import { Link, withRouter } from "react-router-dom";
import {logout} from '../../actions/sessions_actions';
import {connect} from 'react-redux';

class LoggedInNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const classN =
    //   this.props.location.pathname === "/signup"
    //     ? "login-button"
    //     : this.props.location.pathname === "/"
    //     ? "login-button"
    //     : "sign-up-button";
    // const pathName =
    //   this.props.location.pathname === "/signup"
    //     ? "/login"
    //     : this.props.location.pathname === "/"
    //     ? "/login"
    //     : "/signup";
    // const buttonText =
    //   this.props.location.pathname === "/login" ? "Sign Up" : "Log In";
    //   debugger
    return (
      <nav className="navbar-box">
        <div className="navbar-left">
          <h1 className="navbar-logo">Fit Follower</h1>
          <div
            className="search"
            style={{ backgroundImage: `url(${window.magURL})` }}
          ></div>
          <div className="dropdown">
            <div className="dashboard-hidden-content">
              <Link className="dashboard-links" to="/home/routes">
                My Routes
              </Link>
              <Link className="dashboard-links" to="/home/dashboard">
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