import React from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <ul className="nav">
        {/* <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link">
            Cart&nbsp;<span className="badge badge-pill badge-light">0</span>
          </Link>
        </li>
      </ul>
      <hr />
    </React.Fragment>
  );
}

export default Navbar;
