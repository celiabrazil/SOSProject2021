import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Company Name
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-dark" type="submit">Search</button>
                </form>
              </li>
            </ul>
          </div>
        
        </div>
      
      </nav>
    </div>
  );
}

export default withRouter(Navigation);