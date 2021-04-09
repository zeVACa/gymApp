import React from 'react';
import classes from './LoginPage.module.css';

import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, TextField, Box, Container, Checkbox  } from '@material-ui/core';
import FormControlLabel from "@material-ui/core/FormControlLabel"

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
      <Container style={{ marginTop: '150px', textAlign:'center' }}>
      <h1>Gym-App</h1>

        <form action="/" >
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
              color="primary"
              style={{width: '200px', height: '45px'}}
              >
              Log in
            </Button>
          </Box>
          <FormControlLabel
        control={<Checkbox name="checkedA" />}
        label="Google"
      />
      <FormControlLabel
        control={<Checkbox name="checkedA" />}
        label="Facebook"
      />
      <FormControlLabel
        control={<Checkbox name="checkedA" />}
        label="VK"
      />
        </form>
        <hr />
        {/* <Route path="/register"> */}
        <Link to="/register">Register</Link>
        {/* </Route> */}
        {/* testing new branch */}
      </Container>
    </div>
  );
}
