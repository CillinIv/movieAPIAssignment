import React, {useContext} from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from '../components/reviewForm'
import { AuthContext } from '../contexts/authContext';
import { Container, Button, Divider,Grid, Form, Icon, Label, Menu, Input, Segment } from 'semantic-ui-react';
import { withRouter, Link } from "react-router-dom";

const ReviewFormPage = props => {
  const contextAuth = useContext(AuthContext);
  const { history } = props;
  
  return contextAuth.isAuthenticated ? (
      <PageTemplate movie={props.location.state.movie}>
          <ReviewForm movie={props.location.state.movie} />
      </PageTemplate>
  ):
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
export default ReviewFormPage;