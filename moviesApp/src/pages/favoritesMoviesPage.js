import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'
import { AuthContext } from '../contexts/authContext';
import { Container, Button, Divider,Grid, Form, Icon, Label, Menu, Input, Segment } from 'semantic-ui-react';
import { withRouter, Link } from "react-router-dom";

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const contextAuth = useContext(AuthContext);
  const { history } = props;
  const favorites = context.movies.filter( m => m.favorite )
  const favoritesUpcoming = context.upcoming.filter( m => m.favorite )
  const favoritesTopRated = context.topRated.filter( m => m.favorite )
  const favoritesTrending = context.trending.filter( m => m.favorite )

  return contextAuth.isAuthenticated ? (
    <>
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
    <MovieListPageTemplate
      movies={favoritesUpcoming}
      title={"Favorite Upcoming Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
    <MovieListPageTemplate
      movies={favoritesTopRated}
      title={"Favorite Top Rated"}
      action={movie => <AddReviewButton movie={movie} />}
    />
    <MovieListPageTemplate
      movies={favoritesTrending}
      title={"Favorite Trending Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />

    </>
  ) 
  
  : 

  (<Segment placeholder>
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

export default FavoriteMoviesPage;