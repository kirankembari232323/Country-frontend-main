import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import logo from "../logo.png";

class Header extends Component {
  render() {
    return (
        <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </li>
         
          <li className="navbar-item">
            <Link to="/country" className="nav-link">
              Country List
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/createcountry" className="nav-link">
              Create  Country 
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Header;
