import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieLists from "./components/MovieLists";
import Upcoming from "./components/Upcoming";
import Movie from "./components/Movie";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1 className="display-4">Home</h1>
            <Navbar />
            <div className="row">
              <div className="col">
                <strong>Upcoming Release</strong>
                <Upcoming />
              </div>
              <div className="col">
                <strong>Latest Release</strong>
              </div>
              <div className="col">
                <strong>Search</strong>
              </div>
            </div>
          </Route>
          <Route path="/movies" component={MovieLists} />
          <Route path="/about" component={About} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
