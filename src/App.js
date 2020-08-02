import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import Prooduct from "./Prooduct";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import SignUp from "./SignUp";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/product" component={Prooduct} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}
const Home = () => (
  <div>
    <h1>This is Homepage</h1>
  </div>
);
export default App;
