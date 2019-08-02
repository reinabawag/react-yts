import React, { useContext } from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { MovieContext } from "../MovieContext";

const Navbar = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <React.Fragment>
      {console.log(movies)}
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
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
            Cart&nbsp;
            <span className="badge badge-pill badge-light">
              {movies.length}
            </span>
          </Link>
        </li>
      </ul>
      <hr />
    </React.Fragment>
  );
};

export default Navbar;
