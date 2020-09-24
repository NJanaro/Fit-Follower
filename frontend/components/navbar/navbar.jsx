import React from 'react';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {

    render(){

        return(
            <nav className="navbar-box">
                <h1 className="navbar-logo">Fit Follower</h1>
                <div className="nav-right">

                    <Link className="login-button" to={this.props.button.url}>{this.props.button.name}</Link>
                    {/* put a button that onlclick will envoke this.props.logout (bring that in) */}
                </div>


            </nav>
        )
    }
}

export default NavBar;