import React from 'react';
import {Link} from 'react-router-dom';
import { logout } from '../../actions/sessions_actions';


class NavBar extends React.Component {

    render(){
        const classN = this.props.location.pathname === "/signup" ? "login-button" : this.props.location.pathname === "/" ? "login-button" : "sign-up-button" ;
        const pathName = this.props.location.pathname === "/signup" ? "/login" : this.props.location.pathname === "/" ? "/login" : "/signup";
        const buttonText = this.props.location.pathname === "/login" ? "Sign Up" : "Log In"; 
        if(this.props.currentUser) return null;
        return (
          <nav className="navbar-box">
            <div className="navbar-left">
              <h1 className="navbar-logo">Fit Follower</h1>
            </div>
            <div className="nav-right">
              <Link className={classN} to={pathName}>
                {buttonText}
              </Link>
            </div>
          </nav>
        );
    }
}

export default NavBar;