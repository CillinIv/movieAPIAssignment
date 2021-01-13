import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import { getTopRated } from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavoritesToprated'
import { AuthContext } from '../contexts/authContext';

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const contextAuth = useContext(AuthContext);

  const movies = context.topRated.filter((m) => {  // New
    return !("favorite" in m);
  });
  return contextAuth.isAuthenticated ? (
      <PageTemplate 
        title='Top Rated'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  ) 

  :

  (<p>salutations</p>)
};

export default MovieListPage;