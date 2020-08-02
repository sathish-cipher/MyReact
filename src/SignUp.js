import React, { Component } from "react";
import logo from "./logo.svg";
import "./signin.css";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      pswd: "",
      lname: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/persons/signup", this.state)
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    const { email, fname, pswd, lname } = this.state;
    return (
      <div>
        <form
          className="form-signin"
          method="post"
          onSubmit={this.submitHandler}
        >
          <img className="mb-4" src={logo} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Please Register here</h1>
          <label className="sr-only">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            required
            name="fname"
            value={fname}
            onChange={this.changeHandler}
          />
          <label className="sr-only">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            required
            name="lname"
            value={lname}
            onChange={this.changeHandler}
          />
          <label className="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            name="email"
            value={email}
            onChange={this.changeHandler}
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            name="pswd"
            value={pswd}
            onChange={this.changeHandler}
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign up
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
        </form>
      </div>
    );
  }
}

export default SignUp;
