import React, { Component } from "react";
import "./css/style.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      password: "",
      profession: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fullnamehandler = event => {
    this.setState({
      fullName: event.target.value,
    });
  };
  emailhandler = event => {
    this.setState({
      email: event.target.value,
    });
  };

  passwordhandler = event => {
    this.setState({
      password: event.target.value,
    });
  };

  professionhandler = event => {
    this.setState({
      profession: event.target.value,
    });
  };

  handleSubmit = event => {
    // This doesn't work right. It doesn't render the full name
    alert(`$(this.state.fullName) Registered Successfully!!!`);
    console.log(this.state);
    this.setState({
      fullName: "",
      email: "",
      password: "",
      profession: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div class="container">
        <form id="form" class="form" onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <div class="form-control">
            <label>Full Name</label>
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.fullnamehandler}
              placeholder="Enter Your Full Name"
            ></input>
          </div>
          <div class="form-control">
            <label>Email</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.emailhandler}
              placeholder="Enter Your Email"
            ></input>
          </div>
          <div class="form-control">
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.passwordhandler}
              placeholder="Enter Your Password"
            ></input>
          </div>
          <div class="form-control">
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
