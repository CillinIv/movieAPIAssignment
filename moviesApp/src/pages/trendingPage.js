import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import {getTrendingMovies} from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavoritesTrending'
import { AuthContext } from '../contexts/authContext';

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const contextAuth = useContext(AuthContext);

  const movies = context.trending.filter((m) => { // New
    return !("favorite" in m);
  });


  
  return contextAuth.isAuthenticated ? (
      <PageTemplate 
        title='Trending'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  ) 
  
  : 
  
  (<p>greetings</p>)
};

export default MovieListPage;