import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { MovieContext } from "../MovieContext";

const MovieLists = () => {
  const [movies, setMovies] = useContext(MovieContext);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await fetch("https://yts.mx/api/v2/list_movies.json");
    const movies = await data.json();
    setMovies(movies.data.movies);
  };

  function addDefaultSrc(ev) {
    ev.target.src = "https://picsum.photos/230";
  }

  function renderMovies() {
    if (movies.length == 0) {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <>
          {movies.map(movie => (
            <figure key={movie.id} className="figure m-3">
              <Link to={"/movie/" + movie.id}>
                <img
                  src={movie.medium_cover_image}
                  onError={addDefaultSrc}
                  className="figure-img img-fluid rounded"
                  alt={movie.title}
                  height="315"
                />

                <figcaption className="figure-caption">
                  {movie.title_long}
                </figcaption>
              </Link>
            </figure>
          ))}
        </>
      );
    }
  }

  return (
    <>
      <h1 className="display-4">Movies</h1>
      <Navbar />
      {renderMovies()}
    </>
  );
};

export default MovieLists;
