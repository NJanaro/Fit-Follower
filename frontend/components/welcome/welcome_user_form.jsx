import React from "react";
import {Link} from "react-router-dom";

class WelcomeUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };
    this.props.resetErrors();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field){
      return (e)=>{
          return this.setState({[field]:e.currentTarget.value})
      }
  }

  handleSubmit(e){
      e.preventDefault();
      this.props.processForm(this.state);
  }


  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, idx)=> (
          <li className='error' key={`error=${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  demoLogin() {
    this.props.demoUser(this.props.demo);
  }


  render() {
    const classN = this.props.location.pathname === "/signup" ? "sign-up-main" : "login-main"; 
    window.props = this.props;
    return (
      <>
        <div
          className="sign-up-main"
          style={this.props.background}
        >
          <div className="form-box">
            <form onSubmit={this.handleSubmit}>
              <div className="welcome">{this.props.message}</div>
              <div className="input-fields">
                {this.renderErrors()}
                <label htmlFor="email"></label>
                <input
                  className="userInput"
                  id="email"
                  type="text"
                  placeholder="Email"
                  onChange={this.update("email")}
                />
                <label htmlFor="password"></label>
                <input
                  className="userInput"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.update("password")}
                />
                <button className="signup-button">{this.props.formType}</button>
                <div className="signup-button-demo" onClick={()=>this.demoLogin()}><div>Demo Login</div></div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default WelcomeUserForm;