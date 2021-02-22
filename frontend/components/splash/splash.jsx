import React from 'react';
import { Link, withRouter } from 'react-router-dom';


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
                    <a
                      target="_blank"
                      className="github-link splash-link"
                      href="https://github.com/NJanaro"
                      style={{ backgroundImage: `url(${window.githubURL})` }}
                    >
                      Check out my GitHub
                    </a>
                    <a
                      target="_blank"
                      className="splash-link"
                      href="mailto:nick.janaro@gmail.com?Subject=Great%20Site!"
                      style={{ backgroundImage: `url(${window.gmailURL})` }}
                    >
                      Contact me
                    </a>
                    <a
                      target="_blank"
                      className="splash-link"
                      href="https://linkedin.com/in/nick-janaro"
                      style={{ backgroundImage: `url(${window.liURL})` }}
                    >
                      Find me on Linkedin
                    </a>
                    <p className="or">or</p>
                    <Link
                      className="splash-link"
                      to="/signup"
                      style={{ backgroundImage: `url(${window.emailURL})` }}
                    >
                      Sign Up with email
                    </Link>
                    <p className="already-member">Already a Member? <Link to='/login' style={{textDecoration: 'none'}}>Log In</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(Splash);