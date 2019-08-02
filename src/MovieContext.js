import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <MovieContext.Provider value={[movies, setMovies, cart, setCart]}>
      {props.children}
    </MovieContext.Provider>
  );
};
