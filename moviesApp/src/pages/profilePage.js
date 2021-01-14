import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { Container, Button, Divider,Grid, Form, Icon, Label, Menu, Input, Segment } from 'semantic-ui-react';

const BaseAuthHeader = (props) => {

  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <>
      <Container>
      <h1>Welcome {context.userName}!</h1><p>This is your profile page where information of the user would go.</p> <br /><br /> <Button id="smallButton" inverted color='red' onClick={() => context.signout()}>SignOut</Button>
      </Container>
    </>
  ) : (
    <>

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
  </Segment>





    {/* <Container>
    <h1>You are not logged in</h1>
    <p>Sign up or log into an account!</p>
    <Segment basic textAlign='center'>
        <Link to="/login">
          <Button class = "ui button" onClick={() => history.push("/login")} >
            Login
          </Button>
        </Link>
        
        <Divider horizontal>Or</Divider>
        
            <Link to="/signup">
          <Button class = "ui button" >SignUp</Button></Link>
          </Segment>
        </Container> */}
    </>
  );
};

export default withRouter(BaseAuthHeader);