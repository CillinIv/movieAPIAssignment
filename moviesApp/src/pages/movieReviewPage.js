import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieReview from "../components/movieReview";
import { AuthContext } from '../contexts/authContext';

const MovieReviewPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieReview review={props.location.state.review} /> 
      </PageTemplate>
  );
};

export default MovieReviewPage;