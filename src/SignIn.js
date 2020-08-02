import React, { Component } from "react";
import logo from "./logo.svg";
import "./signin.css";
import axios from "axios";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pswd: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/person/signin", this.state)
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, pswd } = this.state;
    return (
      <div className="text-center">
        <form
          className="form-signin"
          method="post"
          onSubmit={this.submitHandler}
        >
          <img className="mb-4" src={logo} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
        </form>
      </div>
    );
  }
}

export default SignIn;
