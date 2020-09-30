import React from "react";
import { Link } from "react-router-dom";

class LoggedInNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classN =
      this.props.location.pathname === "/signup"
        ? "login-button"
        : this.props.location.pathname === "/"
        ? "login-button"
        : "sign-up-button";
    const pathName =
      this.props.location.pathname === "/signup"
        ? "/login"
        : this.props.location.pathname === "/"
        ? "/login"
        : "/signup";
    const buttonText =
      this.props.location.pathname === "/login" ? "Sign Up" : "Log In";
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
              <Link className="dashboard-links" to="/dashboard">
                My Routes
              </Link>
              <Link className="dashboard-links" to="/dashboard">
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
          <Link className={classN} to="{pathName}">
            {buttonText}
          </Link>
          {/* <button onClick={this.props.logout}>Logout</button> */}
        </div>
      </nav>
    );
  }
}

export default LoggedInNav;
