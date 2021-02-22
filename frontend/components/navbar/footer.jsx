import React from "react";

class Footer extends React.Component {

    render(){
        return(
            <nav className="footer-box">
            <div className="navbar-left">
              <h1 className="navbar-logo" style={{color:"#717171"}}>Fit Follower</h1>

            </div>
            <div className="nav-right" >
                <a
                  target="_blank"
                  className="footerLink"
                  href="https://github.com/NJanaro"
                  style={{ backgroundImage: `url(${window.gitHubDark})` }}
                ></a>
                <a
                  target="_blank"
                  className="footerLink"
                  href="mailto:nick.janaro@gmail.com?Subject=Great%20Site!"
                  style={{ backgroundImage: `url(${window.gmailURL})` }}
                ></a>
                <a
                  target="_blank"
                  className="footerLink"
                  href="https://linkedin.com/in/nick-janaro"
                  style={{ backgroundImage: `url(${window.liURL})` }}
                ></a>
                <a
                  target="_blank"
                  className="footerLink"
                  href="https://nickjanaro.com"
                  style={{ backgroundImage: `url(${window.Headshot})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
                ></a>
            </div>
          </nav>

        )
    }

}

export default Footer;