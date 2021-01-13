import React, {useContext} from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from '../components/reviewForm'
import { AuthContext } from '../contexts/authContext';


const ReviewFormPage = props => {
  const contextAuth = useContext(AuthContext);

  return contextAuth.isAuthenticated ? (
      <PageTemplate movie={props.location.state.movie}>
          <ReviewForm movie={props.location.state.movie} />
      </PageTemplate>
  ):
  (<p>Test</p>)
};
export default ReviewFormPage;