import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <Link className="navbar-brand" to="/">
            <img
              className="img-responsive logo"
              src={"./CompanyLogo.svg"}
              alt="Believe"
            />
          </Link>

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
            <li
              className={`nav-item  ${
                props.location.pathname === "/regulations" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/regulations">
                Regulations
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
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
