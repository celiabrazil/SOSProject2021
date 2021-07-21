import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Company Name
          </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/profile" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-dark" type="submit">
                    Search
                  </button>
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
