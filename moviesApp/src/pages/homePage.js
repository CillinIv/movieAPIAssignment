import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import { AuthContext } from '../contexts/authContext';
import { Container, Button, Icon, Label, Menu, Input } from 'semantic-ui-react';

const MovieListPage = () => {
  const context = useContext(MoviesContext);

  const contextAuth = useContext(AuthContext);

  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });

  console.log(contextAuth.isAuthenticated);

  return contextAuth.isAuthenticated ? (
    <>
      <PageTemplate 
        title='No. Movies'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
    </>
  ) : (
    <>
      <Container>
      <p>This is your profile page where information of the user would go.</p> 
      </Container>
    </>
      )
}


export default MovieListPage;