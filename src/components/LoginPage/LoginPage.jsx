import React from 'react';
import classes from './LoginPage.module.css';

import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, TextField, Box, Container, Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function LoginPage() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [isEmailDirty, setIsEmailDirty] = useState(false);
  const [isPasswordDirty, setIsPasswordDirty] = useState(false);

  useEffect(() => {
    console.log(emailValue);
  }, [emailValue]);

  useEffect(() => {
    console.log(passwordValue);
  }, [passwordValue]);

  function submitHandler(e) {
    // e.preventDefault();

    // const requestBody = { email: emailValue, password: passwordValue };
    // const requestBody = {
    //   UserLogin: 'Misha',
    //   Password: '1234',
    // };

    // fetch('http://fitness-app.germanywestcentral.cloudapp.azure.com/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify(requestBody),
    // }).then((res) => {
    //   console.log(res.json());
    // });

    console.log();
  }

  const inputStyle = { width: '200px', height: '45px' };

  return (
    <div>
      <Container style={{ textAlign: 'center' }}>
        <h1>Данные для входа</h1>

        <form action="/">
          <Box my={3}>
            <TextField
              value={emailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
              }}
              id="standard-basic"
              type="email"
              // required
              variant="outlined"
              autoComplete="false"
              label="Почта"
            />
          </Box>
          <Box mb={1}>
            <TextField
              value={passwordValue}
              onChange={(e) => {
                setPasswordValue(e.target.value);
              }}
              id="standard-basic"
              variant="outlined"
              type="password"
              label="Пароль"
            />
          </Box>
          <br />
          {/* <AuthButton buttonText="Log in"/> */}
          <Box mb={3}>
            <Button
              type="submit"
              onClick={submitHandler}
              className={classes.loginButton}
              variant="contained"
              color="primary"
              style={{ width: '200px', height: '45px' }}>
              Log in
            </Button>
          </Box>
          <FormControlLabel control={<Checkbox name="checkedA" />} label="Google" />
          <FormControlLabel control={<Checkbox name="checkedA" />} label="Facebook" />
          <FormControlLabel control={<Checkbox name="checkedA" />} label="VK" />
        </form>
        <Link to="/register">Зарегистрироваться</Link>
        {/* <Route path="/register"> */}
      </Container>
    </div>
  );
}
