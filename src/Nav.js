import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <Link to="/signin">
              <li>signin</li>
            </Link>
            <Link to="/product">
              <li>product</li>
            </Link>
            <Link to="/signup">
              <li>signup</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
