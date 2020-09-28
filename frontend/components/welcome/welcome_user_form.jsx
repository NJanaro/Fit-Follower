import React from "react";

class WelcomeUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
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

  render() {
    const classN = this.props.location.pathname === "/signup" ? "sign-up-main" : "login-main"; 
    window.props = this.props;
    return (
      <>
        <div
          className="sign-up-main"
          style={{ backgroundImage: `url(${window.mountainbikeURL})` }}
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
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default WelcomeUserForm;