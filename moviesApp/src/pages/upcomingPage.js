import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavoritesUpcoming'
import { AuthContext } from '../contexts/authContext';

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const contextAuth = useContext(AuthContext);
  
  const movies = context.upcoming.filter((m) => {  // New
    return !("favorite" in m);
  });

  
  return contextAuth.isAuthenticated ? (

      <PageTemplate 
        title='Up Coming'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />) 
      
      :
      
      (<p>hello</p>)






};

export default MovieListPage;