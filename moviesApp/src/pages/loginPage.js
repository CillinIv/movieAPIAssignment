import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { Container, Button, Icon, Label, Menu, Input } from 'semantic-ui-react';

const LoginPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <>
	<Container text>
      <h2>Login</h2>
      <p>You must log in to view movies </p>
      <Input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></Input><br /><br />
      <Input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></Input><br /><br />
      {/* Login web form  */}
      <Button onClick={login} class="ui primary button">Log in</Button>
      <p>Not Registered?
      <Link to="/signup"> Sign Up!</Link></p>
	</Container>
    </>
  );
};

export default LoginPage;