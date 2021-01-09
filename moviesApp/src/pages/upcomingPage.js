import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavoritesUpcoming'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("favorite" in m);
  });
  return (
      <PageTemplate 
        title='Up Coming'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;