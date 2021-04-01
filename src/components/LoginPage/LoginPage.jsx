import React from 'react';
import classes from './LoginPage.module.css';

import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, TextField, Box } from '@material-ui/core';

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
      <div className="register-window">
        <h1>Hello from login page</h1>

        <form action="/">
          <Box mb={2}>
            <TextField id="standard-basic" label="Логин" />
          </Box>
          <Box mb={2}>
            <TextField id="standard-basic" label="Пароль" />
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

          <Button color="primary">new</Button>
        </form>
        <hr />
        {/* <Route path="/register"> */}
        <Link to="/register">Register</Link>
        {/* </Route> */}
      </div>
    </div>
  );
}
