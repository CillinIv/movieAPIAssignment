import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const favorites = context.movies.filter( m => m.favorite )
  const favoritesUpcoming = context.upcoming.filter( m => m.favorite )
  const favoritesTopRated = context.topRated.filter( m => m.favorite )
  const favoritesTrending = context.trending.filter( m => m.favorite )

  return (
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
  );
};

export default FavoriteMoviesPage;