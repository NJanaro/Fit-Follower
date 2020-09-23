import React from "react";

class WelcomeUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id:"",
        username: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
      return (e)=>{
          return this.setState({[field]:e.currentTarget.value})
      }
  }

  handleSubmit(e){
      e.preventDefault();
      this.props.createUser(this.state)
  }

  render() {
    return (
      <>
        <div className="sign-up">
          <form onSubmit={this.handleSubmit}>
            <h1 className="welcome">{this.props.message}</h1>
            <label htmlFor="username"></label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.update("username")}
            />
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
              type="text"
              placeholder="Password"
              onChange={this.update("password")}
            />
            <button className="signup-button">Sign Up</button>
          </form>
        </div>
      </>
    );
  }
}

export default WelcomeUserForm;