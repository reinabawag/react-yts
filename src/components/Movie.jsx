import React, { Component } from "react";
import Navbar from "./Navbar";

class Movie extends Component {
  state = {
    error: null,
    isLoaded: false,
    movie: []
  };

  controller = new AbortController();

  componentDidMount() {
    this.fetchMovieById();
    console.log(this.state);
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  fetchMovieById() {
    const url =
      "https://yts.lt/api/v2/movie_details.json?movie_id=" +
      this.props.match.params.id +
      "&with_images=true&with_cast=true";

    fetch(url, { signal: this.controller.signal })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            movie: result.data.movie
          });
        },
        error => {
          this.setState({
            isLoaded: false,
            error
          });
          console.log(error);
        }
      );
  }

  renderMovie() {
    console.log(this.state);
    if (this.state.isLoaded === false) {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <div class="row">
          <div class="col">
            <img
              src={this.state.movie.large_cover_image}
              class="img-fluid rounded img-thumbnail"
            />
          </div>
          <div class="col">
            <p>
              <strong>Title:</strong>&nbsp;{this.state.movie.title_long}
            </p>
            <p class="text-justify">
              <strong>Summary:</strong>&nbsp;{this.state.movie.description_full}
            </p>
            <div class="text-justify">
              {this.state.movie.cast && <strong>Cast:</strong>}
              <ul class="list-unstyled">
                {this.state.movie.cast &&
                  this.state.movie.cast.map(c => (
                    <li key={c} class="list-item">
                      <em>{c.name} </em> as {c.character_name}
                    </li>
                  ))}
              </ul>
            </div>
            <div class="text-justify">
              {this.state.movie.genres && <strong>Genre:</strong>}
              <ul class="list-inline">
                {this.state.movie.genres.length > 0 &&
                  this.state.movie.genres.map(g => (
                    <li key={g} class="list-inline-item">
                      {g}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="display-4">Movie</h1>
        <Navbar />
        {this.renderMovie()}
      </React.Fragment>
    );
  }
}

export default Movie;
