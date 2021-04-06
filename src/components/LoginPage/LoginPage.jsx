import React from 'react';
import classes from './LoginPage.module.css';

import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, TextField, Box, Container } from '@material-ui/core';

export default function LoginPage() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    console.log(e.currentTarget.value);

    alert(1);
  }

  console.log(classes);

  return (
    <div>
      <Container style={{ paddingTop: '120px' }}>
        <h1>Hello from login page</h1>

        <form action="/">
          <Box my={3}>
            <TextField id="standard-basic" variant="outlined" autoComplete="false" label="Почта" />
          </Box>
          <Box mb={1}>
            <TextField id="standard-basic" variant="outlined" type="password" label="Пароль" />
          </Box>
          <br />
          {/* <AuthButton buttonText="Log in"/> */}
          <Box mb={3}>
            <Button
              onClick={submitHandler}
              className={classes.loginButton}
              variant="contained"
              color="primary">
              Log in
            </Button>
          </Box>
        </form>
        <hr />
        {/* <Route path="/register"> */}
        <Link to="/register">Register</Link>
        {/* </Route> */}
      </Container>
    </div>
  );
}
