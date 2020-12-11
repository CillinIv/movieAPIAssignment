import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import {getTrendingMovies} from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavoritesTrending'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.trending.filter((m) => { // New
    return !("favorite" in m);
  });
  return (
      <PageTemplate 
        title='Trending'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;