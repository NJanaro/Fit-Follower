import React from 'react';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {

    render(){
        console.log(this.props.button.url)
        return(
            <nav className="navbar-box">
                <h1 className="navbar-logo">Fit Finder Logo Here</h1>
                <div className="nav-right">
                    <Link to={this.props.button.url}>{this.props.button.name}</Link>
                </div>


            </nav>
        )
    }
}

export default NavBar;