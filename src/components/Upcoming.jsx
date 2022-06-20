import React, { Component } from "react";

class Upcoming extends Component {
  state = {
    isLoaded: false,
    movies: [],
    error: null,
  };

  componentDidMount() {
    const movies = [...this.state.movies];

    fetch("https://yts.mx/api/v2/list_upcoming.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            movies: result.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
          console.log(error);
        }
      );
  }

  render() {
    return <React.Fragment>{}</React.Fragment>;
  }
}

export default Upcoming;
