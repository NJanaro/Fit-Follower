import React from "react";
import {Link} from "react-router-dom";

class WelcomeUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };
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
    console.log(this.props.errors)
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
                  id="email"
                  type="text"
                  placeholder="Email"
                  onChange={this.update("email")}
                />
                <label htmlFor="password"></label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.update("password")}
                />
                <button className="signup-button">{this.props.formType}</button>
                <button className="signup-button" onClick={()=>this.demoLogin()}>Demo Login</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default WelcomeUserForm;