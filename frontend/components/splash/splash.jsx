import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {


    render() {
        return (
          <div className="main">
            <div className="splash-main">
              <div className="splash-content">
                <h1 className="number1">The #1 app for runners and cyclists</h1>
                <div className="splash-content-col">
                  <img
                    className="splash-img"
                    src={window.splashURL}
                    alt="accessories-img"
                  />
                  <div className="link-box">
                    <a className="github-link, splash-link" href="https://github.com/NJanaro" >Check out my GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Splash;