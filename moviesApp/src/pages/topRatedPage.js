import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import { getTopRated } from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavoritesToprated'
import { AuthContext } from '../contexts/authContext';
import { Container, Button, Divider,Grid, Form, Icon, Label, Menu, Input, Segment } from 'semantic-ui-react';

const MovieListPage = (props) => {
  const context = useContext(MoviesContext);
  const contextAuth = useContext(AuthContext);
  const { history } = props;

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

  (
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
          <Button content='Login' icon = "privacy" size='big' onClick={() => history.push("/login")}/>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
      <Link to="/signup">
        <Button content='Sign up' icon='signup' size='big' />
      </Link>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>)
};

export default MovieListPage;