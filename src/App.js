import React from "react";
import "./App.css";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieLists from "./components/MovieLists";
import Movie from "./components/Movie";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <MovieProvider>
            <Route path="/" exact component={MovieLists} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={Movie} />
          </MovieProvider>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
