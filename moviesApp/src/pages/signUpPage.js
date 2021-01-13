import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Container, Button, Icon, Label, Menu, Input } from 'semantic-ui-react';

const SignUpPage = props => {

  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
		context.register(userName, password);
	  	setRegistered(true);

    }
  }

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Redirect to="./login" />;
  }

  return (
    <>
	<Container text>
      <h2>Sign Up</h2>
      <p>You must register a username and password to log in, the password must have 1 number and letter </p>
      <Input value={userName} placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></Input><br /><br />
      <Input value={password} type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></Input><br /><br />
      <Input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></Input><br /><br />
      {/* Login web form  */}
      <Button onClick={register}>Register</Button>
	  </Container>
    </>
  );
};

export default SignUpPage;