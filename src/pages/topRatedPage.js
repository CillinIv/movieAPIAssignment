import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import { getTopRated } from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavoritesToprated'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.topRated.filter((m) => {  // New
    return !("favorite" in m);
  });
  return (
      <PageTemplate 
        title='Top Rated'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;