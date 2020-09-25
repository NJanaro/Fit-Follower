import React from 'react';
import {Link} from 'react-router-dom';
import { logout } from '../../actions/sessions_actions';


class NavBar extends React.Component {

    render(){

        return(
            <nav className="navbar-box">
                <h1 className="navbar-logo">Fit Follower</h1>
                <div className="nav-right">

                    <Link className="login-button" to={this.props.button.url}>{this.props.button.name}</Link>
                    <button onClick={this.props.logout}>Logout</button>
                </div>


            </nav>
        )
    }
}

export default NavBar;